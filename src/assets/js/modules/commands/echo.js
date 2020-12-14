import { dataStrc } from "../controllers/data.js";

class Echo {
    executeComand(comand) {
        if (comand.includes(">>") && !comand.startsWith(">>")) {
            this.name = comand.split(">>")[1].trim();
            this.content = comand.split(">>")[0].replace("echo", "").trim();

            dataStrc.addContentToDocument(this.name, this.content);
        } else if (comand.includes(">") && !comand.startsWith(">")) {
            this.name = comand.split(">")[1].trim();
            this.content = comand.split(">")[0].replace("echo", "").trim();

            dataStrc.createDocument(this.name, this.content);
        } else {
            return comand;
        }
    }

    man() {
        return `
        NAME
            echo - display a line of text

        SYNOPSIS
            echo [SHORT-OPTION]... [STRING]...
            echo LONG-OPTION

        DESCRIPTION
            Echo the STRING(s) to standard output.
            NOTE: your shell may have its own version of echo, which usually supersedes the version described here.  Please refer to your shell's documentation for details about the options it supports.
    `;
    }
}

export { Echo };
