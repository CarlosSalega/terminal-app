const inquirer = require("inquirer");
require("colors");

const questions = [
  {
    type: "list",
    name: "option",
    message: "What do you want to do?",
    choices: [
      {
        value: "1",
        name: "1. Create task",
      },
      {
        value: "2",
        name: "2. List task",
      },
      {
        value: "3",
        name: "3. List completed tasks",
      },
      {
        value: "4",
        name: "4. List pending tasks",
      },
      {
        value: "5",
        name: "5. Complete task(s)",
      },
      {
        value: "6",
        name: "6. Delete task",
      },
      {
        value: "0",
        name: "7. Exit",
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("======================".green);
  console.log("   Select an Option".green);
  console.log("======================\n".green);

  const { option } = await inquirer.prompt(questions);

  return option;
};

const pause = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `\nPress ${"ENTER".green} to continue\n`,
    },
  ];

  console.log("\n");
  await inquirer.prompt(question);
};

module.exports = {
  inquirerMenu,
  pause,
};
