require("colors");

const { inquirerMenu, pause } = require("./helpers/inquirer.js");

console.clear();

const main = async () => {
  let answer = "0";

  do {
    answer = await inquirerMenu();
    console.log({ answer });
    await pause();
  } while (answer !== "0");
};

main();
