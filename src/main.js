import process, { stdin } from "node:process";
import { getUsername } from "./utils/getUsername.js";
import { goUp } from "./modules/goUp.js";

const main = async () => {
  const username = getUsername();
  const welcomeMessage = `Welcome to the File Manager, ${username}!`;
  const finishMessage = `Thank you for using File Manager, ${username}, goodbye!`;
  console.log(welcomeMessage);

  stdin.setEncoding("utf-8");

  stdin.on("data", (data) => {
    const userText = data.trim().toLowerCase();

    switch (userText) {
      case "up":
        console.log("UP COMMAND");
        goUp();
        break;
      case "ls":
        console.log("LS COMMAND");
        break;
      default:
        console.log("Invalid input");
    }

    console.log(`You are currently in ${process.cwd()}`);
  });

  process.on("SIGINT", () => {
    console.log(finishMessage);
    process.exit();
  });
};

await main();
