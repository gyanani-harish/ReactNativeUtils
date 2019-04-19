import React, { Component } from 'react';
import { StyleSheet, Text,Platform } from 'react-native';
import dimens from '../res/dimens';
import * as color from '../res/colors'
var R = require('../res/strings.js').default;
export default class AppText extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const context = this;
        return (

            <Text
                allowFontScaling={false}
                selectable={true}
                numberOfLines={context.props.numberOfLines}
                ellipsizeMode={context.props.ellipsizeMode?context.props.ellipsizeMode:'tail'}
                onPress={context.props.onPress}
                style={[styles.text, context.props.style]}>
                {context.props.title}
            </Text>

        );
    }
}
const styles = StyleSheet.create({
    text: {
        fontSize: dimens.getSmallFontSize(),
        color: color.TEXT_COLOR_WHITE,
        // fontFamily: R.str.custom_font
        fontFamily: Platform.OS =='android' ?R.str.custom_font:R.str.custom_font_for_ios
    }
});