import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableNativeFeedback,Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ripple from 'react-native-material-ripple';
var R = require('../res/strings.js').default;
export default class SimpleAppButton extends Component {
    constructor(props) {
        super(props);
    }
    _onPressButton() {}
    render() {
        const context = this;
        return (

            <Ripple style={[styles.btn,context.props.style]}  disabled={this.props.disabled} onPress={context.props.onPress}>

                        <Text style={[styles.buttonText,context.props.textStyle]}>
                        {context.props.title}
                        </Text>
                    </Ripple>

        );
    }
}
const styles = StyleSheet.create({
    btn:{
        height:40,
        alignItems: 'center',
        justifyContent:'center'
    },
    buttonText: {
        fontSize: 15,
        // fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 7,
        color: '#ffffff',
        backgroundColor: 'transparent',
        // fontFamily: R.str.custom_font
        fontFamily: Platform.OS =='android' ?R.str.custom_font:R.str.custom_font_for_ios
    }
});