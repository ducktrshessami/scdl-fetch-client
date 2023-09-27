const assert = require("assert");
const lib = require("../dist");

describe("CJS", function () {
    let clientID;

    it("fetchClientID", async function () {
        clientID = await lib.fetchClientID();
        assert.strictEqual(typeof clientID, "string");
    });

    it("testClientID", async function () {
        assert(clientID);
        assert.strictEqual(await lib.testClientID(clientID), true);
        assert.strictEqual(await lib.testClientID("foobar"), false);
    });
});
