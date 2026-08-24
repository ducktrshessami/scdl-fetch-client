import { expect, expectTypeOf, test } from "vitest";
import { fetchClientID, testClientID } from "../";

let clientID: string;
test("fetchClientID", async function () {
    clientID = await fetchClientID();
    expectTypeOf(clientID).toBeString();
    expect(clientID.length).toBeGreaterThan(0);
});
test("testClientID", async function () {
    expect(clientID).toBeDefined();
    expect(await testClientID(clientID)).toStrictEqual(true);
    expect(await testClientID("foobar")).toStrictEqual(false);
});
