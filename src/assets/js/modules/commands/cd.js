import { dataStrc } from "../controllers/data.js";

class cd {
    constructor() {
        this.path = dataStrc.path;
    }

    openFolder(str) {
        let relativePath = str.split(" ");
        let folderArr = relativePath[1].split("/");
        if(folderArr[folderArr.length-1]===''){
            folderArr.pop();
        }
        let error = false;

        //folderArr[0] = folderArr[0].slice(3, folderArr[0].length);

        for (let i = 0; i < folderArr.length && error === false; i++) {
            error = dataStrc.openFolderInPath(folderArr[i]);
        }
        return error;
    }

    closeFolder() {
        return dataStrc.closeFolderInPath(this.path);
    }

    chooseCDAction(str) {
        let error = false;
        if (str === "cd ..") {
            error = this.closeFolder();
        } else {
            error = this.openFolder(str);
        }

        if (error !== false) {
            return error;
        }

        return "";
    }

    man() {
        return `
        BUILTIN(1)                BSD General Commands Manual               BUILTIN(1)
 
NAME
     cd
 
SYNOPSIS
     cd [directory ...]
 
DESCRIPTION
     changes the directory to the route introduced
        `;
    }
}

export { cd };
