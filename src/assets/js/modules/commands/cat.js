import { dataStrc } from "../controllers/data.js";

class cat {
    //prints the content of a file

    constructor() {
        this.path = dataStrc.path;
    }

    showOnConsole(param) {
        document
            .querySelector(".actual")
            .getElementsByClassName("console__output")[0].innerHTML = param;
        return param;
    }
    showContent(str) {
        let error = false;
        let short_str = str.slice(4, str.length);

        if (short_str.includes("/")) {
            let pathArray = short_str.split("/");
            let file_name = pathArray.pop();
            let folder = dataStrc.goToPathDirection(pathArray);

            let doc = folder.content[file_name];

            if (doc && doc.type === "doc") {
                this.showOnConsole(doc_content);
            } else if (doc) {
                error = "This is not a file";
                return error;
            } else {
                error = "There is no file with the name " + file_name;
                return error;
            }
        } else {
            let folder = dataStrc.getDataFromThisPath();
            let doc = folder.content[short_str];
            if (doc && doc.type === "doc") {
                this.showOnConsole(doc.content);
            } else if (doc) {
                error = "This is not a file";
                return error;
            } else {
                error = "There is no file with the name " + short_str;
                return error;
            }
        }
    }

    man() {
        return `
NAME
       cat - concatenate files and print on the standard output

SYNOPSIS
       cat [FILE]...

DESCRIPTION
       Concatenate FILE(s) to standard output.

       With no FILE, or when FILE is -, read standard input.
        `;
    }
}

export { cat };
