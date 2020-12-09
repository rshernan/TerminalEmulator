import { dataStrc } from "../controllers/data.js";

class Mkdir {
    executeCommand(actualPath, writedLine) {
        console.log(this.validate(writedLine[1]));
        console.log(error);
    }

    validate(name) {
        /*if (navigator.appVersion.indexOf("Win")) {
            return /^(?!(?:CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])(?:\.[^.]*)?$)[^<>:"/\\|?*\x00-\x1F]*[^<>:"/\\|?*\x00-\x1F\ .]$/.test();
        }
        return !/[^a-zA-Z0-9\-]/.test();*/
    }
}

export { Mkdir };
