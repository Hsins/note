// import packages
const fs = require("fs");
const matter = require("gray-matter");

// setup folders
const FOLDERS = ["Course", "Coursera", "GeekTime", "Udemy", "Lynda"];

// helper functions
const getDirectories = (source) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => source + dirent.name + "/");

const getFiles = (parentFileName) => {
  let data = {};
  const children = [];
  const files = fs.readdirSync(`${parentFileName}`);

  files.forEach((fileName) => {
    if (fileName.includes(".md") && fileName !== "README.md") {
      children.push(`${parentFileName + fileName}`.replace('docs', ''));
    } else if (fileName === "README.md") {
      data = matter(fs.readFileSync(parentFileName + fileName, "utf8")).data;
    }
  });

  return { data: data, children: children };
};

module.exports = {
  get sidebars() {
    const sidebars = {};

    FOLDERS.forEach((folder) => {
      let paths = getDirectories(`docs/${folder}/`);
      let lists = [];

      paths.forEach((path) => {
        note = getFiles(`${path}`);
        note.data['path'] = path.replace("docs/", ".").replace(folder, '');

        let sidebar = {
          title: note.data.title,
          path: `${path.replace("docs", "")}`,
          collapsable: true,
          sidebarDepth: 3,
          children: note.children,
        };

        sidebars[`${path}`.replace("docs", "")] = [sidebar];
        lists.push(note.data);
      });

      fs.writeFileSync(
        `./docs/.vuepress/data/${folder}.json`,
        JSON.stringify(lists, null, 2),
        'utf-8'
      );
    });
    return sidebars;
  }
};
