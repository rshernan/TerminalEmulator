import { createFolder } from "../controllers/data.js";

class Mkdir {
    executeCommand(actualPath, writedLine) {
        let error = createFolder();
        console.log(error);
    }
}

export { Mkdir };
