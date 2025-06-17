import { expect, expectTypeOf, test } from "vitest";
import { fetchClientID, testClientID } from "../dist";

let clientID;
test("fetchClientID", async function () {
    clientID = await fetchClientID();
    expectTypeOf(clientID).toBeString();
});
test("testClientID", async function () {
    expect(clientID).toBeDefined();
    expect(await testClientID(clientID)).toStrictEqual(true);
    expect(await testClientID("foobar")).toStrictEqual(false);
});
