const fs = require("fs");
const path = require("path");

const readAndWriteFile = fs.readFile(
  "./components/read/readLongTxt.txt",
  "utf-8",
  (err, data) => {
    if (err) {
      throw Error("Error reading text");
    } else {
      // console.log(data);
      fs.writeFile("./components/read/write.txt", data, "utf-8", (err) => {
        if (err) {
          console.log("writting file error");
        } else {
          console.log("file successfully writter");
        }
      });
    }
  }
);
