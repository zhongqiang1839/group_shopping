'use strict';

import React, {
    StyleSheet,
    ScrollView,
    Text,
    NavigatorIOS,
    BackAndroid,
    PropTypes,
    View,
    Component,
    TouchableOpacity,
    Navigator
} from 'react-native';

import {connect} from 'react-redux';
import {NaviGoBack} from '../utils/CommonUtils';

import CartPage from '../pages/CartPage';
import CampPage from '../pages/CampPage';
import AccountPage from '../pages/AccountPage';
import CategoryPage from '../pages/CategoryPage';

import JumpingNavBar from '../components/JumpingNavBar';


var TabArr = [
    {
        key: 0,
        title: '首页',
        sence:'index',
        image:'../images/icon_bottomtag_home_n.png',
    },
    {
        key: 1,
        title: '分类',
        sence:'user',
        image:'../images/icon_bottomtag_home_n.png',
    },
    {
        key: 2,
        title: '购物车',
        sence:'cart',
        image:'../images/icon_bottomtag_home_n.png',
    },
    {
        key: 3,
        title: '用户中心',
        sence:'user',
        image:'../images/icon_bottomtag_home_n.png',
    },
];

var _navigator;

class MainContainer extends Component {

    constructor(props) {
        super(props);
        this._renderScene = this._renderScene.bind(this);
        BackAndroid.addEventListener('hardwareBackPress', NaviGoBack(_navigator));
    }


    configureScene() {
        return Navigator.SceneConfigs.PushFromRight;
    }

    _renderScene(route, navigator) {
        console.log(this.props);
        _navigator = navigator;
        switch (route.key) {
            case 0:
                return <CategoryPage  {...this.props} route={route} pnav={navigator} />;
                break;
            case 1:
                return <CampPage {...this.props} route={route} pnav={navigator} />;
                break;
            case 2:
                return <CartPage {...this.props} route={route} pnav={navigator} />;
                break;
            case 3:
                return <AccountPage {...this.props} route={route} pnav={navigator} />;
                break;
        }
    }

    componentDidMount() {

    }
    render() {
        console.log("<-------渲染導航Navigator組件-------->參數");
        return (
            <Navigator
                style={styles.container}
                initialRoute={TabArr[0]}
                initialRouteStack={TabArr}
                ref={(navigator) => {
                  this._navigator = navigator;
                }}
                renderScene={this._renderScene}
                sceneStyle={styles.custombgcolor}
                navigationBar={
                    <JumpingNavBar
                        initTabIndex={TabArr[0].key}
                        routeStack={TabArr}
                        onTabIndex={(index) => {
                          this._navigator.jumpTo(TabArr[index]);
                        }}
                    />
                }

            />

        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    custombgcolor:{
        backgroundColor:'#fff'
    },
});


function mapStateToProps(state) {
    const {camp} = state;
    return {
        camp
    }
}

export default connect(mapStateToProps)(MainContainer);
