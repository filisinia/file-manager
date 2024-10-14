import { createReadStream } from "node:fs";
import { getFullPath } from "../utils/getFullPath.js";

export const getFileContent = async (path) => {
  try {
    const fullPath = await getFullPath(path);
    const readableStream = createReadStream(fullPath);

    readableStream.on("data", (data) => {
      console.log(data.toString());
    });
  } catch {
    console.error("Operation failed", error);
  }
};
