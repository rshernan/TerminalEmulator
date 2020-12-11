import { dataStrc } from "../controllers/data.js";

class Mv {
    executeComand(fileName) {
        let error=false;
        let commandArray = fileName.split(" ");
        if (commandArray.length === 3) {
           error=dataStrc.moveDocumentOrFolder(commandArray[1], commandArray[2]);
        }else{
            error='mv requires 3 arguments: mv actualPath futurePath.';
        }
        return error;
    }
}

export { Mv };
