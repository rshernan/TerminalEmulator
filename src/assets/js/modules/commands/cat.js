import { dataStrc } from "./modules/controllers/data.js";

class cat {
    //prints the content of a file

    constructor(){
        this.path = dataStrc.path;
    }

    showContent(str) {
        if (str.includes("/")){
            let pathArray = str.split("/");

            actual_path = dataStrc.goToPathDirection(pathArray[pathArray.length - 1]);

            return actual_path;
        }else {
            act_path = dataStrc.goToPathDirection(str);
        }
    }
}

export {cat};