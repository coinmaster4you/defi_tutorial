import {assert, fail, assertEquals} from "https://deno.land/std/testing/asserts.ts";

Deno.test({
    name: "addition",
    fn(): void {
        const assert = require("assert");
        const myModule = require("../index");
        assert.strictEqual(myModule.add(1, 2), 3);
        console.log("ok");
    },
  });
