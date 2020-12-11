import { dataStrc } from "../controllers/data.js";

class Mkdir {
  executeCommand(writedLine) {
    let error = false;
    if (writedLine.split(" ")[1]) {
      if (this.validate(writedLine.split(" ")[1])) {
        error = dataStrc.createFolder(writedLine.split(" ")[1]);
      } else {
        error = "File name format isn't correct";
      }
    } else {
        error='File name needed.';
    }
    return error;
  }

  validate(name) {
    if (navigator.appVersion.indexOf("Win")) {
      console.log("windows");
      return /^(?!(?:CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])(?:\.[^.]*)?$)[^<>:"/\\|?*\x00-\x1F]*[^<>:"/\\|?*\x00-\x1F\ .]$/.test(
        name
      );
    }
    console.log("others");
    return !/[^a-zA-Z0-9\-]/.test(name);
  }
}

export { Mkdir };
