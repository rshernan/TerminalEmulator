import { dataStrc } from "./modules/controllers/data.js";

class cat {
    //prints the content of a file

    constructor(){
        this.path = dataStrc.path;
    }

    showContent(str) {
        if (str.includes("/")){
            let pathArray = str.split("/");

            return dataStrc.getDataFromThisPath(pathArray[pathArray.length - 1]);
        }else {
            return(str.content);
        }
    }
}