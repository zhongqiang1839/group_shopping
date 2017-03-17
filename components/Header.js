/**
 * Created by KE on 16/3/15.
 */
'use strict';

import React, {
    View,
    StyleSheet,
    Image,
    Text,
    Platform,
    PropTypes,
    BackAndroid,
    TouchableOpacity,
} from 'react-native';


import {NaviGoBack} from '../utils/CommonUtils';

class HeaderView extends React.Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
        BackAndroid.addEventListener('hardwareBackPress', this.goBack);
    }
    goBack() {
        return NaviGoBack(this.props.pnav);
    }
    render() {
        return (
            <View role="toolbar" style={{flex: 1}}>
                <View style={headerStyles.header}>
                    <TouchableOpacity onPress={() => this.goBack()}>
                        <Image source={require('../images/icon_back.png')} style={{width:30,height:30}}/>
                    </TouchableOpacity>
                    <Text style={headerStyles.headerText}>{this.props.title}</Text>
                </View>
            </View>
        );
    }
};

let headerStyles = StyleSheet.create({
    header: {
        padding: 10,
        marginTop: Platform.OS == "android" ? 0 : 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth:1,
        borderBottomColor:'#eee',
    },
    headerText: {
        fontSize: 18,
        flex: 1,
        textAlign: 'center',
        marginRight: 30
    },
})


export default HeaderView;
