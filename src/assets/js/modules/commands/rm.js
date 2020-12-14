import { dataStrc } from "../controllers/data.js";

class Rm {
    executeComand(fileName) {
        let error = false;
        if (fileName.split(" ")[1]) {
            error = dataStrc.deleteFolderOrDocument(fileName.split(" ")[1]);
        } else {
            error = "File name is required.";
        }
        return error;
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
