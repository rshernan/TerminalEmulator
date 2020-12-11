import { dataStrc } from '../controllers/data';


function autoComplete() {
  let fileFromCurrentPath = dataStrc.getDataFromThisPath();
  let arrayFromFiles = Object.keys(fileFromCurrentPath.content);
  let input = document.querySelector(".actual .writed__input").value;
  let filterFor = input.split(" ")[1];
  let foundedFile = arrayFromFiles.filter( el => el.startsWith(filterFor));
  console.log(foundedFile);
}


export { autoComplete };