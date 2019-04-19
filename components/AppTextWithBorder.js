import React, { Component } from 'react';
import { StyleSheet, Text ,View,Platform} from 'react-native';
import dimens from '../res/dimens';
import * as color from '../res/colors'
var R = require('../res/strings.js').default;
export default class AppTextWithBorder extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const context = this;
        var isUnderLine = this.props.unline;
       
        return (
            <View >
                <Text
                    numberOfLines={context.props.numberOfLines}
                    ellipsizeMode={context.props.ellipsizeMode}
                    onPress={context.props.onPress}
                    style={[styles.text, context.props.style]}>
                    {context.props.title}
                </Text>
                {isUnderLine == true ? <View style={{ height: 1, backgroundColor: 'white', width:110  }}></View> : null}
            </View>

        );
    }
}
const styles = StyleSheet.create({
    text: {
        fontSize: dimens.getSmallFontSize(),
        color: color.TEXT_COLOR_WHITE,
        // fontFamily: 
        fontFamily: Platform.OS =='android' ?R.str.custom_font:R.str.custom_font_for_ios
    }
});