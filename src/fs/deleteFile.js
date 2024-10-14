import { rm } from "node:fs/promises";

export const deleteFile = async (path) => {
  try {
    await rm(path);
  } catch {
    console.error("Operation failed");
  }
};
