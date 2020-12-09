//export {data, createDocument, createFolder, deleteFolderOrDocument, goToPathDirection, moveDocumentOrFolder};




class dataStructure{

    constructor(){
        this.path=[];
        this.data={}
        if (localStorage.getItem('data')){
            this.getDataFromLocalStorage();
        }else{
            this.saveDataToLocalStorage();
        }
    }

    
    
    getDataFromLocalStorage(){
        let dataJson=localStorage.getItem('data');
        this.data= JSON.parse(dataJson);
    }
    
    saveDataToLocalStorage(){
        let dataJson=JSON.stringify(this.data);
        localStorage.setItem('data', dataJson)
    }
    
    createFolder(name){
        //returns a string describing the error
        // if it has been succesful retrns false
        let folder=this.goToPathDirection(this.path);
        let error=false;
        if(folder){
            if(!folder[name]){
                folder[name]={
                    length: 0,
                    lastModification: new Data()
                };
                this.saveDataToLocalStorage();
            }else{
                error=name+' already exist in '+this.pathToString(this.path);
            }
        }else{
            error=this.pathToString(this.path)+' path not found';
        }
        return error;
    }
    
    createDocument(name, content){
        //returns a string describing the error
        // if it has been succesful retrns false
        let folder=this.goToPathDirection(this.path);
        let error=false;
        if(folder){
            if(!folder[name]){
                folder[name]=content;
                this.saveDataToLocalStorage(); 
            }else{
                error=name+' already exist in '+this.pathToString(this.path);
            }
        }else{
            error=this.pathToString(this.path)+' path not found';
        }
        return error;
    }
    
    deleteFolderOrDocument(name){
        //returns a string describing the error
        // if it has been succesful retrns false
        let folder=this.goToPathDirection(this.path);
        let error=false;
        if(folder){
            if(folder[name]){
                delete folder[name];
                this.saveDataToLocalStorage(); 
            }else{
                error=name+' do not exist in '+this.pathToString(this.path);
            }
        }else{
            error=this.pathToString(this.path)+' path not found';
        }
        return error;
    }
    
    goToPathDirection(path){
        let folder=this.data;
    
        for(let i=0; i<path.length; i++){
            let pathItem=path[i];
            if(folder[pathItem]){
                folder=folder[pathItem];
            }else{
                folder= false;
                i=path.length;
            }
        };
    
        return folder;
    }

    getDataFromThisPath(){
        let folder=this.goToPathDirection(this.path);
        return folder;
    }
    
    moveDocumentOrFolder(actualPath, futurePath, itemName){
        //returns a string describing the error
        // if it has been succesful retrns false
        let actualFolder=this.goToPathDirection(actualPath);
        let futureFolder=this.goToPathDirection(futurePath);
        let error=false;
    
        if(actualFolder&&futureFolder){
            let item= actualFolder[itemName];
            delete actualFolder[itemName];
            futureFolder[itemName]=item;
            this.saveDataToLocalStorage();
        }else if(actualFolder){
            error=this.pathToString(futurePath)+' path not found';
        }else{
            error=this.pathToString(actualPath)+' path not found';
        }
        return error;
    }
    
    
    pathToString(path){
        //returns the string with the path
        let string='';
    
        path.forEach(folder=>{
            string+='/'+folder;
        })
        return string;
    }

    openFolderInPath(folderName){
        let actualFolder=this.getDataFromThisPath();
        if(actualFolder[folderName]){
            
        }else{

        }
    }

}

var structre= new dataStructure();

