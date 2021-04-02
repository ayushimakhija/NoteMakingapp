/*const fs = require("fs");
fs.writeFileSync("Note.txt", "this a file was created by nodejs");
try {
  fs.appendFileSync("Note.txt", "data to append");
  console.log('The "data to append" was appended to file!');
} catch (err) {
  /* Handle the error */
/*const Lastname = require("./utils.js");

let firstName = "Ayushi";
console.log(firstName);
console.log(Lastname);
*/
//const validator = require("validator");
const chalk = require("chalk");
const { describe } = require("yargs");
const yargs = require("yargs");
const notesutils = require("./notes.js");
//console.log(chalk.green.inverse.bold(notes));
//validator package
//console.log(validator.isEmail("ayushi9ym.19@gmail.com"));
//console.log(validator.isURL("https//ayushi"));

// chalk package
//console.log(chalk.red("sucess"));

//taking input
//console.log(process.argv[2]);
//console.log(process.argv[3]);

//taking input doing some stuff with it
/*const command = process.argv[2];
if (command === "add") {
  console.log("adding notes");
} else if (command === "remove") {
  console.log("removig notes");
}*/
//console.log(process.argv);

//changing version
yargs.version("1.1.0");

//commands : add, remove,list,read

// add
yargs.command({
  command: "add",
  builder: {
    title: {
      describe: "Add notes",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Add notes",
      demandOption: true,
      type: "string",
    },
  },
  describe: "adding a note",
  handler: function (argv) {
    //console.log("title:" + argv.title);
    //console.log("title:" + argv.option);
    notesutils.addNotes(argv.title, argv.body);
  },
});
// remove
yargs.command({
  command: "remove",
  builder: {
    title: {
      describe: "remove notes",
      demandOption: true,
      type: "string",
    },
  },
  describe: "removing notes",
  handler: function (argv) {
    notesutils.removeNotes(argv.title);
    //console.log("removing notes");
  },
});
// list
yargs.command({
  command: "list",
  describe: "listing notes",
  handler: function () {
    notesutils.listNotes();
    //console.log("listing notes");
  },
});
// read
yargs.command({
  command: "read",
  builder: {
    title: {
      describe: "read notes",
      demandOption: true,
      type: "string",
    },
  },
  describe: "reading notes",
  handler: function (argv) {
    notesutils.readNotes(argv.title);
    console.log("reading notes");
  },
});

//key:value pair input
//console.log(yargs.argv);

//parsing using yargs package
yargs.parse();
