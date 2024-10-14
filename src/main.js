import process, { stdin } from "node:process";
import { getUsername } from "./utils/getUsername.js";
import { commandList } from "./utils/commandList.js";

const main = async () => {
  const username = getUsername();
  console.log(`Welcome to the File Manager, ${username}!`);

  stdin.setEncoding("utf-8");

  stdin.on("data", async (data) => {
    const [command, ...args] = data.trim().toLowerCase().split(" ");

    if (commandList[command]) {
      await commandList[command](...args);
    } else {
      console.error("Invalid input");
    }

    console.log(`You are currently in ${process.cwd()}`);
  });

  process.on("SIGINT", () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.exit();
  });
};

await main();
