import React, {Component} from 'react';
import {StyleSheet, Text,Platform, View, TouchableNativeFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ripple from 'react-native-material-ripple';
import AppText from './AppText.js';
import Dimens from '../res/dimens.js';
var R = require('../res/strings.js').default;
export default class AppButton extends Component {
    constructor(props) {
        super(props);
    }
    _onPressButton() {}
    render() {
        const context = this;
        return (

            <Ripple disabled={context.props.disabled} style={[styles.btn,context.props.style]} onPress={context.props.onPress}>
                <LinearGradient
                    colors={context.props.colorsArr
                    ? context.props.colorsArr
                    : ['#FF8303', '#FC9903', '#FAA102', '#FAA703']}
                    start={{
                    x: 0.0,
                    y: 0.8
                }}
                    end={{
                    x: 1.0,
                    y: 0.0
                }}
                    locations={[0, 0.6, 0.7, 0.8]}
                    style={[styles.linearGradient, context.props.containerStyle]}>
                    <AppText title={context.props.title} style={styles.buttonText}>
                        
                    </AppText>
                </LinearGradient>
            </Ripple>
        );
    }
}
const styles = StyleSheet.create({
    btn:{
        alignItems: 'center',
        justifyContent:'center',
    },
    linearGradient: {
        alignSelf: 'center',
        borderRadius: Dimens.getDynamicValue(3)
    },
    buttonText: {
        paddingLeft: Dimens.getDynamicValue(18),
        paddingRight: Dimens.getDynamicValue(18),
        fontSize: Dimens.getBtnTextSize(),
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 7,
        color: '#ffffff',
        backgroundColor: 'transparent',
        // fontFamily: R.str.custom_font
        fontFamily: Platform.OS =='android' ?R.str.custom_font:R.str.custom_font_for_ios
    }
});
