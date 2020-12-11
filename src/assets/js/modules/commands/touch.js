import { dataStrc } from '../controllers/data';

class Touch {
  executeComand(filename) {
    let error=false;
    if (filename.split(' ')[1]) {
      error=dataStrc.createDocument(filename.split(' ')[1], "");
    }else{
      error='File name needed.'
    }
    return error;
  }
}

export { Touch };