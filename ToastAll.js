import React, { Component } from 'react';
import Toast from 'react-native-root-toast';

class ToastAll extends Component {
    constructor() {
        super();
        this.showToast = this.showToast.bind(this);
    }

    static showToast(msg) {
        Toast.show(msg, {
            duration: Toast.durations.SHORT,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            onShow: () => {
                // calls on toast\`s appear animation start
            },
            onShown: () => {
                // calls on toast\`s appear animation end.
            },
            onHide: () => {
                // calls on toast\`s hide animation start.
            },
            onHidden: () => {
                // calls on toast\`s hide animation end.
            }
        });
    }

    render() {
        <View></View>
    }

}
export default ToastAll;