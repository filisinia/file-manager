import { readdir } from "node:fs/promises";

export const getContent = async () => {
  try {
    const folderContent = await readdir(process.cwd(), { withFileTypes: true });

    const folders = [];
    const files = [];

    for (const file of folderContent) {
      if (file.isDirectory()) {
        folders.push({ Name: file.name, Type: "Directory" });
      } else {
        files.push({ Name: file.name, Type: "File" });
      }
    }

    folders.sort((a, b) => a.Name.localeCompare(b.Name));
    files.sort((a, b) => a.Name.localeCompare(b.Name));

    const tableContent = [...folders, ...files];

    console.table(tableContent);
  } catch (error) {
    console.error("Operation failed", error);
  }
};
