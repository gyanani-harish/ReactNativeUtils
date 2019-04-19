import { Alert } from 'react-native';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';


import Log from '../../app/utils/Log';
var DeviceInfo = require('react-native-device-info');

export default class Utils {
    static isNetworkUnavailable(exception) {
        if (!this.isNullOrUndefined(exception)) {
            try {
                return exception.currentTarget._response == 'Network is unreachable';
            } catch (e) {
                return false;
            }
        }
        return false;
    }
    /**
     * 
     * @param {*} url 
     */
    static isValidWebsite(url){
        var re=/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
        return re.test(url);
    }
    /**
     * 
     * @param {*} componentContext 
     */
    static isMounted(componentContext){
        if(this.isNullOrUndefined(componentContext) || !componentContext.props.navigation.hasOwnProperty('isMounted') ){
            return false;
        }
        return componentContext.isMounted();
    }
    /**
     * 
     * @param {*} componentContext 
     */
    static isFocused(componentContext){
        if(this.isNullOrUndefined(componentContext) 
            || this.isNullOrUndefined(componentContext.props) 
            || this.isNullOrUndefined(componentContext.props.navigation)
            || !componentContext.props.navigation.hasOwnProperty('isFocused') ){
            return false;
        }
        return componentContext.props.navigation.isFocused();
    }
    static isString(obj) {
        return !this.isNullOrUndefined(obj) && (typeof obj === 'string' || obj instanceof String);
    }
    /**
     * obj -false
     * '' - true
     * '     ' -true
     * 'v' - false
     * 5 -false
     * null - true
     * @param {*} str 
     */
    static isEmptyStr(str) {
        return this.isString(str) && str
            .replace(/^\s+|\s+$/g, "")
            .length < 1;
    }

    // static handleError(error, callbackFailure) {
        
    //     if (!this.isNullOrUndefined(error) && this.isString(error.message) && !this.isEmptyStr(error.message)) {
              
