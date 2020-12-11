import { dataStrc } from "../controllers/data.js";

class Mv {
    executeComand(fileName) {
        let commandArray = fileName.split(" ");
        if (commandArray.length === 3) {
            console.log(commandArray[1]);
            console.log(commandArray[2]);
            dataStrc.moveDocumentOrFolder(commandArray[1], commandArray[2]);
        }
    }
}

export { Mv };
