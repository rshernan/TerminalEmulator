import { dataStrc } from "../controllers/data.js";

class cat {
    //prints the content of a file

    constructor(){
        this.path = dataStrc.path;
    }

    showContent(str) {
        //Falta comprovar que el fichero exista dentro de la carpeta
        let error = false;
        if (str.includes("/")){
            let pathArray = str.split("/");
            let file_name = pathArray.pop();
            
            let folder = dataStrc.goToPathDirection(pathArray);
            let doc = folder.content[file_name];

            return doc.content;

        }else {
            let folder = dataStrc.getDataFromThisPath();
            let doc = folder.content[str];

            return doc.content;
        }
    }
}

export {cat};