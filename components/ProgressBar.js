import React, {Component} from 'react';
import {StyleSheet,  View} from 'react-native';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';

export default class ProgressBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const context = this;
        return (
            <View style={styles.progressBar}>
                 <Bubbles   size={10} color="#FFF" /> 
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
         zIndex: 1, 
         position: 'absolute' 
         
    }
});