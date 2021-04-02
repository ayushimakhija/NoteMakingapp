const fs = require("fs");
const chalk = require("chalk");
function getnotes() {
  const content = "this is my notes";
  return content;
}
function loadnotes() {
  try {
    const bufferdata = fs.readFileSync("notes.json");
    //console.log(bufferdata);
    //console.log(bufferdata.toString());
    const data = bufferdata.toString();
    return JSON.parse(data);
  } catch (e) {
    console.log(e);
    console.log("error");
    return [];
  }
}
const addNotes = function (title, body) {
  const notes = loadnotes();
  const duplicatesnotes = notes.filter(function (notes) {
    return notes.title === title;
  });
  if (duplicatesnotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    console.log(notes);
    savedNotes(notes);
  } else {
    console.log("title already taken");
  }
};
const savedNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

//removing notes
const removeNotes = function (title) {
  const notes = loadnotes();
  const tokeepNotes = notes.filter(function (notes) {
    return notes.title !== title;
  });
  if (tokeepNotes.length === notes.length) {
    console.log(chalk.green.inverse.bold("no note removed"));
  } else {
    savedNotes(tokeepNotes);
    console.log(chalk.red.inverse.bold("note removed"));
  }
};

//listing all notes
const listNotes = function () {
  const notes = loadnotes();
  console.log(chalk.green.inverse.bold("your nodes"));
  notes.forEach((element) => {
    console.log("title:" + element.title);
    console.log("body:" + element.body);
  });
};
const readNotes = function (title) {
  const notes = loadnotes();
  console.log(chalk.green.inverse.bold("reading a particular notes"));
  notes.forEach((element) => {
    if (element.title === title) {
      console.log("title:" + element.title);
      console.log("body:" + element.body);
    }
  });
};

module.exports = {
  getnotes: getnotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes,
};
