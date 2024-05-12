#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt({
    message: "Enter your sentence to count words:",
    name: "Sentence",
    type: "input",
});
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence word count is: ${words.length}`);
