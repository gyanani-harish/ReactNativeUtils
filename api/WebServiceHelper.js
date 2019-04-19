import ApiClient from './ApiClient';
import * as AsyncStorageKeys from '../utils/AsyncStorageKeys'
import Utils from '../utils/Utils'
import Log from '../utils/Log'
import {
    AsyncStorage,
} from 'react-native';
import LoginUserModel from '../modules/Login/LoginUserModel'
import ClientModel from '../modules/Dashboard/ClientModel'
import InboundDetailsReqBean from '../modules/Inbound/InboundDetailsReqBean';
import DashboardFilterListReqBean from '../modules/Dashboard/DashboardFilterListReqBean'
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
     * @param {*} username 
     * @param {*} deviceId 
     * @param {*} callbackSuccess 
     * @param {*} callbackFailure 
     */
    static callForgotApi(context, username, deviceId, callbackSuccess, callbackFailure) {
        var paramsMap = {};
        paramsMap['UserId'] = username;
        paramsMap['DeviceId'] = deviceId;

        const endpoint = 'ForgotPassword';
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
    static callApiContactList(context, reqObj, callbackSuccess, callbackFailure){
        var headerParamsMap = {};
        var keysArr = [AsyncStorageKeys.LOGGED_IN_USER_MODEL, AsyncStorageKeys.CLIENT_MODEL];
        AsyncStorage.multiGet(keysArr, (err, stores) => {
            var loginUserModel = JSON.parse(stores[0][1]/*LoginUserModel*/)
            var selectedClientModel = JSON.parse(stores[1][1]/*ClientModel*/)

            headerParamsMap['UserId'] = loginUserModel.UserId;
            headerParamsMap['DeviceId'] = Utils.getDeviceID() /*"95f1e91504b59ae"*/;
            headerParamsMap['Token'] = loginUserModel.Token /*"5037524"*/;

            reqObj['FMUserId'] = loginUserModel.NPFUserId;
            reqObj['Clientid'] = selectedClientModel.ClientId;
            reqObj['ClientCode'] = selectedClientModel.ClientCode;
            const endpoint = 'Contactus';
            ApiClient.callApiPost(endpoint, headerParamsMap, JSON.stringify(reqObj), callbackSuccess, callbackFailure, context);


        });
    }
    static getPODRequest(context, reqObj, callbackSuccess, callbackFailure){
        var headerParamsMap = {};
        var keysArr = [AsyncStorageKeys.LOGGED_IN_USER_MODEL, AsyncStorageKeys.CLIENT_MODEL];
        AsyncStorage.multiGet(keysArr, (err, stores) => {
            var loginUserModel = JSON.parse(stores[0][1]/*LoginUserModel*/)
            var selectedClientModel = JSON.parse(stores[1][1]/*ClientModel*/)

            headerParamsMap['UserId'] = loginUserModel.UserId;
            headerParamsMap['DeviceId'] = Utils.getDeviceID() /*"95f1e91504b59ae"*/;
            headerParamsMap['Token'] = loginUserModel.Token /*"5037524"*/;

            reqObj['FMUserId'] = loginUserModel.NPFUserId;
            reqObj['Clientid'] = selectedClientModel.ClientId;
            reqObj['ClientCode'] = selectedClientModel.ClientCode;
            const endpoint = 'GetPODRequest';
            ApiClient.callApiPost(endpoint, headerParamsMap, JSON.stringify(reqObj), callbackSuccess, callbackFailure, context);


        });
    }
    /**
     * 
     * @param {*} reqObj 
     * @param {*} callbackSuccess 
     * @param {*} callbackFailure 
     */
    static callDashboardDataApi(context, reqObj, showProgress, callbackSuccess, callbackFailure) {
        var headerParamsMap = {};
        var keysArr = [AsyncStorageKeys.LOGGED_IN_USER_MODEL];
        AsyncStorage.multiGet(keysArr, (err, stores) => {

            var loginUserModel = JSON.parse(stores[0][1]/*LoginUserModel*/)
            headerParamsMap['UserId'] = loginUserModel.UserId;
            headerParamsMap['DeviceId'] = Utils.getDeviceID();
            headerParamsMap['Token'] = loginUserModel.Token;
            const endpoint = 'GetDashboardData';
            ApiClient.callApiPost(endpoint, headerParamsMap, JSON.stringify(reqObj), callbackSuccess, callbackFailure, context, showProgress);

        });
    }
    /**
     * 
     * @param {*} callbackSuccess 
     * @param {*} callbackFailure 
     */
    static callClientDropDownApi(context, showProgress, callbackSuccess, callbackFailure) {
        var paramsMap = {};
        var keysArr = [AsyncStorageKeys.USER_ID, AsyncStorageKeys.TOKEN, AsyncStorageKeys.NPF_USER_ID];
        AsyncStorage.multiGet(keysArr, (err, stores) => {

            paramsMap['UserId'] = stores[0][1];
            paramsMap['DeviceId'] = Utils.getDeviceID();
            paramsMap['Token'] = stores[1][1];
            paramsMap['FMUserId'] = stores[2][1];
            const endpoint = 'GetUserClientDetails';
            ApiClient.callApiPost(endpoint, paramsMap, null, callbackSuccess, callbackFailure, context, showProgress);
        });

    }
    /**
     * 
     * @param {*} context 
     * @param {*} reqObj 
     * @param {*} callbackSuccess 
     * @param {*} callbackFailure 
     */
    static getInventoryList(context, showProgress, reqObj, callbackSuccess, callbackFailure) {
        var headerParamsMap = {};
        var keysArr = [AsyncStorageKeys.LOGGED_IN_USER_MODEL, AsyncStorageKeys.CLIENT_MODEL];
        AsyncStorage.multiGet(keysArr, (err, stores) => {
            var loginUserModel = JSON.parse(stores[0][1]/*LoginUserModel*/)
            var selectedClientModel = JSON.parse(stores[1][1]/*ClientModel*/)

            headerParamsMap['UserId'] = loginUserModel.UserId;
            headerParamsMap['DeviceId'] = Utils.getDeviceID() /*"95f1e91504b59ae"*/;
            headerParamsMap['Token'] = loginUserModel.Token /*"5037524"*/;
            headerParamsMap['FMUserId'] = loginUserModel.NPFUserId;
            headerParamsMap['Clientid'] = selectedClientModel.ClientId;
            headerParamsMap['ClientCode'] = selectedClientModel.ClientCode;
            const endpoint = 'GetInventoryDetails';
            ApiClient.callApiPost(endpoint, headerParamsMap, JSON.stringify(reqObj), callbackSuccess, callbackFailure, context, showProgress);


        });

    }
    /**
     * 
     * @param {*} reqObject 
     * @param {*} callbackSuccess 
     * @param {*} callbackFailure 
     */
    static callChangePassword(context, reqObject, callbackSuccess, callbackFailure) {

        var headerParamsMap = {};
        const endpoint = 'PasswordChange';
        var keysArr = [AsyncStorageKeys.LOGGED_IN_USER_MODEL, AsyncStorageKeys.CLIENT_MODEL];
        AsyncStorage.multiGet(keysArr, (err, stores) => {

            var loginUserModel = JSON.parse(stores[0][1]/*LoginUserModel*/)
            var selectedClientModel = JSON.parse(stores[1][1]/*ClientModel*/)
            headerParamsMap['UserId'] = loginUserModel.UserId;
            headerParamsMap['DeviceId'] = Utils.getDeviceID();
            headerParamsMap['Content-Type'] = 'application/json';
            headerParamsMap['Token'] = loginUserModel.Token;
            reqObject['FMUserId'] = loginUserModel.NPFUserId;
            reqObject['ClientId'] = selectedClientModel.ClientId;
            reqObject['Clientcode'] = selectedClientModel.ClientCode;

            ApiClient.callApiPost(endpoint, headerParamsMap, JSON.stringify(reqObject), callbackSuccess, callbackFailure, context);

        });

    }
    /**
     * 
     * @param {*} context 
     * @param {*} reqObject 
     * @param {*} callbackSuccess 
     * @param {*} callbackFailure 
     */
    static callGetTrackingDetails(context, reqObject, callbackSuccess, callbackFailure) {

        var headerParamsMap = {};
        const endpoint = 'GetTrackingDetails';
        var keysArr = [AsyncStorageKeys.LOGGED_IN_USER_MODEL, AsyncStorageKeys.CLIENT_MODEL];
        AsyncStorage.multiGet(keysArr, (err, stores) => {

            var loginUserModel = JSON.parse(stores[0][1]/*LoginUserModel*/)
            var selectedClientModel = JSON.parse(stores[1][1]/*ClientModel*/)
            headerParamsMap['UserId'] = loginUserModel.UserId;
            headerParamsMap['DeviceId'] = Utils.getDeviceID();
            headerParamsMap['Token'] = loginUserModel.Token;
            reqObject['FMUserId'] = loginUserModel.NPFUserId;
            reqObject['Clientid'] = selectedClientModel.ClientId;
            reqObject['ClientCode'] = selectedClientModel.ClientCode;
            
            ApiClient.callApiPost(endpoint, headerParamsMap, JSON.stringify(reqObject), callbackSuccess, callbackFailure, context);

        });

    }
    /**
     * 
     * @param {*} context 
     * @param {*} reqObj 
     * @param {*} callbackSuccess 
     * @param {*} callbackFailure 
     */
    static getBillingDetails(context, reqObj, callbackSuccess, callbackFailure) {
        var headerParamsMap = {};
        const endpoint = 'GetBillingDetail';
        var keysArr = [AsyncStorageKeys.LOGGED_IN_USER_MODEL, AsyncStorageKeys.CLIENT_MODEL];
        AsyncStorage.multiGet(keysArr, (err, stores) => {

            var loginUserModel = JSON.parse(stores[0][1]/*LoginUserModel*/)

            headerParamsMap['UserId'] = loginUserModel.UserId;
            headerParamsMap['DeviceId'] = Utils.getDeviceID();
            headerParamsMap['Token'] = loginUserModel.Token;

            var selectedClientModel = JSON.parse(stores[1][1]/*ClientModel*/)
            reqObj['Clientid'] = selectedClientModel.ClientId;
            reqObj['ClientCode'] = selectedClientModel.ClientCode;
            reqObj['FMUserId'] = loginUserModel.NPFUserId;
            ApiClient.callApiPost(endpoint, headerParamsMap, JSON.stringify(reqObj), callbackSuccess, callbackFailure, context);

        });
    }

    static getTop5Skus(context, reqObj, callbackSuccess, callbackFailure) {
        var headerParamsMap = {};
        const endpoint = 'GetTop5SKU';
        var keysArr = [AsyncStorageKeys.LOGGED_IN_USER_MODEL, AsyncStorageKeys.CLIENT_MODEL];
        AsyncStorage.multiGet(keysArr, (err, stores) => {
            var loginUserModel = JSON.parse(stores[0][1]/*LoginUserModel*/)
            headerParamsMap['UserId'] = loginUserModel.UserId;
            headerParamsMap['DeviceId'] = Utils.getDeviceID();
            headerParamsMap['Token'] = loginUserModel.Token;
            ApiClient.callApiPost(endpoint, headerParamsMap, JSON.stringify(reqObj), callbackSuccess, callbackFailure, context);
        });
    }


    /**
     * 
     * @param {*} context 
     * @param {*} reqObj 
     * @param {*} callbackSuccess 
     * @param {*} callbackFailure 
     */
    static getInboundList(context, reqObj, callbackSuccess, callbackFailure) {
        var headerParamsMap = {};
        const endpoint = 'GetInboundDeliveries';
        var keysArr = [AsyncStorageKeys.LOGGED_IN_USER_MODEL, AsyncStorageKeys.CLIENT_MODEL];
        AsyncStorage.multiGet(keysArr, (err, stores) => {
            var loginUserModel = JSON.parse(stores[0][1]/*LoginUserModel*/)

            headerParamsMap['UserId'] = loginUserModel.UserId;
            headerParamsMap['DeviceId'] = Utils.getDeviceID();
            headerParamsMap['Token'] = loginUserModel.Token;

            var selectedClientModel = JSON.parse(stores[1][1]/*ClientModel*/)
            reqObj['Clientid'] = selectedClientModel.ClientId;
            reqObj['ClientCode'] = selectedClientModel.ClientCode;
            reqObj['FMUserId'] = loginUserModel.NPFUserId;
            ApiClient.callApiPost(endpoint, headerParamsMap, JSON.stringify(reqObj), callbackSuccess, callbackFailure, context);

        });
    }

    /**
     * 
     * @param {*} context 
     * @param {*} reqObj 
     * @param {*} callbackSuccess 
     * @param {*} callbackFailure 
     */
    static getInboundDeliveryMasterList(context, reqObj, callbackSuccess, callbackFailure) {
        var headerParamsMap = {};
        const endpoint = 'GetInboundDeliveryMasterList';
        var keysArr = [AsyncStorageKeys.LOGGED_IN_USER_MODEL, AsyncStorageKeys.CLIENT_MODEL];
        AsyncStorage.multiGet(keysArr, (err, stores) => {

            var loginUserModel = JSON.parse(stores[0][1]/*LoginUserModel*/)

            headerParamsMap['UserId'] = loginUserModel.UserId;
            headerParamsMap['DeviceId'] = Utils.getDeviceID();
            headerParamsMap['Token'] = loginUserModel.Token;

            var selectedClientModel = JSON.parse(stores[1][1]/*ClientModel*/)
            reqObj['Clientid'] = selectedClientModel.ClientId;
            reqObj['ClientCode'] = selectedClientModel.ClientCode;
            reqObj['FMUserId'] = loginUserModel.NPFUserId;
            ApiClient.callApiPost(endpoint, headerParamsMap, JSON.stringify(reqObj), callbackSuccess, callbackFailure, context);

        });
    }

    /**
     * 
     * @param {*} context 
     * @param {*} reqObj 
     * @param {*} callbackSuccess 
     * @param {*} callbackFailure 
     */
    static getInboundDetails(context, inboundId, callbackSuccess, callbackFailure) {
        var headerParamsMap = {};
        const endpoint = 'GetInboundDetails4Refno';
        var keysArr = [AsyncStorageKeys.LOGGED_IN_USER_MODEL, AsyncStorageKeys.CLIENT_MODEL];
        AsyncStorage.multiGet(keysArr, (err, stores) => {
            var loginUserModel = JSON.parse(stores[0][1]/*LoginUserModel*/)

            headerParamsMap['UserId'] = loginUserModel.UserId;
            headerParamsMap['DeviceId'] = Utils.getDeviceID();
            headerParamsMap['Token'] = loginUserModel.Token;
            headerParamsMap['InboundId'] = inboundId;
            headerParamsMap['FMUserId'] = loginUserModel.NPFUserId;
             var selectedClientModel = JSON.parse(stores[1][1]/*ClientModel*/)
             var reqObj = new InboundDetailsReqBean
             reqObj['Clientid'] = selectedClientModel.ClientId;
             reqObj['ClientCode'] = selectedClientModel.ClientCode;
            // reqObj['FMUserId'] = loginUserModel.NPFUserId;
            ApiClient.callApiPost(endpoint, headerParamsMap, JSON.stringify(reqObj), callbackSuccess, callbackFailure, context);

        });
    }

    /**
     * 
     * @param {*} context 
     * @param {*} reqObj 
     * @param {*} callbackSuccess 
     * @param {*} callbackFailure 
     */
    static getOrderList(context, reqObj, callbackSuccess, callbackFailure) {
        var headerParamsMap = {};
        const endpoint = 'GetOrderList';
        var keysArr = [AsyncStorageKeys.LOGGED_IN_USER_MODEL, AsyncStorageKeys.CLIENT_MODEL];
        AsyncStorage.multiGet(keysArr, (err, stores) => {
            var loginUserModel = JSON.parse(stores[0][1]/*LoginUserModel*/)

            headerParamsMap['UserId'] = loginUserModel.UserId;
            headerParamsMap['DeviceId'] = Utils.getDeviceID();
            headerParamsMap['Token'] = loginUserModel.Token;

            var selectedClientModel = JSON.parse(stores[1][1]/*ClientModel*/)
            reqObj['Clientid'] = selectedClientModel.ClientId;
            reqObj['ClientCode'] = selectedClientModel.ClientCode;
            reqObj['FMUserId'] = loginUserModel.NPFUserId;
            ApiClient.callApiPost(endpoint, headerParamsMap, JSON.stringify(reqObj), callbackSuccess, callbackFailure, context);

        })
    }
    static getBoomList(context, reqObj, callbackSuccess, callbackFailure) {
        var headerParamsMap = {};
        const endpoint = 'GetBomItemDetails';
        var keysArr = [AsyncStorageKeys.LOGGED_IN_USER_MODEL, AsyncStorageKeys.CLIENT_MODEL];
        AsyncStorage.multiGet(keysArr, (err, stores) => {

            var loginUserModel = JSON.parse(stores[0][1]/*LoginUserModel*/)

            headerParamsMap['UserId'] = loginUserModel.UserId;
            headerParamsMap['DeviceId'] = Utils.getDeviceID();
            headerParamsMap['Token'] = loginUserModel.Token;

            var selectedClientModel = JSON.parse(stores[1][1]/*ClientModel*/)
            reqObj['Clientid'] = selectedClientModel.ClientId;
            reqObj['ClientCode'] = selectedClientModel.ClientCode;
            reqObj['FMUserId'] = loginUserModel.NPFUserId;

            ApiClient.callApiPost(endpoint, headerParamsMap, JSON.stringify(reqObj), callbackSuccess, callbackFailure, context);

        });
    }

    static getFreeItemList(context, reqObj, callbackSuccess, callbackFailure) {
        var headerParamsMap = {};
        const endpoint = 'GetFreeItemDetails';
        var keysArr = [AsyncStorageKeys.LOGGED_IN_USER_MODEL, AsyncStorageKeys.CLIENT_MODEL];
        AsyncStorage.multiGet(keysArr, (err, stores) => {

            var loginUserModel = JSON.parse(stores[0][1]/*LoginUserModel*/)

            headerParamsMap['UserId'] = loginUserModel.UserId;
            headerParamsMap['DeviceId'] = Utils.getDeviceID();
            headerParamsMap['Token'] = loginUserModel.Token;

            var selectedClientModel = JSON.parse(stores[1][1]/*ClientModel*/)
            reqObj['Clientid'] = selectedClientModel.ClientId;
            reqObj['ClientCode'] = selectedClientModel.ClientCode;
            reqObj['FMUserId'] = loginUserModel.NPFUserId;


            ApiClient.callApiPost(endpoint, headerParamsMap, JSON.stringify(reqObj), callbackSuccess, callbackFailure, context);

        });
    }

    /**
        * 
        * @param {*} context 
        * @param {*} reqObj 
        * @param {*} callbackSuccess 
        * @param {*} callbackFailure 
        */
    static getOrderMasterList(context, reqObj, callbackSuccess, callbackFailure) {
        var headerParamsMap = {};
        const endpoint = 'GetOrderMasterList';
        var keysArr = [AsyncStorageKeys.LOGGED_IN_USER_MODEL, AsyncStorageKeys.CLIENT_MODEL];
        AsyncStorage.multiGet(keysArr, (err, stores) => {
            var loginUserModel = JSON.parse(stores[0][1]/*LoginUserModel*/)

            headerParamsMap['UserId'] = loginUserModel.UserId;
            headerParamsMap['DeviceId'] = Utils.getDeviceID();
            headerParamsMap['Token'] = loginUserModel.Token;

            var selectedClientModel = JSON.parse(stores[1][1]/*ClientModel*/)
            reqObj['Clientid'] = selectedClientModel.ClientId;
            reqObj['ClientCode'] = selectedClientModel.ClientCode;
            reqObj['FMUserId'] = loginUserModel.NPFUserId;
            ApiClient.callApiPost(endpoint, headerParamsMap, JSON.stringify(reqObj), callbackSuccess, callbackFailure, context);

        });
    }

    /**
     * 
     * @param {*} context 
     * @param {*} reqObj 
     * @param {*} callbackSuccess 
     * @param {*} callbackFailure 
     */
    static getItemCodeList(context, reqObj, searchText, callbackSuccess, callbackFailure) {
        var headerParamsMap = {};
        const endpoint = 'GetItemCodeList';
        var keysArr = [AsyncStorageKeys.LOGGED_IN_USER_MODEL, AsyncStorageKeys.CLIENT_MODEL];
        AsyncStorage.multiGet(keysArr, (err, stores) => {
            var loginUserModel = JSON.parse(stores[0][1]/*LoginUserModel*/)

            headerParamsMap['UserId'] = loginUserModel.UserId;
            headerParamsMap['DeviceId'] = Utils.getDeviceID();
            headerParamsMap['Token'] = loginUserModel.Token;

            var selectedClientModel = JSON.parse(stores[1][1]/*ClientModel*/)
            reqObj['Clientid'] = selectedClientModel.ClientId;
            reqObj['ClientCode'] = selectedClientModel.ClientCode;
            reqObj['FMUserId'] = loginUserModel.NPFUserId;
            reqObj['SearchText'] = searchText;
            ApiClient.callApiPost(endpoint, headerParamsMap, JSON.stringify(reqObj), callbackSuccess, callbackFailure, context);

        });
    }


    /**
     * 
     * @param {*} context 
     * @param {*} reqObj 
     * @param {*} callbackSuccess 
     * @param {*} callbackFailure 
     */
    static getImportBatchList(context, reqObj, searchText, callbackSuccess, callbackFailure) {
        var headerParamsMap = {};
        const endpoint = 'GetImportBatchList';
        var keysArr = [AsyncStorageKeys.LOGGED_IN_USER_MODEL, AsyncStorageKeys.CLIENT_MODEL];
        AsyncStorage.multiGet(keysArr, (err, stores) => {
            var loginUserModel = JSON.parse(stores[0][1]/*LoginUserModel*/)

            headerParamsMap['UserId'] = loginUserModel.UserId;
            headerParamsMap['DeviceId'] = Utils.getDeviceID();
            headerParamsMap['Token'] = loginUserModel.Token;

            var selectedClientModel = JSON.parse(stores[1][1]/*ClientModel*/)
            reqObj['Clientid'] = selectedClientModel.ClientId;
            reqObj['ClientCode'] = selectedClientModel.ClientCode;
            reqObj['FMUserId'] = loginUserModel.NPFUserId;
            reqObj['SearchText'] = searchText;
            ApiClient.callApiPost(endpoint, headerParamsMap, JSON.stringify(reqObj), callbackSuccess, callbackFailure, context);

        });
    }
    /**
      * 
      * @param {*} context 
      * @param {*} reqObj 
      * @param {*} callbackSuccess 
      * @param {*} callbackFailure 
      */
     static updateNotifyDetails(context, reqObj, callbackSuccess, callbackFailure) {
        var headerParamsMap = {};
        const endpoint = 'UpdateNotifyDetails';
        var keysArr = [AsyncStorageKeys.LOGGED_IN_USER_MODEL, AsyncStorageKeys.CLIENT_MODEL];
        AsyncStorage.multiGet(keysArr, (err, stores) => {
            var loginUserModel = JSON.parse(stores[0][1]/*LoginUserModel*/)

            headerParamsMap['UserId'] = loginUserModel.UserId;
            headerParamsMap['DeviceId'] = Utils.getDeviceID();
            headerParamsMap['Token'] = loginUserModel.Token;

            var selectedClientModel = JSON.parse(stores[1][1]/*ClientModel*/)
            reqObj['Clientid'] = selectedClientModel.ClientId;
            reqObj['ClientCode'] = selectedClientModel.ClientCode;
            reqObj['FMUserId'] = loginUserModel.NPFUserId;
            ApiClient.callApiPost(endpoint, headerParamsMap, JSON.stringify(reqObj), callbackSuccess, callbackFailure, context);

        });
    }
    /**
      * 
      * @param {*} context 
      * @param {*} reqObj 
      * @param {*} callbackSuccess 
      * @param {*} callbackFailure 
      */
     static getNotifyDetails(context, reqObj, callbackSuccess, callbackFailure) {
        var headerParamsMap = {};
        const endpoint = 'GetNotifyDetails';
        var keysArr = [AsyncStorageKeys.LOGGED_IN_USER_MODEL, AsyncStorageKeys.CLIENT_MODEL];
        AsyncStorage.multiGet(keysArr, (err, stores) => {
            var loginUserModel = JSON.parse(stores[0][1]/*LoginUserModel*/)

            headerParamsMap['UserId'] = loginUserModel.UserId;
            headerParamsMap['DeviceId'] = Utils.getDeviceID();
            headerParamsMap['Token'] = loginUserModel.Token;

            var selectedClientModel = JSON.parse(stores[1][1]/*ClientModel*/)
            reqObj['Clientid'] = selectedClientModel.ClientId;
            reqObj['ClientCode'] = selectedClientModel.ClientCode;
            reqObj['FMUserId'] = loginUserModel.NPFUserId;
            ApiClient.callApiPost(endpoint, headerParamsMap, JSON.stringify(reqObj), callbackSuccess, callbackFailure, context);

        });
    }
    /**
      * 
      * @param {*} context 
      * @param {*} reqObj 
      * @param {*} callbackSuccess 
      * @param {*} callbackFailure 
      */
    static getOrderDetails(context, reqObj, callbackSuccess, callbackFailure) {
        var headerParamsMap = {};
        const endpoint = 'GetOrderItemDetail';
        var keysArr = [AsyncStorageKeys.LOGGED_IN_USER_MODEL, AsyncStorageKeys.CLIENT_MODEL];
        AsyncStorage.multiGet(keysArr, (err, stores) => {
            var loginUserModel = JSON.parse(stores[0][1]/*LoginUserModel*/)

            headerParamsMap['UserId'] = loginUserModel.UserId;
            headerParamsMap['DeviceId'] = Utils.getDeviceID();
            headerParamsMap['Token'] = loginUserModel.Token;

            var selectedClientModel = JSON.parse(stores[1][1]/*ClientModel*/)
            reqObj['Clientid'] = selectedClientModel.ClientId;
            reqObj['ClientCode'] = selectedClientModel.ClientCode;
            reqObj['FMUserId'] = loginUserModel.NPFUserId;
            ApiClient.callApiPost(endpoint, headerParamsMap, JSON.stringify(reqObj), callbackSuccess, callbackFailure, context);

        });
    }


    static getCompanyProfile(context, reqObj, callbackSuccess, callbackFailure) {
        var headerParamsMap = {};
        const endpoint = 'GetClientProfileDetails';
        var keysArr = [AsyncStorageKeys.LOGGED_IN_USER_MODEL, AsyncStorageKeys.CLIENT_MODEL];
        AsyncStorage.multiGet(keysArr, (err, stores) => {
            var loginUserModel = JSON.parse(stores[0][1]/*LoginUserModel*/)
            headerParamsMap['UserId'] = loginUserModel.UserId;
            headerParamsMap['DeviceId'] = Utils.getDeviceID();
            headerParamsMap['Token'] = loginUserModel.Token;
            // headerParamsMap['Content-Type'] = 'application/json; charset=utf-8';
            var selectedClientModel = JSON.parse(stores[1][1]/*ClientModel*/)
            reqObj.Clientid = selectedClientModel.ClientId;
            reqObj.ClientCode = selectedClientModel.ClientCode;
            reqObj.FMUserId = loginUserModel.NPFUserId;
            ApiClient.callApiPost(endpoint, headerParamsMap, JSON.stringify(reqObj), callbackSuccess, callbackFailure);
        });
    }


    static getTimeZoneData(context, reqObj, callbackSuccess, callbackFailure){
        var headerParamsMap = {};
        const endpoint = 'GetProfileMaster';
        var keysArr = [AsyncStorageKeys.LOGGED_IN_USER_MODEL, AsyncStorageKeys.CLIENT_MODEL];
        AsyncStorage.multiGet(keysArr, (err, stores) => {
            var loginUserModel = JSON.parse(stores[0][1]/*LoginUserModel*/)
            headerParamsMap['UserId'] = loginUserModel.UserId;
            headerParamsMap['DeviceId'] = Utils.getDeviceID();
            headerParamsMap['Token'] = loginUserModel.Token;
            // headerParamsMap['Content-Type'] = 'application/json; charset=utf-8';
            var selectedClientModel = JSON.parse(stores[1][1]/*ClientModel*/)
            reqObj.Clientid = selectedClientModel.ClientId;
            reqObj.ClientCode = selectedClientModel.ClientCode;
            reqObj.FMUserId = loginUserModel.NPFUserId;
            ApiClient.callApiPost(endpoint, headerParamsMap, JSON.stringify(reqObj), callbackSuccess, callbackFailure);
        });
    }

    /**
    * 
    * @param {*} context 
    * @param {*} reqObj 
    * @param {*} callbackSuccess 
    * @param {*} callbackFailure 
    */
    static resendOrder(context, reqObj, callbackSuccess, callbackFailure) {
        var headerParamsMap = {};
        const endpoint = 'OrderClone';
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

    static updateUserProfile(context, reqObj, callbackSuccess, callbackFailure) {
        var headerParamsMap = {};
        const endpoint = 'UpdateProfile';
        var keysArr = [AsyncStorageKeys.LOGGED_IN_USER_MODEL, AsyncStorageKeys.CLIENT_MODEL];
        AsyncStorage.multiGet(keysArr, (err, stores) => {
            var loginUserModel = JSON.parse(stores[0][1]/*LoginUserModel*/)
            headerParamsMap['UserId'] = loginUserModel.UserId;
            headerParamsMap['DeviceId'] = Utils.getDeviceID();
            headerParamsMap['Token'] = loginUserModel.Token;   
            // headerParamsMap['Content-Type'] = 'application/json; charset=utf-8';   
                    
            ApiClient.callApiPost(endpoint, headerParamsMap, JSON.stringify(reqObj), callbackSuccess, callbackFailure, context);
        });
    }


    static GetOrderDetailListForLastNoOfDays(context, reqObj, callbackSuccess, callbackFailure){

        var headerParamsMap = {};
        const endpoint = 'GetDashBoardOrderDetailList4Last_No_Days';
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


    static GetOnTimeOrderDetailList(context, reqObj, callbackSuccess, callbackFailure){

        var headerParamsMap = {};
        const endpoint = 'GetDashBoardShipOnTimeOrderDetailList4Last_No_Days';
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