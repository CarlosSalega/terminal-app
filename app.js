require("colors");
const { showMenu, pauseProgram } = require("./helpers/message");

console.clear();

const main = async() => {
  console.log("Hello World");

  let answer = "";

  do {
    answer = await showMenu();
    console.log({answer});
    await pauseProgram();
  } while (answer !== "0");

}

main();