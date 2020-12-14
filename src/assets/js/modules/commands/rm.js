import { dataStrc } from "../controllers/data.js";

class Rm {
    executeComand(fileName) {
        if (fileName.split(" ")[1]) {
            dataStrc.deleteFolderOrDocument(fileName.split(" ")[1]);
        }
    }

    man() {
        return `
NAME
       rm - remove files or directories

SYNOPSIS
       rm [FILE]...

DESCRIPTION
       This manual page documents the GNU version of rm.  rm removes each specified file.  By default, it does not remove directories.
`;
    }
}

export { Rm };
