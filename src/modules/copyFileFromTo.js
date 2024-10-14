import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";

export const copyFileFromTo = async (fromPath, toPath) => {
  try {
    const readableStream = createReadStream(fromPath);
    const writableStream = createWriteStream(toPath);

    await pipeline(readableStream, writableStream);
  } catch {
    console.error("Operation failed");
  }
};
