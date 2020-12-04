var data={}

if (localStorage.getItem('data')){
    getDataFromLocalStorage();
}else{
    saveDataToLocalStorage();
}

function getDataFromLocalStorage(){
    let dataJson=localStorage.getItem('data');
    data= JSON.parse(dataJson);
}

function saveDataToLocalStorage(){
    let dataJson=JSON.stringify(data);
    localStorage.setItem('data', dataJson)
}

function createFolder(path, name){
    //returns a string describing the error
    // if it has been succesful retrns false
    let folder=goToPathDirection(path);
    let error=false;
    if(folder){
        if(!folder[name]){
            folder[name]={};
            saveDataToLocalStorage();
        }else{
            error=name+' already exist in '+pathToString(path);
        }
    }else{
        error=pathToString(path)+' path not found';
    }
    return error;
}

function createDocument(path, name, content){
    //returns a string describing the error
    // if it has been succesful retrns false
    let folder=goToPathDirection(path);
    let error=false;
    if(folder){
        if(!folder[name]){
            folder[name]=content;
            saveDataToLocalStorage(); 
        }else{
            error=name+' already exist in '+pathToString(path);
        }
    }else{
        error=pathToString(path)+' path not found';
    }
    return error;
}

function deleteFolderOrDocument(path, name){
    //returns a string describing the error
    // if it has been succesful retrns false
    let folder=goToPathDirection(path);
    let error=false;
    if(folder){
        if(folder[name]){
            delete folder[name];
            saveDataToLocalStorage(); 
        }else{
            error=name+' do not exist in '+pathToString(path);
        }
    }else{
        error=pathToString(path)+' path not found';
    }
    return error;
}

function goToPathDirection(path){
    let folder=data;

    for(let i=0; i<path.length; i++){
        pathItem=path[i];
        if(folder[pathItem]){
            folder=folder[pathItem];
        }else{
            folder= false;
            i=path.length;
        }
    };

    return folder;
}

function moveDocumentOrFolder(actualPath, futurePath, itemName){
    //returns a string describing the error
    // if it has been succesful retrns false
    let actualFolder=goToPathDirection(actualPath);
    let futureFolder=goToPathDirection(futurePath);
    let error=false;

    if(actualFolder&&futureFolder){
        let item= actualFolder[itemName];
        delete actualFolder[itemName];
        futureFolder[itemName]=item;
        saveDataToLocalStorage();
    }else if(actualFolder){
        error=pathToString(actualPath)+' path not found';
    }else{
        error=pathToString(futurePath)+' path not found';
    }
    return error;
}


function pathToString(path){
    //returns the string with the path
    let string='';

    path.forEach(folder=>{
        string+='/'+folder;
    })
    return string;
}