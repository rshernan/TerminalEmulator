import { dataStrc } from "../controllers/data.js";

class ls{
    executeCommand(writedLine) {
        let output="";
        let splitedCommand=writedLine.split(" ");
        let folderData=[];
        if (splitedCommand.length==1) {
            folderData=this.getDataAsArray();
            output= this.createOutput(folderData);
        }
        else if(splitedCommand.length==2){
            let parameter=splitedCommand[1];
            folderData=this.getDataAsArray();
            let error=false;
            switch(parameter){
                case '-t':
                    folderData.sort((a,b)=>{
                        let dateA=new Date(a[1].date);
                        let dateB=new Date(b[1].date);
                        return dateB-dateA;
                    });
                    break;
                case '-S':
                    folderData.sort((a,b)=>{
                        return b[1]['length']-a[1]['length'];
                    });
                    break;
                case '-R':
                    output=this.showParentsAndChilds(dataStrc.path)
                    break;
                default:
                    error='<br>'+splitedCommand[1];

            }
            console.log(output);
            if(error===false && output==""){
                output= this.createOutput(folderData);
            }else if (output==""){
                output= error +' is not a parameter.';
            }
            
            
        }else{
            output= 'Too many parameters.';
        }
        return output;
    }

    createOutput(list){
        let output='';
        if(list.length>0){
            output='<table><tr><th>Type</th><th>LastWriteTime</th><th>Length</th><th>Name</th></tr>';

        list.forEach(element => {
            
            let date=new Date(element[1].date);
            let newDateFormat=date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()+' ';
            if(date.getHours()<10) newDateFormat+='0';
            newDateFormat+=+date.getHours()+':';
            if(date.getMinutes()<10) newDateFormat+='0';
            newDateFormat+=+date.getMinutes();

            output+='<tr><td>'+element[1].type+'</td><td>'+newDateFormat+'</td><td>'+element[1].length+'</td><td>'+element[0]+'</td></tr>'
        });
        output+='</table>'
        }else{
            output+='Empty directory';
        }
        return output;
    }

    getDataAsArray(){
        let folderData=dataStrc.getDataFromThisPath();
        let folderDataArray=[];
        folderDataArray.push(...Object.entries(folderData.content));
        return folderDataArray;
    }

    showParentsAndChilds(path){
        
        let output='';
        let folderData=dataStrc.goToPathDirection(path);
        let folderDataArray=[];
        folderDataArray.push(...Object.entries(folderData.content));

        output+='<p>'+dataStrc.pathToString(path)+'</p>';
        output+=this.createOutput(folderDataArray);

        folderDataArray.forEach(element=>{
            if(element[1].type==='dir'){
                let newPath=[...path];
                newPath.push(element[0]);
                output+=this.showParentsAndChilds(newPath);
            }
            
        });
        return output;
    }
}

export {ls};