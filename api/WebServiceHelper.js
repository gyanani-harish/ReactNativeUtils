import ApiClient from './ApiClient';
import * as AsyncStorageKeys from '../utils/AsyncStorageKeys'
import Utils from '../utils/Utils'
import Log from '../utils/Log'
import {
    AsyncStorage,
} from 'react-native';

/**
 * Middle class between api call and ui
 */
export default class WebServiceHelper {

    /**
     * 
     * @param {*} context 
     * @param {*} username 
     * @param {*} password 
     * @param {*} deviceId 
     * @param {*} callbackSuccess 
     * @param {*} callbackFailure 
     */
    static callLoginApi(context, username, password, deviceId, callbackSuccess, callbackFailure) {
        var paramsMap = {};
        paramsMap['UserId'] = username;
        paramsMap['Password'] = password;
        paramsMap['DeviceId'] = deviceId;

        const endpoint = 'ValidateUser';
        ApiClient.callApiPost(endpoint, paramsMap, null, callbackSuccess, callbackFailure, context);
    }
    
    /**
     * 
     * @param {*} context 
     * @param {*} token 
     * @param {*} userId 
     * @param {*} callbackSuccess 
     * @param {*} callbackFailure 
     */
    static getUserMenuList(context, token, userId, callbackSuccess, callbackFailure) {
        var keysArr = [AsyncStorageKeys.CLIENT_MODEL];
        
        AsyncStorage.multiGet(keysArr, (err, stores) => {

            var paramsMap = {};
            paramsMap['UserId'] = userId;
            paramsMap['DeviceId'] = Utils.getDeviceID();
            paramsMap['Token'] = token;
            const endpoint = 'GetUserMenuAccess';
            ApiClient.callApiPost(endpoint, paramsMap, null, callbackSuccess, callbackFailure, context);
    

        });
          }
    /**
     * 
     * @param {*} callbackSuccess 
     * @param {*} callbackFailure 
     */
    static getDashboardFilterList(context, showProgress, callbackSuccess, callbackFailure) {
        var headerParamsMap = {};
        var keysArr = [AsyncStorageKeys.LOGGED_IN_USER_MODEL, AsyncStorageKeys.CLIENT_MODEL];
        AsyncStorage.multiGet(keysArr, (err, stores) => {
            var loginUserModel = JSON.parse(stores[0][1]/*LoginUserModel*/)
            var selectedClientModel = JSON.parse(stores[1][1]/*ClientModel*/)
            headerParamsMap['UserId'] = loginUserModel.UserId;
            headerParamsMap['DeviceId'] = Utils.getDeviceID();
            headerParamsMap['Token'] = loginUserModel.Token;
            const reqObj = new DashboardFilterListReqBean
            reqObj['FMUserId'] = loginUserModel.NPFUserId;
            reqObj['Clientid'] = selectedClientModel.ClientId;
            reqObj['ClientCode'] = selectedClientModel.ClientCode;
            const endpoint = 'GetDashboardFilterList';
            ApiClient.callApiPost(endpoint, headerParamsMap, JSON.stringify(reqObj), callbackSuccess, callbackFailure, context, showProgress);
        });
    }
    
    


    static updatePaypalBillingInfoApi(context, reqObj, callbackSuccess, callbackFailure){

        var headerParamsMap = {};
        const endpoint = 'UpdatePaypalBillingInfo';
        var keysArr = [AsyncStorageKeys.LOGGED_IN_USER_MODEL, AsyncStorageKeys.CLIENT_MODEL];
        AsyncStorage.multiGet(keysArr, (err, stores) => {
            var loginUserModel = JSON.parse(stores[0][1]/*LoginUserModel*/)

            headerParamsMap['UserId'] = loginUserModel.UserId;
            headerParamsMap['DeviceId'] = Utils.getDeviceID();
            headerParamsMap['Token'] = loginUserModel.Token;

            var selectedClientModel = JSON.parse(stores[1][1]/*ClientModel*/)
            reqObj.Clientid = selectedClientModel.ClientId;
            reqObj.ClientCode = selectedClientModel.ClientCode;
            reqObj.FMUserId = loginUserModel.NPFUserId;
            ApiClient.callApiPost(endpoint, headerParamsMap, JSON.stringify(reqObj), callbackSuccess, callbackFailure, context);

        });



    }


}
