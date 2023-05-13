import {
  basename,
  dirname,
  extname,
  isAbsolute,
  join,
  parse,
  resolve,
} from "https://deno.land/std/path/mod.ts";
import { exists } from "https://deno.land/std/fs/exists.ts";
import { ensureDir } from "https://deno.land/std/fs/ensure_dir.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";

console.log(join("dist", "index.html")); // => "dist/index.html"
console.log(extname("public/index.html")); // => ".html"
console.log(basename("src/protocol/mod.ts")); // => "mod.ts"
console.log(dirname("src/protocol/mod.ts")); // => "src/protocol"
console.log(isAbsolute("/path/to/file.txt")); // => true
console.log(isAbsolute("file.txt")); // => false
console.log(parse("/path/to/file.txt")); // => { root: "/", dir: "/path/to", base: "file.txt", ext: ".txt", name: "file" }
console.log(resolve("public/index.html")); // => "/home/uki00a/work/public/index.html"

await exists("./sample.txt"); // => `true` or `false`
await ensureDir("./path/to/dir");

assert(true); // => OK
assert(1 != 1); // => NG
