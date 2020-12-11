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
      this.getDataFromLocalStorage();
    } else {
      this.saveDataToLocalStorage();
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
    // if it has been succesful retrns fals

    let folder = this.goToPathDirection(this.path);
    let error = false;
    if (folder) {
      console.log(folder);
      if (!folder.content[name]) {
        console.log(name);
        let date = new Date();
        folder.content[name] = {
          length: 0,
          date: date.toString(),
          content: {},
          type: "dir",
        };

        this.updateDateAndLengthOfPath(0, date.toString(), this.path);
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
    // if it has been succesful returns false
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
        this.updateDateAndLengthOfPath(content.length, date.toString(), this.path);
        this.saveDataToLocalStorage();
      } else {
        let date = new Date();
        let lengthBefore = folder.content[name].length;
        folder.content[name] = {
          length: content.length,
          date: date.toString(),
          content: content,
          type: "doc",
        };
        this.updateDateAndLengthOfPath(
          content.length - lengthBefore,
          date.toString(),
          this.path
        );
        this.saveDataToLocalStorage();
      }
    } else {
      error = this.pathToString(this.path) + " path not found";
    }
    return error;
  }

  addContentToDocument(name, content) {
    let folder = this.goToPathDirection(this.path);
    let error = false;
    if (folder) {
      let document = folder.content[name];
      if (document) {
        let date = new Date();
        document.content += " " + content;
        document.date = date.toString();
        document.length += content.length;
        this.updateDateAndLengthOfPath(content.length, date.toString(), this.path);
        this.saveDataToLocalStorage();
      } else {
        createDocument(name, content);
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
        let date = new Date();
        let length = folder.content[name].length;
        delete folder.content[name];
        this.updateDateAndLengthOfPath(length * -1, date.toString(), this.path);
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

  goToPathDirectionFromActualPath(relativePath) {
    let absolutePath = [];
    if (relativePath.length > 0 && relativePath[0] === "..") {
      absolutePath = [...this.path];
      while (relativePath.length > 0 && relativePath[0] === "..") {
        console.log(relativePath);
        relativePath = relativePath.slice(1, relativePath.length);
        absolutePath.pop();
      }
      absolutePath = absolutePath.concat(relativePath);
      console.log(absolutePath);
    } else {
      if (relativePath[0] === ".") {
        relativePath = relativePath.slice(1, relativePath.length);
      }
      absolutePath = this.path.concat(relativePath);
    }
    return this.goToPathDirection(absolutePath);
  }

  moveDocumentOrFolder(actual, future) {
    let actualPath = actual.split("/");
    let actualItemName = actualPath.pop();

    let futurePath = future.split("/");
    let futureItemName = futurePath.pop();

    let actualFolder = this.goToPathDirectionFromActualPath(actualPath);
    let futureFolder = this.goToPathDirectionFromActualPath(futurePath);

    let error = false;

    if (actualFolder && futureFolder) {
      if (actualFolder.content[actualItemName]) {
        let content = actualFolder.content[actualItemName].content;
        let type = actualFolder.content[actualItemName].type;
        let date = new Date();
        delete actualFolder.content[actualItemName];
        if (futureFolder.content[futureItemName]) {
          if (futureFolder.content[futureItemName].type == "dir") {
            futureFolder.content[futureItemName].content[actualItemName] = {
              length: content.length,
              date: date.toString(),
              content: content,
              type: type,
            };
            futurePath.push(futureItemName);
          } else {
            futureFolder.content[futureItemName] = {
              length: content.length,
              date: date.toString(),
              content: content,
              type: type,
            };
          }
        } else {
          futureFolder.content[futureItemName] = {
            length: content.length,
            date: date.toString(),
            content: content,
            type: type,
          };
        }
        this.updateDateAndLengthOfPath(-1*content.length, date.toString(), actualPath);
        this.updateDateAndLengthOfPath(content.length, date.toString(), futurePath);
        this.saveDataToLocalStorage();
      } else {
        error = actualItemName + " file not found";
      }
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
    if (string == "") string = "/";
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
            return false;
        } else {
            return "You are on the main folder.";
        }
    }
  }

  updateDateAndLengthOfPath(len, date, path) {
    let length = path.length;

    for (let i = 0; i <= length; i++) {
      var relativePath = path.slice(0, length - i);
      var folder = this.goToPathDirection(relativePath);

      folder.date = date;
      folder.length += len;
    }
  }

  renameDocumentOrFolder(nameBefore, newName) {
    let actualFolder = this.getDataFromThisPath();
    let error = false;
    if (actualFolder.content[newName]) {
      actualFolder.content[newName] = actualFolder.content[nameBefore];
      delete actualFolder.content[nameBefore];
      let date = new Date();
      this.updateDateAndLengthOfPath(0, date.toString(), this.path);
    } else {
      error = name + " already exist in " + this.pathToString(this.path);
    }
    return error;
  }
}

var dataStrc = new dataStructure();
