import { dataStrc } from '../controllers/data';

function autoComplete() {
  let input = document.querySelector('.actual .writed__input').value;
  let autoComplete;
  // check if is a path
  if (input.includes('/')) {
    // get the command and the folder
    let currentInput = input.split('/')[0];
    // get the folder to search in
    let folder = currentInput.split(' ')[1];
    // get the filter value
    let filter = input.split('/')[1];
    // get file in folder
    let searchInFolder = dataStrc.openFolderInPath(folder);

    if (!searchInFolder) {
      let fileInFolder = dataStrc.getDataFromThisPath();
      let arrayFromFile = Object.keys(fileInFolder.content);
      let filteredArray = arrayFromFile.filter(el => el.startsWith(filter));

      if (filteredArray.length > 1) {
        let getFirstMatch = filteredArray[0];
        autoComplete = filter = getFirstMatch;
        document.querySelector("input.writed__input").value = `${currentInput}/${autoComplete}`;
      } else if (filteredArray.length === 1) {
        let arrayToString = filteredArray.join();
        autoComplete = filter = arrayToString;
        document.querySelector("input.writed__input").value = `${currentInput}/${autoComplete}`;
      } else {
        return input;
      }
    }

  } else {
    let fileInCurrentPath = dataStrc.getDataFromThisPath();
    let arrayFromFiles = Object.keys(fileInCurrentPath.content);
    let currentInput = input.split(' ')[0];
    let filter = input.split(' ')[1];
    let foundedFiles = arrayFromFiles.filter(el => el.startsWith(filter));

    if (foundedFiles.length > 1) {
      let getFirstMatch = foundedFiles[0];
      autoComplete = filter = getFirstMatch;
      document.querySelector("input.writed__input").value = `${currentInput} ${autoComplete}`;
    } else if (foundedFiles.length === 1) {
      let arrayToString = foundedFiles.join();
      autoComplete = filter = arrayToString;
      document.querySelector("input.writed__input").value = `${currentInput} ${autoComplete}`;
    } else {
      return input;
    }
  }
}


export { autoComplete };