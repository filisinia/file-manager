import { chdir } from "node:process";
import { getFullPath } from "../utils/getFullPath.js";

export const goTo = async (path) => {
  try {
    const fullPath = await getFullPath(path);
    chdir(fullPath);
  } catch {
    console.log("Operation failed");
  }
};
