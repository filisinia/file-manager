import process, { stdin } from "node:process";
import { getUsername } from "./utils/getUsername.js";
import { goUp } from "./fs/goUp.js";
import { goTo } from "./fs/goTo.js";
import { getContent } from "./fs/getContent.js";
import { getFileContent } from "./fs/getFileContent.js";
import { createNewFile } from "./fs/createNewFile.js";
import { renameFile } from "./fs/renameFile.js";
import { copyFileFromTo } from "./fs/copyFileFromTo.js";
import { moveFileFromTo } from "./fs/moveFileFromTo.js";
import { deleteFile } from "./fs/deleteFile.js";

const main = async () => {
  const username = getUsername();
  const welcomeMessage = `Welcome to the File Manager, ${username}!`;
  const finishMessage = `Thank you for using File Manager, ${username}, goodbye!`;
  console.log(welcomeMessage);

  stdin.setEncoding("utf-8");

  stdin.on("data", async (data) => {
    const userText = data.trim().toLowerCase();

    if (userText === "up") goUp();

    if (userText.startsWith("cd")) {
      const path = userText.slice(2).trim();
      await goTo(path);
    }

    if (userText === "ls") {
      await getContent();
    }

    if (userText.startsWith("cat")) {
      const path = userText.slice(3).trim();
      await getFileContent(path);
    }

    if (userText.startsWith("add")) {
      const newFilename = userText.slice(3).trim();
      await createNewFile(newFilename);
    }

    if (userText.startsWith("rn")) {
      const userInput = userText.slice(2).trim().split(" ");
      await renameFile(userInput[0], userInput[1]);
    }

    if (userText.startsWith("cp")) {
      const userInput = userText.slice(2).trim().split(" ");
      await copyFileFromTo(userInput[0], userInput[1]);
    }

    if (userText.startsWith("mv")) {
      const userInput = userText.slice(2).trim().split(" ");
      await moveFileFromTo(userInput[0], userInput[1]);
    }

    if (userText.startsWith("rm")) {
      const path = userText.slice(2).trim();
      await deleteFile(path);
    }

    console.log(`You are currently in ${process.cwd()}`);
  });

  process.on("SIGINT", () => {
    console.log(finishMessage);
    process.exit();
  });
};

await main();
