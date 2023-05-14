// この関数内で`file`は開放されない
async function processFile(path: string): Promise<void> {
  const file = await Deno.open(path);

  // file.close();
}

Deno.test("processFile", async () => {
  await processFile("./sample.txt");
});
