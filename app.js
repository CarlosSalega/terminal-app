require("colors");

const {inquirerMenu} = require("./helpers/inquirer");

console.clear();

const main = async() => {
  console.log("Hello World");

  let answer = "";

  do {

    answer = await inquirerMenu();
    console.log({answer});
    
  } while (answer !== "0");

}

main();