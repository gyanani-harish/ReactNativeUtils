import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, Image,BackHandler,Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppText from './AppText'
var R = require('../res/strings').default;
import Ripple from 'react-native-material-ripple'
import * as PubSubKeys from '../../app/utils/PubSubKeys'
import * as color from '../res/colors'
import Log from '../utils/Log'
import Dimens from '../res/dimens';
export default class AdvancedSearch extends Component {
    constructor(props) {
        super(props);
        this.onBackPress = this.onBackPress.bind(this);
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }
    onCrossClicked() { 
        this.props.navigation.goBack(null)
        PubSub.publish(PubSubKeys.ActionBarSearchSubs, "closed");
    }


    render() {
        const context = this;
        return (
            <View style={styles.container}>
                <AppText style={styles.text} title={R.str.advanced_search}/>
                <Ripple onPress={()=>this.onCrossClicked()}>
                    <View style={{height: 54,width:54,justifyContent:'center',alignItems:'center' }}>
                        <Image style={styles.icon} source={require('../images/ic_cross.png')}  style={[styles.company_logo]} />
                    </View>
                </Ripple>
            </View>
        );
    }

    componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }
    onBackPress(){
        this.onCrossClicked();
        return true;
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 54,
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomWidth: 0.5,
        borderColor: '#4F72A7',
        alignItems: 'center'
    },
    text: {
        flex: 1,
        fontSize: Dimens.getMediumFontSize(),
        color: color.TEXT_COLOR_WHITE,
        // fontFamily: R.str.custom_font
        fontFamily: Platform.OS =='android' ?R.str.custom_font:R.str.custom_font_for_ios
    }, icon: {
        flex: 1,
        tintColor:color.WHITE
    }
});