export default class AppUtils {

    static isOrderShipped(orderStatusId){
        return orderStatusId=='15' || orderStatusId=='16';
    }
}