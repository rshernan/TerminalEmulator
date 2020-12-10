import { dataStrc } from "../controllers/data.js";

class cd {

    constructor(){
        this.path = dataStrc.path;
    }
    
    openFolder(str) {
        let folderArr = str.split("/");
        let error = false;

        for (let i=0; i<folderArr.length && error === false; i++){
            error = dataStrc.openFolderInPath(folderArr[i]);   
        }
    }

    closeFolder() {
        return dataStrc.closeFolderInPath(this.path);
    }

    chooseCDAction(str) {
        if (str.includes("..")){
            this.closeFolder();
        }else {
            this.openFolder(str);
        }
    }
}

export {cd};