import React, {Component} from 'react';
import {StyleSheet, Text, TouchableNativeFeedback,Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ripple from 'react-native-material-ripple';
import Dimens from '../res/dimens'
var R = require('../res/strings.js').default;
export default class AppButton extends Component  {
    constructor(props) {
        super(props);
    }
    _onPressButton() {}
    render() {
        const context = this;
        return (

            <Text style={styles.buttonText}>
                {context.props.title}
            </Text>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'column',
        alignItems: 'center'
    },
    linearGradient: {
        alignSelf: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: Dimens.getTextAppearanceMediumFontSize(18),
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
        // fontFamily: R.str.custom_font
        fontFamily: Platform.OS =='android' ?R.str.custom_font:R.str.custom_font_for_ios
    }
});