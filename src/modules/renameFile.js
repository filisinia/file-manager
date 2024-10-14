import { rename } from "node:fs/promises";
import { join, dirname } from "node:path";

export const renameFile = async (pathToFile, newFilename) => {
  try {
    const newPathToFile = join(dirname(pathToFile), newFilename);
    await rename(pathToFile, newPathToFile);
  } catch {
    console.error("Operation failed");
  }
};
