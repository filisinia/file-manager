import process from "node:process";

const main = () => {
  const usernameArg = process.argv.find((arg) => arg.startsWith("--username="));
  const username = usernameArg ? usernameArg.split("=")[1] : "Anonymous";

  const welcomeMessage = `Welcome to the File Manager, ${username}!`;
  const finishMessage = `Thank you for using File Manager, ${username}, goodbye!`;
  console.log(welcomeMessage);

  process.on("exit", () => {
    console.log(finishMessage);
  });
};

main();
