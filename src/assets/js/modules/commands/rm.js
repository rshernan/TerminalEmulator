import { dataStrc } from '../controllers/data.js';

class Rm {
  executeComand(fileName) {
    let error=false;
    if (fileName.split(' ')[1]) {
      error=dataStrc.deleteFolderOrDocument(fileName.split(' ')[1]);
    }else{
      error='File name is required.'
    }
    return error;
  }
}
export { Rm };
