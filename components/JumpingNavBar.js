/**
 * Created by KE on 16/3/18.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    ScrollView,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';


import NavBarItem from './NavBarItem';

var _getRandomRoute = function (str) {
    return {
        randNumber: str,
    };
}

var TabArr = [
    {
        key: 0,
        title: '首页',
        sence:'index',
        image:require("../images/icon_bottomtag_home_s.png"),
    },
    {
        key: 1,
        title: '分类',
        sence:'user',
        image: require("../images/icon_bottomtag_market_s.png"),
    },
    {
        key: 2,
        title: '购物车',
        sence:'cart',
        image:require("../images/icon_bottomtag_cart_s.png"),
    },
    {
        key: 3,
        title: '用户中心',
        sence:'user',
        image:require("../images/icon_bottomtag_me_s.png"),
    },
];

class JumpingNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: props.initTabIndex,
        };
    }

    handleWillFocus(route) {
        this.setState({tabIndex:route.key});
    }

    render() {
        return (
            <View style={styles.tabs}>
                <View style={styles.container}>
                    {
                        TabArr.map((tabItem)=> {
                            return (
                                <NavBarItem
                                    key = {tabItem.key}
                                    style={{flex:1}}
                                    underlayColor="#eee"
                                    image={tabItem.image}
                                    title={tabItem.title}
                                    onPress={()=>{
                                        this.props.onTabIndex(tabItem.key);
                                        this.setState({tabIndex:tabItem.key})
                                    }}>
                                    >
                                </NavBarItem>
                            )
                        })
                    }

                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1
    },
    appContainer: {
        //flex: 1,
        overflow: 'hidden',
        backgroundColor: '#dddddd',
    },
    item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabs: {
        //height: 50,
        backgroundColor: '#eee'
    },
    messageText: {
        fontSize: 17,
        fontWeight: '500',
        padding: 15,
        marginTop: 50,
        marginLeft: 15,
    },
    scene: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#EAEAEA',
    },
    welcome: {
        fontSize: 20
    }
});

export default JumpingNavBar;