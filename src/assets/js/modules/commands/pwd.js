import { dataStrc } from '../controllers/data.js';

class Pwd {
  showCurrentPath() {
    this.path = dataStrc.path;
    return dataStrc.pathToString(this.path);
  }
}

export { Pwd };