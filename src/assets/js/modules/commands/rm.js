import { dataStrc } from '../controllers/data.js';

class Rm {
  executeComand(fileName) {
    if (fileName.includes('rm')) {
      fileName.replace('rm', '');
    }
    dataStrc.deleteFolderOrDocument(fileName);
  }
}

export { Rm };