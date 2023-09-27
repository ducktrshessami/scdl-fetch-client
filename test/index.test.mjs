import assert from "assert";
import { fetchClientID, testClientID } from "../dist/index.mjs";

describe("ESM", function () {
    let clientID;

    it("fetchClientID", async function () {
        clientID = await fetchClientID();
        assert.strictEqual(typeof clientID, "string");
    });

    it("testClientID", async function () {
        assert(clientID);
        assert.strictEqual(await testClientID(clientID), true);
        assert.strictEqual(await testClientID("foobar"), false);
    });
});
