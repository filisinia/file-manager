import { access } from "node:fs/promises";
import { isAbsolute, join, resolve } from "node:path";

export const getFullPath = async (path) => {
  const fullPath = isAbsolute(path) ? resolve(path) : join(process.cwd(), path);

  await access(fullPath);

  return fullPath;
};
