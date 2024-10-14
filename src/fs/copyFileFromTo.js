import { createReadStream, createWriteStream } from "node:fs";
import { join, basename } from "node:path";
import { pipeline } from "node:stream/promises";

export const copyFileFromTo = async (fromPath, toPath) => {
  try {
    const newPath = join(toPath, basename(fromPath));

    const readableStream = createReadStream(fromPath);
    const writableStream = createWriteStream(newPath);

    await pipeline(readableStream, writableStream);
  } catch {
    console.error("Operation failed");
  }
};
