import { dataStrc } from '../controllers/data';


function autoComplete() {
  // get the file from the actual location
  let fileFromCurrentPath = dataStrc.getDataFromThisPath();
  // trasform the object in array
  let arrayFromFiles = Object.keys(fileFromCurrentPath.content);
  // get the input to search with
  let input = document.querySelector(".actual .writed__input").value;
  // check if is a path
  if (input.includes('/')) {
    let currentPath = input.split('/')[0];
    let searchIn = currentPath.split(" ")[1];
    console.log(searchIn);
  }
  let filterFor = input.split(" ")[1];
  // filter the arrau
  let foundedFile = arrayFromFiles.filter( el => el.startsWith(filterFor));
  // check the length
  if (foundedFile.length > 1) {
    // get the first result
    let getFirstMatch = foundedFile[0];
    // autocomplete
    let completedName = input.replace(filterFor, getFirstMatch);
    document.querySelector("input.writed__input").value = completedName;
  } else {
    // convert array to string
    let stringFromFiles = foundedFile.join();
    // autocomplete
    let completedNames = input.replace(filterFor, stringFromFiles);
    // render
    document.querySelector("input.writed__input").value = completedNames;
  }

}


export { autoComplete };