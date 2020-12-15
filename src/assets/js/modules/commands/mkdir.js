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
            error = "File name needed.";
        }
        return error;
    }

    validate(name) {
        if (navigator.appVersion.indexOf("Win")) {
            return /^(?!(?:CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])(?:\.[^.]*)?$)[^<>:"/\\|?*\x00-\x1F]*[^<>:"/\\|?*\x00-\x1F\ .]$/.test(
                name
            );
        }
        return !/[^a-zA-Z0-9\-]/.test(name);
    }

    man() {
        return `
    NAME
        mkdir - make directories

    SYNOPSIS
        mkdir DIRECTORY...

    DESCRIPTION
        Create the DIRECTORY(ies), if they do not already exist.
    `;
    }
}

export { Mkdir };
