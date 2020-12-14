import { dataStrc } from "../controllers/data.js";

class JS{
    executeCommand(str) {
        let error = false;
        let short_str = str.slice(3, str.length)
        
        if (short_str.includes("/")){
            let pathArray = short_str.split("/");
            pathArray=dataStrc.getGlobalPathFromActualPath(pathArray);
            let file_name = pathArray.pop();
            let folder = dataStrc.goToPathDirection(pathArray);

            let doc = folder.content[file_name];

            if(doc && doc.type === "doc") {
                return this.executeCode(doc.content);
            }
            else if (doc){
                error = "This is not a file";
                return error;
            }
            else {
                error = "There is no file with the name " +  file_name;
                return error;
            }
            

        }else {
            let folder = dataStrc.getDataFromThisPath();
            let doc = folder.content[short_str];
            
            if(doc && doc.type === "doc"){
                return this.executeCode(doc.content);

            } else if (doc){
                error = "This is not a file";
                return error;
            }

            else {
                error = "There is no file with the name " +  short_str;
                return error;
            }
            
        }
    }

    executeCode(code){
        try {
            return eval(code); 
        } catch (e) {
            return e.message;
        }
    }
}

export {JS};






