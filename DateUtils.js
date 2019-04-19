import Utils from "./Utils";

export default class DateUtils{
    /**
     * UserVisibleFormat - dd-MM-yyyy
     * @param {Date} date 
     */
    static convertToUserVisibleFormat(/*Date*/date){
        if(Utils.isNullOrUndefined(date)){
            return;
        }
        date = new Date(date)
        var day = date.getDate();
        if (parseInt(day) < 10) {
            day = '0' + day;
        }

        var month = date.getMonth() + 1;
        if (parseInt(month) < 10) {
            month = '0' + month;
        }

        var year = date.getFullYear();

        return day + '-' + month + '-' + year;
    }
    /**
     * Web Api request format - dd/MM/yyyy
     * @param {Date} date 
     */
    static convertToWebApiReqFormat(/*Date*/date){
        if(Utils.isNullOrUndefined(date)){
            return;
        }
        date = new Date(date)
        var day = date.getDate();
        if (parseInt(day) < 10) {
            day = '0' + day;
        }

        var month = date.getMonth() + 1;
        if (parseInt(month) < 10) {
            month = '0' + month;
        }

        var year = date.getFullYear();

        return day + '/' + month + '/' + year;
    }
}