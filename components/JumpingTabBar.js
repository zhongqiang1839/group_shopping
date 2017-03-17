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


import TabBarItem from './TabBarItem';

var TabArr = [
    {
        key: 0,
        title: '综合',
        sence:'zonghe',
        sortType: 0,
    },
    {
        key: 1,
        title: '价格',
        sence:'jiage',
        sortType: 2,
    },
    {
        key: 2,
        title: '销量',
        sence:'xiaoliang',
        sortType: 4,
    },
    {
        key: 3,
        title: '筛选',
        sence:'shaixuan',
        sortType: 0,
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
                <View style={styles.container}>
                    {
                        TabArr.map((tabItem)=> {
                            return (
                                <TabBarItem
                                    key = {tabItem.key}
                                    style={{flex:1}}
                                    underlayColor="#eee"
                                    title={tabItem.title}
                                    onPress={()=>{
                                        this.props.onTabIndex(tabItem.key);
                                        this.setState({tabIndex:tabItem.key})
                                    }}>
                                    >
                                </TabBarItem>
                            )
                        })
                    }
                </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        position:'relative',
        top:-810

    },
});

export default JumpingNavBar;