import { assertStrictEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("This test case will fail", async () => {
  await Deno.writeTextFile("./sample.txt", "Hello Deno!");
  const actual = await Deno.readTextFile("./sample.txt");
  const expected = "Hello Deno!";
  assertStrictEquals(actual, expected);
});
