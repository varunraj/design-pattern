class Logger {

    constructor() {
        this.logs = [];
    }

    get count() {
        return this.logs.length;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`${timestamp} - ${message}`);
    }

}


class Singleton {

    

    constructor (){
        if(!Singleton.logger){
            Singleton.logger = new Logger()
        }
    }

    getInstance(){
        return Singleton.logger
    }



}

module.exports = Singleton;
