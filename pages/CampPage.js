'use strict';

import React, {
    StyleSheet,
    ScrollView,
    Text,
    ListView,
    View,
    Image,
    RefreshControl,
    BackAndroid,
    PropTypes,
    Navigator,
} from 'react-native';


import HeaderView from '../components/Header';
import DescriptionView from '../components/DescriptionView';
import MyScrollListView from '../components/MyScrollListView';


import JumpingTabBar from '../components/JumpingTabBar';
import {fetchCampList} from '../actions/campActions';



var TabArr = [
    {
        key: 4,
        title: '综合',
        sence:'zonghe',
        sortType: 0,
    },
    {
        key: 5,
        title: '价格',
        sence:'jiage',
        sortType: 2,
    },
    {
        key: 6,
        title: '销量',
        sence:'xiaoliang',
        sortType: 4,
    },
    {
        key: 7,
        title: '筛选',
        sence:'shaixuan',
        sortType: 0,
    },
];



const propTypes = {
    dispatch: PropTypes.func.isRequired,
    camp: PropTypes.object.isRequired
}

var _navigator;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this._renderScene = this._renderScene.bind(this);
        this.changeTab = this.changeTab.bind(this);
        this.renderScoreboard = this.renderScoreboard.bind(this);
        this.state = {
            zindex: 4,
        };
    }

    //渲染listView商品列表
    renderScoreboard(item) {
        return (
            <View style={styles.containerview}>
                <Image
                    source={{uri: item.sm_pic}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <View style={styles.titleContent}>
                        <Text style={styles.zhisong}>商家直送</Text>
                        <Text style={styles.rank}>{item.sm_name}</Text>
                    </View>

                    <Text style={styles.goal}>满减</Text>
                    <View style={styles.titleContent}>
                        <Text style={styles.price}>&yen;{item.sm_price}</Text>
                        <Text style={styles.disprice}>&yen;{item.it_mprice}</Text>
                    </View>
                </View>
            </View>
        )
    }

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(fetchCampList(true,false,true,"CS000016-0-0-0",0,0,this.props.camp.pageIndex));
    }

    changeTab(index){
        var sortType;
        switch (index) {
            case 1:
                sortType = 2;
                break;
            case 2:
                sortType = 4;
                break;
        }
        const {dispatch} = this.props;
        dispatch(fetchCampList(true,false,true,"CS000016-0-0-0",sortType,0,1));
    }

    _renderScene(route, navigator) {
        _navigator = navigator;
        return (
            <View style={{flex:1,marginTop:50}}>
                <ListView
                    dataSource={this.props.camp.dataSource}
                    renderRow={this.renderScoreboard}
                    renderFooter = {this.renderFooter}
                    onRefresh = {this.changeTab}
                    refreshControl={
                      <RefreshControl
                          tintColor="#ccc"
                          title="数据更新中..."
                          colors={['#ccc', '#ccc', '#ccc']}
                          progressBackgroundColor="#ccc"
                        />
                      }
                    onEndReachedThreshold={100}
                    onEndReached={this.nextPage}
                    style={styles.listView}/>
            </View>
        );
    }

    render() {
        console.log("<--------行销活动聚合 page--------->   <MyScrollListView {...this.props} />");
        return (
            <ScrollView>
                <HeaderView {...this.props} pnav={this.props.pnav} title={"行销活动聚合页"}/>
                <DescriptionView activityInfo={this.props.camp.activityInfo}/>
                <MyScrollListView {...this.props}/>
            </ScrollView>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        height:850
    },
    custombgcolor:{
        backgroundColor:'#fff'
    },
    containerview: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    rightContainer: {
        flex: 1,
        height: 110,
        borderBottomWidth: 1,
        borderColor: '#d5d5d5'
    },
    rank: {
        paddingLeft: 4,
        fontSize: 12,
        textAlign: 'left',
    },
    goal: {
        backgroundColor: '#FF5A00',
        fontSize: 12,
        color: '#fff',
        paddingVertical: 2,
        paddingHorizontal: 3,
        borderRadius: 2,
        width: 30,
        textAlign: 'center',
        marginLeft: 5,
    },
    pricebox: {
        marginTop: 6,
        flexDirection: 'row',
    },
    price: {
        color: '#DB384C',
        fontSize: 20,
        alignSelf: 'center'
    },
    disprice: {
        color: '#999',
        fontSize: 22,
        alignSelf: 'flex-end',
        marginLeft: 6
    },
    titleContent: {
        padding: 5,
        flexDirection: 'row',
    },
    zhisong: {
        backgroundColor: '#c75294',
        fontSize: 12,
        color: '#fff',
        paddingVertical: 2,
        paddingHorizontal: 3,
        borderRadius: 2,
        textAlign: 'center'
    },
    thumbnail: {
        width: 110,
        height: 110
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
    flexContainer: {
        // 容器需要添加direction才能变成让子元素flex
        paddingLeft:10,
        paddingRight:10
    },
})


Main.propTypes = propTypes;
export default Main;