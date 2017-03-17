/**
 * Created by KE on 16/3/15.
 */
'use strict';
import React, {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    NativeModules,
    PropTypes,
} from 'react-native';


import {isEmptyObject} from '../utils/CommonUtils';

const propTypes = {
    activityInfo: PropTypes.object.isRequired
}


class DescriptionView extends React.Component {
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    onPress(){
        NativeModules.RNViewController.processString('http://i.imgur.com/XMKOH81.jpg', (text,a,b) => {
            alert(text+a+b);
        });
    }
    onPress1(){
        NativeModules.FNBridge.nativeTransition('www2fn://OpenPage?id=4', (isSuccess) => {
            alert(isSuccess);
        });
    }
    onPress2(){
        NativeModules.FNBridge.nativeUserInfo((error,data) => {
            alert(data);
        });
    }

    render() {
        return (
            <View>
                <View style={headerStyles.actsm}>
                    <TouchableOpacity
                        style={{borderWidth:2,borderColor:"yellow",height:28,widget:280,borderRadius:5,alignItems:'center'}}
                        onPress={this.onPress}
                    >
                        <Text>调用native接口 button</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{borderWidth:2,borderColor:"yellow",height:28,widget:280,borderRadius:5,alignItems:'center'}}
                        onPress={this.onPress1}
                    >
                        <Text>调用native接口  nativeTransition button</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{borderWidth:2,borderColor:"yellow",height:28,widget:280,borderRadius:5,alignItems:'center'}}
                        onPress={this.onPress2}
                    >
                        <Text>调用native接口 nativeUserInfo button</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

let headerStyles = StyleSheet.create({
    actsm: {
        padding: 16,
        backgroundColor: '#db384c',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontWeight: 'normal'
    },
    descbox: {
        padding: 10,
        borderBottomWidth:1,
        borderColor:'#eee',
        paddingBottom:30,
        paddingHorizontal:20
    },
    descText: {
        fontSize: 14,
        lineHeight: 16,
    }
})

DescriptionView.propTypes = propTypes;

export default DescriptionView;
