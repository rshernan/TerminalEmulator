export { dataStrc };

class dataStructure {
  constructor() {
    this.path = [];
    let date = new Date();
    this.data = {
      content: {},
      date: date.toString(),
      length: 0,
      type: "dir",
    };
    if (localStorage.getItem("data")) {
      //this.getDataFromLocalStorage();
    } else {
      //this.saveDataToLocalStorage();
    }
  }

  getDataFromLocalStorage() {
    let dataJson = localStorage.getItem("data");
    this.data = JSON.parse(dataJson);
  }

  saveDataToLocalStorage() {
    let dataJson = JSON.stringify(this.data);
    localStorage.setItem("data", dataJson);
  }

  createFolder(name) {
    //returns a string describing the error
    // if it has been succesful retrns false
    let folder = this.goToPathDirection(this.path);
    let error = false;
    if (folder) {
      if (!folder.content[name]) {
        let date = new Date();
        folder.content[name] = {
          length: 0,
          date: date.toString(),
          content: {},
          type: "dir",
        };
        this.updateDateAndLengthOfPath(0);
        this.saveDataToLocalStorage();
      } else {
        error = name + " already exist in " + this.pathToString(this.path);
      }
    } else {
      error = this.pathToString(this.path) + " path not found";
    }
    return error;
  }

  createDocument(name, content) {
    //returns a string describing the error
    // if it has been succesful retrns false
    let folder = this.goToPathDirection(this.path);
    let error = false;
    if (folder) {
      if (!folder.content[name]) {
        let date = new Date();
        folder.content[name] = {
          length: content.length,
          date: date.toString(),
          content: content,
          type: "doc",
        };
        this.updateDateAndLengthOfPath(content.length);
        this.saveDataToLocalStorage();
      } else {
        error = name + " already exist in " + this.pathToString(this.path);
      }
    } else {
      error = this.pathToString(this.path) + " path not found";
    }
    return error;
  }

  deleteFolderOrDocument(name) {
    //returns a string describing the error
    // if it has been succesful retrns false
    let folder = this.goToPathDirection(this.path);
    let error = false;
    if (folder) {
      if (folder.content[name]) {
        let length = folder.content[name].length;
        delete folder.content[name];
        this.updateDateAndLengthOfPath(length * -1);
        this.saveDataToLocalStorage();
      } else {
        error = name + " do not exist in " + this.pathToString(this.path);
      }
    } else {
      error = this.pathToString(this.path) + " path not found";
    }
    return error;
  }

  goToPathDirection(path) {
    let folder = this.data;

    for (let i = 0; i < path.length; i++) {
      let pathItem = path[i];
      if (folder.content[pathItem]) {
        folder = folder.content[pathItem];
      } else {
        folder = false;
        i = path.length;
      }
    }

    return folder;
  }

  getDataFromThisPath() {
    let folder = this.goToPathDirection(this.path);
    return folder;
  }

  moveDocumentOrFolder(actualPath, futurePath, itemName) {
    //returns a string describing the error
    // if it has been succesful retrns false
    let actualFolder = this.goToPathDirection(actualPath);
    let futureFolder = this.goToPathDirection(futurePath);
    let error = false;

    if (actualFolder && futureFolder) {
      let item = actualFolder[itemName];
      delete actualFolder[itemName];
      futureFolder[itemName] = item;
      this.saveDataToLocalStorage();
    } else if (actualFolder) {
      error = this.pathToString(futurePath) + " path not found";
    } else {
      error = this.pathToString(actualPath) + " path not found";
    }
    return error;
  }

  pathToString(path) {
    //returns the string with the path
    let string = "";

    path.forEach((folder) => {
      string += "/" + folder;
    });
    return string;
  }

  openFolderInPath(folderName) {
    //cd
    // if foldername exist return false if not return the error
    let actualFolder = this.getDataFromThisPath();
    let error = false;
    if (actualFolder.content[folderName]) {
      this.path.push(folderName);
    } else {
      error = folderName + " do not exist in " + this.pathToString(this.path);
    }
    return error;
  }

  closeFolderInPath() {
    // cd ..
    if (this.path.length > 0) {
      this.path.pop();
    }
  }

  updateDateAndLengthOfPath(len) {
    let length = this.path.length;
    console.log('hola?');
    let date = new Date();
    for (let i = 0; i <= length; i++) {
    console.log(this.path[i]);
      var relativePath = this.path.slice(0, length-i);
      var folder = this.goToPathDirection(relativePath);

      
      folder.date = date.toString();
      folder.length += len;
    }
  }
}

var dataStrc = new dataStructure();
