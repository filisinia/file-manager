import process from "node:process";

export const getUsername = () => {
  const usernameArg = process.argv.find((arg) => arg.startsWith("--username="));
  const username = usernameArg ? usernameArg.split("=")[1] : "Anonymous";

  return username;
};
