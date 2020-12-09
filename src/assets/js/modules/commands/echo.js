import { dataStrc } from '../controllers/data.js';

class Echo {
  checkComand(comand) {
    if (comand.includes('>>') && !comand.startsWith('>>')) {
      this.name = comand.split('>>')[1].trim();
      this.content = comand.split('>>')[0].trim();
    } else if (comand.includes('>') && !comand.startsWith('>')) {
      this.name = comand.split('>')[1].trim();
      this.content = comand.split('>')[0].trim();
      dataStrc.createDocument(this.name, this.content);
    } else {
      return comand;
    }
  }
}

export { Echo };