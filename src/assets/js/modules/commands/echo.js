import { dataStrc } from '../controllers/data.js';

class Echo {

  executeComand(comand) {
    let error=false;
    if (comand.includes('>>') && !comand.startsWith('>>') && !comand.startsWith(' >>')){

      this.name = comand.split('>>')[1].trim();
      this.content = comand.split('>>')[0].replace('echo', '').trim();

      if(this.name!=''){
        error = dataStrc.addContentToDocument(this.name, this.content);
      }else{
        error=`This format is not correct. The corect format is:
echo 'content' > filename or echo 'content' >> filename`
      }
    } else if (comand.includes('>') && !comand.startsWith('>')&& !comand.startsWith(' >')) {

      this.name = comand.split('>')[1].trim();
      this.content = comand.split('>')[0].replace('echo', '').trim();

      if(this.name!=''){
        error = dataStrc.createDocument(this.name, this.content);
      }else{
        error=`This format is not correct. The corect format is:
echo 'content' > filename or echo 'content' >> filename`
      }

    } else {
      this.content = comand.replace('echo', '').trim()
      return this.content;
    }
    return error;
  }
}

export { Echo };