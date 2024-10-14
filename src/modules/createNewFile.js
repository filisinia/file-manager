import { cwd } from "node:process";
import { join } from "node:path";
import { appendFile } from "node:fs/promises";

export const createNewFile = async (newFilename) => {
  try {
    const filePath = join(cwd(), newFilename);
    await appendFile(filePath, "");
  } catch {
    console.error("Operation failed");
  }
};
