import React, { Component } from 'react';
import { StyleSheet,Platform, Text, TouchableNativeFeedback, TextInput, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ripple from 'react-native-material-ripple';
import AppText from '..//components/AppText'
import { CheckBox, Icon } from 'react-native-elements'
var R = require('../res/strings.js').default;
import ModalDropdown from 'react-native-modal-dropdown';
import Log from '../utils/Log'
import Dimens from '../res/dimens'
export default class AppDropdown extends Component {
    constructor(props) {
        super(props);
    }

    onClickDropdown(index) {

        this._dropdown_5 && this._dropdown_5.show();

    }

    render() {
        const context = this;
        return (
            <Ripple style={[styles.container, this.props.style]} onPress={() => context.onClickDropdown(1)}>
                {/* <AppText style={{flex:1,color:'white'}} title={context.props.title} /> */}
                <ModalDropdown
                    textStyle={[styles.textStyle,this.props.textStyle]} ref={el => this._dropdown_5 = el}
                    options={this.props.dropDownOptions}
                    defaultValue={this.props.defaultSelected}
                    defaultIndex={this.props.defaultIndex}
                    onSelect={this.props.onItemSelected}
                    style={{flex: 1, justifyContent: 'center' }}
                />
                <Image style={[styles.arrow_style, context.props.arrowStyle]} source={require('./img/down_arrow.png')} />
            </Ripple>

        );
    }
}
const styles = StyleSheet.create({
    textStyle:{
        fontFamily: Platform.OS =='android' ?R.str.custom_font:R.str.custom_font_for_ios,
        fontSize: Dimens.getSmallThirteenFontSize(),
    },
    arrow_style: {
        height: Dimens.getDynamicValue(12),
        width: Dimens.getDynamicValue(12),
        alignContent: 'center',
        alignSelf: 'center'
    },
    container: {
        backgroundColor: '#043F84',
        height: Dimens.getDynamicValue(40),
        borderWidth: 1.2,
        justifyContent: 'center',
        borderColor: '#619FD8',
        borderRadius: 3,
        paddingLeft: 5,
        paddingRight:  Dimens.getDynamicValue(5),
        flex: 1,
        flexDirection: 'row'
    },

});