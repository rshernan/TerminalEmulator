import { dataStrc } from "../controllers/data";

class Touch {
    executeComand(filename) {
        if (filename.split(" ")[1]) {
            dataStrc.createDocument(filename.split(" ")[1], "");
        }
    }

    man() {
        return `
    NAME
       touch - change file timestamps

SYNOPSIS
       touch [OPTION]... FILE...

DESCRIPTION
       Update the access and modification times of each FILE to the current time.

       A FILE argument that does not exist is created empty, unless -c or -h is supplied.

       A FILE argument string of - is handled specially and causes touch to change the times of the file associated with standard output.

       Mandatory arguments to long options are mandatory for short options too.
    `;
    }
}

export { Touch };
