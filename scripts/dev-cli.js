const inquirer = require("inquirer").default;
const concurrently = require("concurrently");

const scripts = [
  {
    friendlyName: "routinely",
    label: "🌅 Routinely (web app)",
    command: "pnpm --filter web dev",
  },
  {
    friendlyName: "storybook",
    label: "🧪 Storybook (component library)",
    command: "pnpm --filter @routinely/ui storybook",
  },
];

async function promptScripts() {
  const answers = await inquirer.prompt([
    {
      type: "checkbox",
      pageSize: 10,
      name: "chosenScripts",
      message: "Which applications do you want to start?",
      choices: scripts.map((s) => s.label),
    },
  ]);

  const selected = answers.chosenScripts
    .map((label) => scripts.find((s) => s.label === label))
    .filter(Boolean);

  if (selected.length < 1) {
    console.log("Nothing selected, exiting...");
    process.exit(0);
  }

  const concurrent = concurrently(
    selected.map((s) => ({ name: s.friendlyName, command: s.command })),
    {
      prefix: "[{time} - {name}]",
      prefixColors: "auto",
      timestampFormat: "HH:mm:ss",
    },
  );

  concurrent.result.catch((err) => {
    console.error("Error running scripts:", err);
  });
}

promptScripts();
