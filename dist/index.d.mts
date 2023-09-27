declare function fetchClientID(): Promise<string>;

declare function testClientID(clientID: string): Promise<boolean>;

export { fetchClientID, testClientID };
