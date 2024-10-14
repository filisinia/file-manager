import { chdir } from "node:process";
import { access } from "node:fs/promises";
import { isAbsolute, join } from "node:path";

export const goTo = async (path) => {
  try {
    let fullPath = path;

    if (fullPath.startsWith("/")) {
      fullPath = fullPath.slice(1);
    }

    if (isAbsolute(fullPath)) {
      fullPath = join(process.cwd(), path);
    }

    await access(fullPath);
    chdir(fullPath);

    return "ok";
  } catch {
    return "Operation failed";
  }
};
