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
    let folder=goToPathDirection(path);
    if(folder){
        folder[name]={};
        saveDataToLocalStorage();
    }else{
        alert('Path not found');
    }
}
function createDocument(path, name, content){
    let folder=goToPathDirection(path);
    if(folder){
        folder[name]=content;
        saveDataToLocalStorage();
    }else{
        alert('Path not found');
    }
}

function deleteFolderOrDocument(path, name){
    let folder=goToPathDirection(path);

    if(folder){
        delete folder[name]
        saveDataToLocalStorage();
    }else{
        alert('Path not found');
    }
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
    let actualFolder=goToPathDirection(actualPath);
    let futureFolder=goToPathDirection(futurePath);
    if(actualFolder&&futureFolder){
        let item= actualFolder[itemName];
        delete actualFolder[itemName];
        futureFolder[itemName]=item;
    }else{
        alert('Path not found');
    }
}