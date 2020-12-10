import { dataStrc } from "../controllers/data.js";

class ls{
    executeCommand(writedLine) {
        let splitedCommand=writedLine.split(" ");
        let folderData=[];
        if (splitedCommand.length==1) {
            folderData=dataStrc.getDataFromThisPath();
            return this.createOutput(folderData.content)
        }
        else if(splitedCommand.length==2){
            parameter=splitedCommand[1];
            switch(parameter){
                case '-R':
                    folderData=dataStrc.getDataFromThisPath();
                    
            }

        }else{

        }
    }

    createOutput(list){
        let output='<table><tr><th>Type</th><th>LastWriteTime</th><th>Length</th><th>Name</th></tr>';

        for(const element in list) {
            let date=new Date(list[element].date);
            let newDateFormat=date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()+' ';
            if(date.getHours()<10) newDateFormat+='0';
            newDateFormat+=+date.getHours()+':';
            if(date.getMinutes()<10) newDateFormat+='0';
            newDateFormat+=+date.getMinutes();

            output+='<tr><td>'+list[element].type+'</td><td>'+newDateFormat+'</td><td>'+list[element].length+'</td><td>'+element+'</td></tr>'
        };
        output+='</table>'
        return output;
    }
}

export {ls};