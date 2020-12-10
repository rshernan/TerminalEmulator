import { dataStrc } from '../controllers/data.js';

class Rm {
  executeComand(fileName) {
    dataStrc.deleteFolderOrDocument(fileName);
  }
}

export { Rm };