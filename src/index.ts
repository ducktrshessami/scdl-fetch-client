export async function fetchClientID(): Promise<string> {

}

export async function testClientID(clientID: string): Promise<boolean> {
    const res = await fetch(`https://api-v2.soundcloud.com/resolve?client_id=${clientID}`, { method: "HEAD" });
    return res.status === 200 || res.status === 404;
}
