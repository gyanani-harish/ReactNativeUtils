import React, {Component} from 'react';
import {StyleSheet,  View} from 'react-native';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
import Dimens from '../res/dimens';

export default class BlueProgressBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const context = this;
        return (

            <View style={[styles.progressBar,context.props.style]}>
                 <Bubbles size={Dimens.getDynamicValue(13)} color={this.props.loadingColor?this.props.loadingColor:'#0B58A1'} /> 
             {/*   <Bars size={15} color="#FFF" />
                    <Pulse size={10} color="#FFF" /> 
                    <DoubleBounce size={10} color="#FFF" /> */}
            </View>

        );
    }
}
const styles = StyleSheet.create({
    progressBar:{
        width: '100%',
         height: '100%', 
         alignItems: 'center', 
         justifyContent: 'center', 
         zIndex: 100, 
         position: 'absolute', 
         backgroundColor:'transparent'
    }
});