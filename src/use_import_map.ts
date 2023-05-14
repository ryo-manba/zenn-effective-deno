import * as path from "std/path";
import { ensureDir } from "std/fs/ensure_dir";

await ensureDir(path.resolve("dist"));
