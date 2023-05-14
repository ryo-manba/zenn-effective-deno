import { ensureDir, path } from "./deps.ts";

await ensureDir(path.resolve("dist"));
