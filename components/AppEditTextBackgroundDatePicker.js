import React, {Component} from 'react';
import {StyleSheet, Text, TouchableNativeFeedback,TouchableOpacity,TextInput,View,Image,Platform} from 'react-native';
import DatePicker from 'react-native-datepicker';
import * as color from '../res/colors'
import Dimens from '../res/dimens'
var R = require('../res/strings.js').default;
export default class AppEditTextBackgroundDatePicker extends Component  {
    constructor(props) {
        super(props);
        this.state={
            date:''
        }
    }
    _onPressButton() {}
    render() {
        const context = this;
        return (
            <View style={styles.container}>
            <DatePicker
								disabled={false}
								style={{ width: "100%"}}
                                mode="date"
                                placeholder={this.props.title}
                                date={this.state.date}
								format="DD-MM-YYYY"
								minDate="01-01-2017"
								confirmBtnText={R.str.confirm}
                                cancelBtnText={R.str.cancel}
                                onDateChange={this.props.onDateChange}
                                iconSource={require('./img/calendar.png')}
                                customStyles={{
                                    dateIcon: {
                                      marginLeft: 0,
                                      height:24,
                                      width:24,
                                    },
                                    dateInput: {
                                      borderColor:'transparent'
                                    },
                                    placeholderText:{
                                        fontSize: Dimens.getSmallThirteenFontSize(),
                                        color: color.WHITE,
                                        fontFamily: Platform.OS =='android' ?R.str.custom_font:R.str.custom_font_for_ios
                                    }
                                    // ... You can check the source to find the other keys.
                                  }}
							/>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingRight: Dimens.getDynamicValue(1.5),
        backgroundColor: '#043F84',
        height:Dimens.getDynamicValue(40),
        borderWidth: 1.2,
        justifyContent:'center',
        alignItems:'center',
        borderColor: '#619FD8',
        borderRadius:3,
        flexDirection:'row'
    },
    textInput: {
        flex:0.8,
        color:'white',
        // fontFamily: R.str.custom_font
        fontFamily: Platform.OS =='android' ?R.str.custom_font:R.str.custom_font_for_ios
    },icon:{
        flex:0.2,
    }
});