class Historic {

    constructor() {
        this.historyArray = [];
        if (localStorage.getItem("history")) {
            this.getHistoryFromLocalStorage();
        } else {
            this.saveHistoryToLocalStorage();
        }

        this.n = 0;
        
    }
    


    getHistoryFromLocalStorage(){
        let historyJSON = localStorage.getItem("history");
        this.historyArray = JSON.parse(historyJSON);    
    };
    saveHistoryToLocalStorage(){
        let historyJSON = JSON.stringify(this.historyArray);
        localStorage.setItem("history", historyJSON);
    };

    getCommandsHistory(str){
        this.historyArray.push(str);
        this.saveHistoryToLocalStorage();
    }

    changeCommand(){

        this.getHistoryFromLocalStorage();
        var changedCommand = this.historyArray[this.historyArray.length - this.n];
        document.querySelector(".actual .writed__input").value = changedCommand;
    
    }
    getNextCommand(){
        if (this.n > 1){
            this.n --;
            this.changeCommand();
            console.log("next")
        }
        else if (this.n === 1){
            this.n--
            document.querySelector(".actual .writed__input").value = "";
        }
    }
    getPreviousCommand(){
        if (this.n < this.historyArray.length){
            this.n ++;
            this.changeCommand();
            console.log("previous")
        }
    }
}

var historic = new Historic;

export {historic}
