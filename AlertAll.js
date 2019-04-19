import React, { Component } from 'react';
import { Alert, Platform } from 'react-native';
const isShowAlert = true;
import time_delay from '../res/time_delay'
import R from '../res/strings'
import Log from '../utils/Log'
export default class AlertAll extends Component {
    /**
     * 
     * @param {*} message 
     * @param {*} okTxtCallback 
     */
    static showErrorAlert(message, okTxtCallback){
        //this.showValidationAlert(message, okTxtCallback)
        //this.showAlert(message)
        this.simpleOKAlert('',message,R.str.ok,okTxtCallback,false);
    }
    /**
     * 
     * @param {*} message 
     * @param {*} okTxtCallback 
     */
    static showValidationAlert(message, okTxtCallback){
        this.simpleOKAlert('',message,R.str.ok,okTxtCallback,false);
        //this.showAlert(message)
    }
    static showSuccessAlert(message, okTxtCallback){
        this.simpleOKAlert('',message,R.str.ok,okTxtCallback,false);
    }
    /**
     * 
     * @param {*} title 
     * @param {*} message 
     * @param {*} okTxt 
     * @param {*} okTxtCallback 
     * @param {*} isCancelable 
     */
    static simpleOKAlert(title, message, okTxt, okTxtCallback, isCancelable) {
        // Works on both iOS and Android
        if (Platform.OS == 'android') {
            if (isShowAlert == true) {
                Alert.alert(title, message, [
                    {
                        text: okTxt,
                        onPress: (e) =>okTxtCallback? okTxtCallback(e):Log.showLog('no callback')
                    }
                ], { cancelable: isCancelable })
            }
        } else {
            setTimeout(() => {
                if (isShowAlert == true) {
                    Alert.alert(title, message, [
                        {
                            text: okTxt,
                            onPress: (e) =>okTxtCallback? okTxtCallback(e):Log.showLog('no callback')
                        }
                    ], { cancelable: isCancelable })
                }
            }, time_delay.getTimeDelayForIosAlert());
        }
    }
    /**
     * 
     * @param {*} title 
     * @param {*} message 
     * @param {*} okTxt 
     * @param {*} cancelTxt 
     * @param {*} okTxtCallback 
     * @param {*} isCancelable 
     */
    static showConfirmDialog(title, message, okTxt, cancelTxt, okTxtCallback,cancelTxtCallback, isCancelable){
       // this.simpleOkCancelAlert(title, message, okTxt, cancelTxt, okTxtCallback, isCancelable)
        // Works on both iOS and Android
        if (isShowAlert == true) {
            if (Platform.OS == 'android') {
                Alert.alert(title, message, [
                    {
                        text: okTxt,
                        onPress: (e) => okTxtCallback(e)
                    },
                    {
                        text: cancelTxt, style: 'cancel',
                        onPress: (e) => cancelTxtCallback(e)
                    }
                ], { cancelable: isCancelable })
            } else {
                setTimeout(() => {

                    Alert.alert(title, message, [
                        {
                            text: okTxt,
                            onPress: (e) => okTxtCallback(e)
                        },
                        {
                            text: cancelTxt, style: 'cancel',
                            onPress: (e) => cancelTxtCallback(e)
                        }
                    ], { cancelable: isCancelable })
                }, time_delay.getTimeDelayForIosAlert());
            }
        }
    }
    /**
     * 
     * @param {*} title 
     * @param {*} message 
     * @param {*} okTxt 
     * @param {*} cancelTxt 
     * @param {*} okTxtCallback 
     * @param {*} isCancelable 
     */
    static simpleOkCancelAlert(title, message, okTxt, cancelTxt, okTxtCallback, isCancelable) {
        // Works on both iOS and Android
        if (isShowAlert == true) {
            if (Platform.OS == 'android') {
                Alert.alert(title, message, [
                    {
                        text: okTxt,
                        onPress: (e) => okTxtCallback(e)
                    },
                    {
                        text: cancelTxt, style: 'cancel',
                    }
                ], { cancelable: isCancelable })
            } else {
                setTimeout(() => {

                    Alert.alert(title, message, [
                        {
                            text: okTxt,
                            onPress: (e) => okTxtCallback(e)
                        },
                        {
                            text: cancelTxt, style: 'cancel',
                        }
                    ], { cancelable: isCancelable })
                }, time_delay.getTimeDelayForIosAlert());
            }
        }
    }
    /**
     * 
     * @param {*} msg 
     */
    static showAlert(msg,callback=null) {
        if (Platform.OS == 'android') {
            if (isShowAlert == true) {
                //alert(msg)
                this.simpleOKAlert('',msg,R.str.ok,callback,false);
            }
        } else {
            setTimeout(() => {
                if (isShowAlert == true) {
                    //alert(msg)
                    this.simpleOKAlert('',msg,R.str.ok,callback,false);
                    if(callback!=null){
                        callback();
                    }
                }
            }, time_delay.getTimeDelayForIosAlert());
        }
    }
}
