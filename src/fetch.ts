import { ClientFetchError } from "./error";

function iteratorLast<T>(it: IterableIterator<T>): T | null {
    let item: IteratorResult<T>;
    let last: T;
    do {
        item = it.next();
        if (!item.done) {
            last = item.value;
        }
    } while (!item.done);
    return last! ?? null;
}

export async function fetchClientID(): Promise<string> {
    const initial = await fetch("https://soundcloud.com/");
    if (initial.status >= 400) {
        throw new ClientFetchError(`Initial request failed: ${initial.status} ${initial.statusText}`);
    }
    const initialBody = await initial.text();
    const results = initialBody.matchAll(/<script\s+crossorigin\s+src=["'](https?:\/\/[^"']+)["']><\/script>/gi);
    const lastUrl = iteratorLast(results);
    if (!lastUrl) {
        throw new ClientFetchError("Failed to parse script URL");
    }
    const script = await fetch(lastUrl[1]);
    if (script.status >= 400) {
        throw new ClientFetchError(`Script request failed: ${script.status} ${script.statusText}`);
    }
    const scriptBody = await script.text();
    const result = scriptBody.match(/\bclient_id:\s*["']([^"']+)["']/i);
    if (!result) {
        throw new ClientFetchError(`Failed to parse client ID from script`);
    }
    return result[1];
}
