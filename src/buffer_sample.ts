// 見つからない
// import { readAllSync, writeAllSync } from "https://deno.land/std/streams/conversion.ts"
import { Buffer } from "https://deno.land/std/io/buffer.ts";
const decoder = new TextDecoder();
const encoder = new TextEncoder();
const buffer = new Buffer();
Deno.writeAllSync(buffer, encoder.encode("Hello, "));
Deno.writeAllSync(buffer, encoder.encode("World!"));
console.log(decoder.decode(Deno.readAllSync(buffer))); // => "Hello, World!"
