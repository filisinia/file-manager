import { createReadStream, createWriteStream } from "node:fs";
import { createBrotliCompress, createBrotliDecompress } from "node:zlib";
import { pipeline } from "node:stream/promises";
import { deleteFile } from "../fs/deleteFile.js";

export const fileCompressor = async (type, filePath, destPath) => {
  try {
    const compressFunc =
      type === "compress" ? createBrotliCompress() : createBrotliDecompress();
    const source = createReadStream(filePath);
    const destination = createWriteStream(destPath);

    await pipeline(source, compressFunc, destination);
    await deleteFile(filePath);
  } catch (error) {
    console.error("Operation failed");
  }
};
