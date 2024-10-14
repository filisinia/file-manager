import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";

export const getHash = async (filePath) => {
  try {
    const hash = createHash("sha256");

    const data = await readFile(filePath);

    hash.update(data);
    const fileHash = hash.digest("hex");

    console.log(`Hash for file ${filePath}: ${fileHash}`);
  } catch (err) {
    console.error("Operation failed");
  }
};
