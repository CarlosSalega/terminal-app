const inquirer = require("inquirer");
require("colors");

const questions = [
  {
    type: "list",
    name: "option",
    message: "What do you want to do?",
    choices: ["option1", "option2", "option3"]
  }
]

const inquirerMenu = async () => {

  console.clear();
  console.log("======================".green);
  console.log("   Select an Option".green);
  console.log("======================\n".green);

  const option = await inquirer.prompt(questions);

  return option;

}

module.exports = {
  inquirerMenu,
}