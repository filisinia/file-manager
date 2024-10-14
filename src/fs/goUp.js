import process from "node:process";
import path from "node:path";

export const goUp = () => {
  const currentDir = process.cwd();
  const parentDir = path.dirname(currentDir);
  
  if (currentDir !== parentDir) {
    process.chdir(parentDir);
  }
};
