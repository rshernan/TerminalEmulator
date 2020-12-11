import { dataStrc } from '../controllers/data';


function autoComplete() {
  // get the file from the actual location
  let fileFromCurrentPath = dataStrc.getDataFromThisPath();
  // trasform the object in array
  let arrayFromFiles = Object.keys(fileFromCurrentPath.content);
  // get the input to search with
  let input = document.querySelector(".actual .writed__input").value;
  let filterFor = input.split(" ")[1];
  // filter the arrau
  let foundedFile = arrayFromFiles.filter( el => el.startsWith(filterFor));
  // convert array to string
  let stringFromFile = foundedFile.join();
  // autocomplete
  let completedName = input.replace(filterFor, stringFromFile);
  // render
  document.querySelector("input.writed__input").value = completedName;
}


export { autoComplete };