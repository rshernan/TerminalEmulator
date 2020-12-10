import { dataStrc } from '../controllers/data.js';

class Rm {
  executeComand(fileName) {
    if (fileName.split(' ')[1]) {
      dataStrc.deleteFolderOrDocument(fileName.split(' ')[1]);
    }
  }
}

export { Rm };
