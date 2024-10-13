import process, { stdin } from "node:process";

const main = async () => {
  const usernameArg = process.argv.find((arg) => arg.startsWith("--username="));
  const username = usernameArg ? usernameArg.split("=")[1] : "Anonymous";

  const welcomeMessage = `Welcome to the File Manager, ${username}!`;
  const finishMessage = `Thank you for using File Manager, ${username}, goodbye!`;
  console.log(welcomeMessage);

  stdin.setEncoding("utf-8");

  stdin.on("data", (data) => {
    const userText = data.trim().toLowerCase();

    switch (userText) {
      case "up":
        console.log("UP COMMAND");
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
