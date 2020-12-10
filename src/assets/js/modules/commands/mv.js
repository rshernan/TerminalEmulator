import { dataStrc } from "../controllers/data.js";

class Mv {
    executeComand(fileName) {
        let commandArray = fileName.split(" ");
        if (commandArray.length === 3) {
            dataStrc.moveDocumentOrFolder();
        }
    }
}

export { Mv };
