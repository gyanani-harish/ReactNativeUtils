import React, {Component} from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, TextInput, View,Platform} from 'react-native';
var R = require('../res/strings.js').default;
export default class AppEditTextBackground extends Component {
    constructor(props) {
        super(props);
    }
    _onPressButton() {}
    render() {
        const context = this;
        return (
            <View style={[styles.container, context.props.containerStyle]}>
                <TextInput
                    placeholderTextColor={context.props.placeholderTextColor}
                    value={context.props.value}
                    placeholder={context.props.label}
                    onChangeText={(txt)=>{this.props.changeText(txt)}}
                    multiline={context.props.multiline}
                    maxLength={context.props.maxLength}
                    editable={context.props.editable}
                    secureTextEntry={context.props.secureTextEntry}
                    style={[styles.default,styles.textInput, context.props.style]}
                    underlineColorAndroid='transparent'/>
            </View>

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
    },
    textInput: {
        flex: 1,
        color: 'white',
        padding: 5,
        
        // fontFamily: R.str.custom_font
        fontFamily: Platform.OS =='android' ?R.str.custom_font:R.str.custom_font_for_ios

    }
});








