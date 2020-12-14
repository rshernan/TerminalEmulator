import { dataStrc } from "../controllers/data.js";

class ls {
    executeCommand(writedLine) {
        let output = "";
        let splitedCommand = writedLine.split(" ");
        let folderData = [];
        if (splitedCommand.length == 1) {
            folderData = this.getDataAsArray();
            output = this.createOutput(folderData);
        } else if (splitedCommand.length == 2) {
            let parameter = splitedCommand[1];
            folderData = this.getDataAsArray();
            let error = false;
            switch (parameter) {
                case "-t":
                    folderData.sort((a, b) => {
                        let dateA = new Date(a[1].date);
                        let dateB = new Date(b[1].date);
                        return dateB - dateA;
                    });
                    break;
                case "-S":
                    folderData.sort((a, b) => {
                        return b[1]["length"] - a[1]["length"];
                    });
                    break;
                case "-R":
                    output = this.showParentsAndChilds(dataStrc.path);
                    break;
                default:
                    error = splitedCommand[1];
            }
            console.log(output);
            if (error === false && output == "") {
                output = this.createOutput(folderData);
            } else if (output == "") {
                output = error + " is not a parameter.";
            }
        } else {
            output = "Too many parameters.";
        }
        return output;
    }

    createOutput(list) {
        let output = "";
        if (list.length > 0) {
            output =
                "<table><tr><th>Type</th><th>LastWriteTime</th><th>Length</th><th>Name</th></tr>";

            list.forEach((element) => {
                let date = new Date(element[1].date);
                let newDateFormat =
                    date.getDate() +
                    "/" +
                    date.getMonth() +
                    "/" +
                    date.getFullYear() +
                    " ";
                if (date.getHours() < 10) newDateFormat += "0";
                newDateFormat += +date.getHours() + ":";
                if (date.getMinutes() < 10) newDateFormat += "0";
                newDateFormat += +date.getMinutes();

                output +=
                    "<tr><td>" +
                    element[1].type +
                    "</td><td>" +
                    newDateFormat +
                    "</td><td>" +
                    element[1].length +
                    "</td><td>" +
                    element[0] +
                    "</td></tr>";
            });
            output += "</table>";
        } else {
            output += "Empty directory";
        }
        return output;
    }

    getDataAsArray() {
        let folderData = dataStrc.getDataFromThisPath();
        let folderDataArray = [];
        folderDataArray.push(...Object.entries(folderData.content));
        return folderDataArray;
    }

    showParentsAndChilds(path) {
        let output = "";
        let folderData = dataStrc.goToPathDirection(path);
        let folderDataArray = [];
        folderDataArray.push(...Object.entries(folderData.content));

        output += "<p>" + dataStrc.pathToString(path) + "</p>";
        output += this.createOutput(folderDataArray);

        folderDataArray.forEach((element) => {
            if (element[1].type === "dir") {
                let newPath = [...path];
                newPath.push(element[0]);
                output += this.showParentsAndChilds(newPath);
            }
        });
        return output;
    }

    man() {
        return `
        NAME
            ls - list directory contents

        SYNOPSIS
            ls [OPTION]... [FILE]...

        DESCRIPTION
            List information about the FILEs (the current directory by default).  Sort entries alphabetically if none of -cftuvSUX nor --sort is specified.

            Mandatory arguments to long options are mandatory for short options too.

            -R, --recursive
                    list subdirectories recursively

            -S     sort by file size, largest first

            -t     sort by modification time, newest first

            Using color to distinguish file types is disabled both by default and with --color=never.  With --color=auto, ls emits color codes only when standard output is connected to a terminal.  The LS_COLORS environment variable can
            change the settings.  Use the dircolors command to set it.

        Exit status:
            0      if OK,

            1      if minor problems (e.g., cannot access subdirectory),

            2      if serious trouble (e.g., cannot access command-line argument).
        `;
    }
}

export { ls };
