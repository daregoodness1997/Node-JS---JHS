const { readFile, writeFile } = require("fs");
const { read } = require("fs/promises");
console.log("start session");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/resultAsync.txt",
      `Here is the result ${first} : ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with task");
        console.log(result);
      }
    );
  });
});
console.log("start new task")