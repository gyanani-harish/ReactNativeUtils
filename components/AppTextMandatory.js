import React, { Component } from 'react';
import { StyleSheet, Text ,View,Platform} from 'react-native';
import dimens from '../res/dimens';
import * as color from '../res/colors'
var R = require('../res/strings.js').default;
export default class AppText extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const context = this;
        var isisMandatory = context.props.isMandatory;
        return (
            <View>
                {
                    isisMandatory == true ? <Text
                        onPress={context.props.onPress}
                        style={[styles.text, context.props.style]}>
                        {context.props.title}
                        <Text style={styles.star_style}>*</Text>
                    </Text>
                        :
                        <Text
                            onPress={context.props.onPress}
                            style={[styles.text, context.props.style]}>
                            {context.props.title}
                        </Text>
                }
            </View>

        );
    }
}
const styles = StyleSheet.create({
    star_style:{color:'red'},
    text: {
        fontSize: dimens.getSmallFontSize(),
        color: color.TEXT_COLOR_WHITE,
        // fontFamily: R.str.custom_font
        fontFamily: Platform.OS =='android' ?R.str.custom_font:R.str.custom_font_for_ios
    }
});