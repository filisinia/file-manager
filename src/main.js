import process, { stdin } from "node:process";
import { getUsername } from "./utils/getUsername.js";
import { goUp } from "./modules/goUp.js";
import { goTo } from "./modules/goTo.js";
import { getContent } from "./modules/getContent.js";
import { getFileContent } from "./modules/getFileContent.js";
import { createNewFile } from "./modules/createNewFile.js";

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

    console.log(`You are currently in ${process.cwd()}`);
  });

  process.on("SIGINT", () => {
    console.log(finishMessage);
    process.exit();
  });
};

await main();