    //         if (Utils.compareStringInsensitive(error.message, 'Network request failed') || Utils.compareStringInsensitive(error.message, ErrorMessages.USER_OFFLINE)) {
    //             callbackFailure(strings(ErrorMessages.INTERNET_CONNECT_ERROR));
    //         }
    //         else if(error.message== ErrorMessages.CONNECTION_TIME_OUT_MSG){
    //             callbackFailure(ErrorMessages.CONNECTION_TIME_OUT_MSG);
    //         }
    //     }
    //     // else {
    //     //     callbackFailure(strings(ErrorMessages.DEFAULT_ERROR));
    //     // }
    // }
    static compareStringInsensitive(str1, str2) {
        try {
            if (!isString(str1) || !isString(str2)) {
                Log.showLog('str1 or str2 are not type of string');
                return false;
            }
            return str1.toUpperCase() === str2.toUpperCase();
        } catch (e) {
            Log.showLog(e);
            return false;
        }
    }
    static simpleOKAlert(title, message, okTxt, okTxtCallback, isCancelable) {
        // Works on both iOS and Android
        Alert.alert(title, message, [
            {
                text: okTxt,
                onPress: (e) => okTxtCallback(e)
            }
        ], { cancelable: isCancelable })
    }
    static navigate(data,callback=null) {
        const navigate = data.navigation
        Alert.alert(
            'Logout',
            'Do you want to Logout?',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'OK', onPress: () => {this.redirectToLoginScreen(navigate)
                    if(callback!=null)
                    callback('OK')
                } },
            ],
            { cancelable: false }
        )
    }

    static redirectToLoginScreen(navigation) {
        try {
            Log.showLog('Logout Successful1'+JSON.stringify(navigation));
         
            const resetAction = NavigationActions.reset({
                index: 0,
                key: null,
                actions: [NavigationActions.navigate({ routeName: 'Login' })],
              });
              navigation.dispatch(resetAction);
             
        } catch (e) {
            Log.showLog(e);
        }
    }


    static setString(obj, defaultStr) {
        try {
            if(this.isNullOrUndefined(obj)){
                return defaultStr;
            }
            // else if (!obj){
            //     return defaultStr;
            // }

            else if (obj === parseInt(obj, 10)) {
                return parseInt(obj.toString());
            }
            else if (obj == '') {
                return defaultStr;
            } else {
                    return obj.toString().trim();
            }
        } catch (e) {
            return defaultStr;
        }
    }
    static isNullOrUndefined(obj) {
        try {
            return this.isNull(obj) || this.isUndefined(obj);
        } catch (e) {
            return false;
        }
    }

    static isNullOrUndefinedOrBlank(obj){
        try {
            return this.isNull(obj) || this.isUndefined(obj)|| this.isBlank(obj)
        } catch (e) {
            return false;
        }
    }

    static isBlank(obj){
       return obj==''||obj==""
    }

    static isNull(obj) {
        return obj == null || obj == 'null' ;
    }
    static isNotNull(obj) {
        return !this.isNull(obj);
    }
    static isUndefined(obj) {
        return obj === undefined;
    }
    static isNotUndefined(obj) {
        return !this.isUndefined(obj);
    }
    static isInteger(obj) {
        try {
            return this.isNotNull(obj) && obj === parseInt(obj, 10);
        } catch (e) {
            return false;
        }
    }
    static isString(obj) {
        return this.isNotNull(obj) && (typeof obj === 'string' || obj instanceof String);
    }
    // static isEmptyStr(str) {
    //     return this.isUndefined(str) || this.isNull(str) || str
    //         .replace(/^\s+|\s+$/g, "")
    //         .length < 1;
    // }
    static compareStringInsensitive(str1, str2) {
        try {
            if (!Utils.isString(str1) || !Utils.isString(str2)) {
                Log.showLog('str1 or str2 are not type of string');
                return false;
            }
            return str1.toUpperCase() === str2.toUpperCase();
        } catch (e) {
            return false;
        }
    }

    static redirectToCustomScreen(navigation) {
        const navigate = navigation;
        // const resetAction = NavigationActions.reset({
        //     index: 0,
        //     actions: [
        //       NavigationActions.navigate({
        //         routeName: 'BaseApp',
        //         params: {email:'',name:'',uri:''}
        //       })
        //     ]
        //   })
        //   navigation.dispatch(resetAction);
        //   navigation.dispatch('Notification')
        try {
           
           navigate.navigate('DrawerClose');
           navigate.navigate('Notification');
        } catch (e) {
            Log.showLog(e);
        }
    }

    static openTooltip(message) {
        Alert.alert(
            '',
            message,
            [

                { text: 'Cancel', style: 'cancel' },
            ],
            { cancelable: false }
        )
    }

   static getDeviceID=()=>{
      return DeviceInfo.getUniqueID();
      // return '8d3685b090d45954';
     
      }
      static safeParseInt(str){
          try{
            return parseInt(str);
          }catch(e){

              return 0;
          }
      }
      /**
       * 
       * @param {*} oldList 
       * @param {*} newList 
       */
    static mergeLists(oldList, newList) {
        if (Utils.isNullOrUndefined(newList) && Utils.isNullOrUndefined(oldList)) {
            return [];
        } else if (Utils.isNullOrUndefined(newList)) {
            return oldList;
        } else if (Utils.isNullOrUndefined(oldList)) {
            return newList;
        }
        var totalList = [];
        for (var i = 0; i < oldList.length; i++) {
            var invoiceObj = oldList[i];
            totalList.push(invoiceObj);
        }
        for (var i = 0; i < newList.length; i++) {
            var invoiceObj = newList[i];
            totalList.push(invoiceObj);
        }
        /* Log.showLog('old list',oldList);
                Log.showLog('new list',newList);
                Log.showLog('complete list',totalList);*/
        return totalList;
    }
    static capitalize(str){
        if(Utils.isNullOrUndefined(str)){
            return null;
        }
        return str.charAt(0).toUpperCase() + str.slice(1);
        }
}