var DeviceInfo = require('react-native-device-info');
const isTablet = DeviceInfo.isTablet(); 
const tabletScaleFactor = 1.3;
export default class Dimens {
    static getDynamicValue(value){
        return isTablet?value*tabletScaleFactor:value;
    }
    static getHeaderHeight(value){
        return isTablet?62:value;
    }
    static getBtnTextSize() {
        return isTablet?22.5:15;
    }
    static getGradientVerticalStart() {
        return {x: 0.0, y: 0.0}
    }
    static getGradientVerticalEnd() {
        return {x: 0.0, y: 1.0}
    }
    static getGradientHorizontalStart() {
        return {x: 0.0, y: 0.0}
    }
    static getGradientHorizontalEnd() {
        return {x: 1.0, y: 0.0}
    }
    static getGradientLocationArray() {
        return [0, 0.3, 0.4, 0.6, 0.8];
    }
    static getSmallestFontSize(){
        return isTablet?10*tabletScaleFactor:10;
    }
    static getSmallFontSizeEleven(){
        return isTablet?11*tabletScaleFactor:11;
    }
    static getDashboardBottomHeaderSize(){
        return isTablet?11*tabletScaleFactor:11;
    }
    static getSmallFontSize(){
        return isTablet?12*tabletScaleFactor:12;
    }
    static getSmallThirteenFontSize(){
        return isTablet?13*tabletScaleFactor:13;
    }
    static getTextAppearanceSmallFontSize(){
        return isTablet?14*tabletScaleFactor:14;
    }
    static getMediumFontSize(){
        return isTablet?16*tabletScaleFactor:16;
    }
    static getTextAppearanceMediumFontSize(){
        return isTablet?18*tabletScaleFactor:18;
    }
    static getLargeFontSize(){
        return isTablet?20*tabletScaleFactor:20;
    }
    static getTextAppearanceLargeFontSize(){
        return isTablet?22*tabletScaleFactor:22;
    }
    static getSearchLabelTextSize(){
        return this.getSmallThirteenFontSize();
    }
    static getLargerFontSize(){
        return isTablet?24*tabletScaleFactor:24;
    }
    static getNoDataFoundMediumFontSize(){
        return isTablet?28*tabletScaleFactor:28;
    }
    static getNoDataFoundLessLargeFontSize(){
        return isTablet?32*tabletScaleFactor:32;
    }
    static getNoDataFoundLargeFontSize(){
        return isTablet?36*tabletScaleFactor:36;
    }
    static getThickerBorderWidth(){
        return 2;
    }
    static getThickBorderWidth(){
        return 1;
    }
    static getLightBorderWidth(){
        return 0.5;
    }
    static getPageSize(){
        return isTablet? 60:30;
    }
    //dashboard specific
    static getClientDropDownFontSize(){
        return isTablet?21:15;
    }
    static getDaysFontSize(){
        return isTablet?20:14;
    }
    //dashboard specific

    static getFlipToggleButtonWidth(phoneValue){
        return isTablet?50:phoneValue;
    }
    static getFlipToggleButtonHeight(phoneValue){
        return isTablet?24:phoneValue;
    }
    static getFlipToggleButtonRadius(phoneValue){
        return isTablet?3:phoneValue;
    }
    static getFlipToggleSliderWidth(phoneValue){
        return isTablet?20:phoneValue;
    }
    static getFlipToggleSliderHeight(phoneValue){
        return isTablet?20:phoneValue;
    }
    static getFlipToggleSliderRadius(phoneValue){
        return isTablet?3:phoneValue;
    }


    static getDaysLayoutHeight(phoneValue){
        return isTablet?38:phoneValue;
    }
    static getHeaderIconSize(value){
        return isTablet?value*1.4:value;
    }
    static getDashboardCircleSize(phoneValue){
        return isTablet?phoneValue*1.5:phoneValue;
    }
}