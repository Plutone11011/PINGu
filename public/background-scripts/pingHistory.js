let instance = null ;

var ping_history = class {

    //singleton history
    //the object could be called from different parts
    //always need to have only a single instance
    constructor(){
        if (!instance){
            instance = this ;
        }

        this.history = [] ;
        return instance ;
    }

    addPing(ping){
        this.history.push(ping);
    }

    removePing(ping){

        if (this.history.includes(ping)){
            this.history.splice(this.history.indexOf(ping),1);
        }
        
    }

    getHistory(){
        return this.history;
    }
}

