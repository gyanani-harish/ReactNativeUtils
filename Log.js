import React, {Component} from 'react';

const isShowLog = true;
class Log extends Component {

    constructor() {
        super();
        this.showLog = this
            .showLog
            .bind(this);
    }
    static showLogOld(msg,msg2){
        if (isShowLog == true) {
            console.log(msg);
            console.log("Message2",msg2);
        }
    }
    static showLogSingle(msg) {
        if (isShowLog == true) {
            console.log(msg);
        }
    }
    static showLog(msg, msg2) {
        if (isShowLog == true) {
            console.log(msg,msg2);
        }
    }
    static errorLog(msg) {
        if (isShowLog == true) {
            console.log(msg);
        }
    }
    showLog(msg, isPrint) {

        if (isPrint == true) {
            console.log(msg);
        }

    }

    render() { < View > </View>
    }

}
export default Log;