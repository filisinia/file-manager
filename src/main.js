import process, { stdin } from "node:process";
import { getUsername } from "./utils/getUsername.js";
import { goUp } from "./modules/goUp.js";
import { goTo } from "./modules/goTo.js";

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
      const res = await goTo(path);

      if (res !== "ok") console.log(res);
    }

    console.log(`You are currently in ${process.cwd()}`);
  });

  process.on("SIGINT", () => {
    console.log(finishMessage);
    process.exit();
  });
};

await main();
