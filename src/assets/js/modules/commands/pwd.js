import { dataStrc } from "../controllers/data.js";

class Pwd {
    showCurrentPath() {
        this.path = dataStrc.path;
        return dataStrc.pathToString(this.path);
    }

    man() {
        return `
NAME
       pwd - print name of current/working directory

SYNOPSIS
       pwd

DESCRIPTION
       Print the full filename of the current working directory.
    `;
    }
}

export { Pwd };
