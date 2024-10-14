import { goUp } from "../fs/goUp.js";
import { goTo } from "../fs/goTo.js";
import { getContent } from "../fs/getContent.js";
import { getFileContent } from "../fs/getFileContent.js";
import { createNewFile } from "../fs/createNewFile.js";
import { renameFile } from "../fs/renameFile.js";
import { copyFileFromTo } from "../fs/copyFileFromTo.js";
import { moveFileFromTo } from "../fs/moveFileFromTo.js";
import { deleteFile } from "../fs/deleteFile.js";

export const commandList = {
  up: goUp,
  cd: goTo,
  ls: getContent,
  cat: getFileContent,
  add: createNewFile,
  rn: renameFile,
  cp: copyFileFromTo,
  mv: moveFileFromTo,
  rm: deleteFile,
};
