import {assert, fail, assertEquals} from "https://deno.land/std/testing/asserts.ts";
import {wasmModule} from "../index";
Deno.test({
    name: "addition",
    fn(): void {
        assertEquals(wasmModule.add(1, 2), 3);
        console.log("ok");
    },
  });
