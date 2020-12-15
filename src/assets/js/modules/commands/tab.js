import { dataStrc } from '../controllers/data';

function autoComplete() {
  let input = document.querySelector('.actual .writed__input').value;
  let autoComplete;
  // check if is a path
  if (input.includes('/')) {
    // get an array of path
    let splittedInput = input.split('/');
    // get the length
    let inputLength = splittedInput.length -1;
    let path = input.split(' ')[1];
    // get the current folder
    let currentPath = path.split('/');
    currentPath.pop();
    // get the filter value
    let filter = input.split('/')[inputLength];
    // get the command
    let command = input.split('/')[0].split(' ')[0];

    if (currentPath) {
      let globalPath = dataStrc.getGlobalPathFromActualPath(currentPath)
      let fileInFolder = dataStrc.goToPathDirection(globalPath);

      if (fileInFolder && typeof fileInFolder.content=='object') {
        let arrayFromFile = Object.keys(fileInFolder.content);
        let filteredArray = arrayFromFile.filter(el => el.startsWith(filter));
        

        if (filteredArray.length > 1) {
          let filteredResult = filteredArray.join(' ');
          document.querySelector(".actual>.console__output").innerText = filteredResult;
        } else if (filteredArray.length === 1) {
          let arrayToString = filteredArray.join();
          autoComplete = filter = arrayToString;
          let str=command+' ';
          currentPath.forEach(file=>{
            str+=file+'/';
          })
          document.querySelector("input.writed__input").value = `${str}${autoComplete}/`;
          document.querySelector(".actual>.console__output").innerText = '';
        } else {
          return input;
        }
      }
    }

  } else {
    let fileInCurrentPath = dataStrc.getDataFromThisPath();
    let arrayFromFiles = Object.keys(fileInCurrentPath.content);
    let currentInput = input.split(' ')[0];
    let filter = input.split(' ')[1];
    let foundedFiles = arrayFromFiles.filter(el => el.startsWith(filter));

    if (foundedFiles.length > 1) {
      let filteredResult = foundedFiles.join(' ');
      document.querySelector(".actual>.console__output").innerText = filteredResult;
    } else if (foundedFiles.length === 1) {
      let arrayToString = foundedFiles.join();
      autoComplete = filter = arrayToString;
      document.querySelector("input.writed__input").value = `${currentInput} ${autoComplete}/`;
      document.querySelector(".actual>.console__output").innerText = '';
    } else {
      return input;
    }
  }
}


export { autoComplete };