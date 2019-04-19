export default class ValidationUtils {
    /**
     * return true when it is a valid email otherwise false
     * @param {*} email 
     */
    static isValidEmail(email) {
        return ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)));
    }
}