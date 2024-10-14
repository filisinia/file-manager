import { EOL, cpus, homedir, userInfo, arch } from "node:os";

const commandsOS = {
  eol: () => (EOL === "\n" ? "\\n" : "\\r\\n"),
  cpus: cpus,
  homedir: homedir,
  username: () => userInfo().username,
  architecture: arch,
};

export const getOSData = (flag) => {
  try {
    const command = flag.slice(2);

    if (commandsOS[command]) {
      console.log(commandsOS[command]());
    } else {
      console.error("Operation failed");
    }
  } catch {
    console.error("Operation failed");
  }
};
