export async function testClientID(clientID: string): Promise<boolean> {
    const { status } = await fetch(`https://api-v2.soundcloud.com/?client_id=${clientID}`, { method: "HEAD" });
    return status === 404;
}
