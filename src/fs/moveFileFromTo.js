import { rm } from "node:fs/promises";
import { copyFileFromTo } from "./copyFileFromTo.js";

export const moveFileFromTo = async (fromPath, toPath) => {
  try {
    await copyFileFromTo(fromPath, toPath);
    await rm(fromPath);
  } catch {
    console.error("Operation failed");
  }
};
