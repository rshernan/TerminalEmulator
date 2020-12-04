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

function deleteFolder(path, name){
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