import React, {Component} from 'react';
import {StyleSheet,Platform} from 'react-native';
import {TextField} from 'react-native-material-textfield';
import Log from '../utils/Log'
import Dimens from '../res/dimens';
var R = require('../res/strings.js').default;
export default class AppEditText extends Component {
    constructor(props) {
        super(props);
    }
    _onPressButton() {}

    render() {
        const context = this;
        return (<TextField
            returnKeyType={context.props.returnKeyType}
            value={context.props.value}
            autoCapitalize={context.props.autoCapitalize}
            maxLength={context.props.maxLength}
            onSubmitEditing={context.props.onSubmitEditing}
            keyboardType={context.props.keyboardType}
            autoCorrect={context.props.autoCorrect}
            onChangeText={context.props.onChangeText}
            onSubmitEditing={context.props.onSubmitEditing}
            onBlur={context.props.onBlur}
            ref={context.props.reference}
            secureTextEntry={context.props.secureTextEntry}
            error={context.props.error}
            labelFontSize={Dimens.getSmallFontSize()}
            textColor='white'
            tintColor='#FFFFFF44'
            baseColor='#FFFFFF44'
            errorColor='#FF3434'
            titleTextStyle={{
                fontFamily: Platform.OS =='android' ?R.str.custom_font:R.str.custom_font_for_ios
            }}
            labelTextStyle={{
                fontFamily: Platform.OS =='android' ?R.str.custom_font:R.str.custom_font_for_ios
            }}
            style={{
            textAlign: 'center',
            color: 'white',
            fontSize:Dimens.getTextAppearanceSmallFontSize(),
            fontFamily: Platform.OS =='android' ?R.str.custom_font:R.str.custom_font_for_ios
        }}
            label={context.props.label}
            inputContainerStyle={[
            {
                alignSelf: 'center',
                width: '80%',
                alignItems: 'center'
            },
            context.props.style
        ]}/>);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'column',
        alignItems: 'center'
    },
    
    
});