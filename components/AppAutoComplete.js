import React, {Component} from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, TextInput, View,TouchableOpacity,Platform} from 'react-native';

var R = require('../res/strings.js').default;
import Autocomplete from 'react-native-autocomplete-input';
//https://www.npmjs.com/package/react-native-autocomplete-input
export default class AppAutoComplete extends Component {
    constructor(props) {
        super(props);
    }
    _onPressButton() {}
    render() {
        const context = this;
        return (
               <Autocomplete
                data={context.props.data}
                style={[styles.container]}
                inputContainerStyle={{borderWidth:0}}
                underlineColorAndroid="transparent"
                defaultValue={context.props.defaultValue}
                onChangeText={context.props.onChangeText}
                placeholder={this.props.placeholder}
                renderItem={context.props.renderItem}
            />

        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#043F84',
        height: 40,
        borderWidth: 1.2,
        justifyContent: 'center',
        borderColor: '#619FD8',
        borderRadius: 3,
        paddingLeft: 5,
        paddingRight: 5,
        color: 'white',
        alignItems: 'center',

       
    },
    textInput: {
        flex: 1,
        color: 'white',
        alignItems: 'center',
        padding: 5,
        // fontFamily: R.str.custom_font
        fontFamily: Platform.OS =='android' ?R.str.custom_font:R.str.custom_font_for_ios

    }
});