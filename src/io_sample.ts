// import { readAll } from "https://deno.land/std/io/util.ts";
import {
  iter,
  readAll,
  writeAll,
} from "https://deno.land/std@0.105.0/io/util.ts";
import { StringReader } from "https://deno.land/std@0.172.0/io/readers.ts";

const decoder = new TextDecoder();
const deno = Deno.run({
  cmd: [Deno.execPath(), "--version"],
  stdout: "piped",
});
const output = await readAll(deno.stdout);
deno.stdout.close();
deno.close();
console.log(decoder.decode(output));

const encoder = new TextEncoder();
await writeAll(Deno.stdout, encoder.encode("Hello, Deno!"));

const r = new StringReader("Hello, Deno!");
const it = iter(r, { bufSize: 1 });
const results = [];
for await (const x of it) {
  results.push(decoder.decode(x));
}
console.log(results);
/* => ["H", "e", "l", "l", "o", ",", " ", "D", "e", "n", "o", "!"] */
