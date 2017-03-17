/**
 * Created by KE on 16/3/16.
 */


import React, {
    StyleSheet,
    ScrollView,
    Text,
    NavigatorIOS,
    BackAndroid,
    PropTypes,
    View,
    TouchableOpacity,
    Navigator
} from 'react-native';


var TabArr = [
    {
        key: 0,
        title: '首页',
        sence:'index',
        icon: 'ios-list-outline',
        selectedIcon: 'ios-list',
    },
    {
        key: 1,
        title: '购物车',
        sence:'cart',
        icon: 'ios-paper-outline',
        selectedIcon: 'ios-paper',
    },
    {
        key: 2,
        title: '用户中心',
        sence:'user',
        icon: 'ios-paper-paperplane',
        selectedIcon: 'ios-paper',
    },
];

class TabBar extends React.Component {
    constructor(props) {
        super(props);
        this.selectTabItem = this.selectTabItem.bind(this);
    }

    selectTabItem(tabItem){
        console.log(this.props);
        if(this.props.index !== tabItem.key){
            if(tabItem.key === 0) {
                this.props.navigator.pop();
            } else {
                this.props.navigator.push(TabArr[tabItem.key]);
            }
            this.props.index = tabItem.key;
        }
    }

    render() {
        return (
            <View style={styles.tabbar}>
                {
                    TabArr.map((tabItem)=> {
                        return (
                            <TouchableOpacity
                                activeOpacity={1}
                                style={styles.tabitem}
                                key={tabItem.key}

                                configureScene={() => ({
                                    ...Navigator.SceneConfigs.HorizontalSwipeJump,
                                })}
                                onPress={()=>{
                                    this.selectTabItem(tabItem);
                                }}
                            >
                                <View>
                                    <Text style={styles.tabtext}>{tabItem.title}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabbar: {
        backgroundColor: '#fff',
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        height: 55,
        flexDirection: 'row',
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0,
    },
    tabitem: {
        flex: 1,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabtext: {
        textAlign: 'center',
        fontSize: 12,
    }

});


export default TabBar;