import { dataStrc } from '../controllers/data';

class Touch {
  executeComand(filename) {
    if (filename.split(' ')[1]) {
      dataStrc.createDocument(filename.split(' ')[1], "");
    }
  }
}

export { Touch };