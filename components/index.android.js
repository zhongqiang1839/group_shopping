/**
 * Created by KE on 16/2/29.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';

import React, {
    AppRegistry,
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
    Platform,
    NativeModules,
    ScrollView,
    ActivityIndicatorIOS,
    RefreshControl,
    TouchableOpacity,
} from 'react-native';


import Button from './app/components/Button';          //自定义按钮
import LoadingView from './app/components/LoadingView';//自定义加载中
import ListViewLoadingUntil from './app/utils/ListViewLoadingUntil';//自定义加载中
import FacebookTabBar from './FacebookTabBar';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar, } from 'react-native-scrollable-tab-view';



//var FNBridge = NativeModules.FNBridge;
//FNBridge.getUser("param",(user) => {
//    var user = JSON.parse(user);
//    var token = user.token;
//})

var SORT = {
    ZONGHE_SORT : {
        seq:0,sortType: 0, sortName: "zonghe", name:"综合",isSortOrder: 0, DefaultOrder: 1
    },
    JIAGE_SORT : {
        seq:1,sortType: 2, sortName: "jiage", name:"价格",isSortOrder: 0, DefaultOrder: 1
    },
    XIAOLIANG_SORT : {
        seq:2,sortType: 4, sortName: "xiaoliang", name:"销量",isSortOrder: 0, DefaultOrder: 1
    },
    SAIXUAN_SORT : {
        seq:3,sortType: 0, sortName: 'saixuan', name:"筛选",isSortOrder: 0, DefaultOrder: 1
    }
}

//封装的假数据
var API_URL1 = 'file:///Users/KE/AwesomeProject/app/data/data.json';
var campID = "39999";
var apiVersion = "t5.01";
var shanghaiCode = "CS000016-0-0-0";
var test_url = "http://m.feiniu.com/list/queryCamp";

var feiniu = React.createClass({

    data:[],
    getInitialState: function () {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(this.data),
            loaded: false,    //控制是否显示加载中动画
            activityInfo:{},
            isScroll:false,
            refreshing:false,
            tab: "zonghe",   //控制tab页切换
            sortType:0, //排序类型: 0:可卖量,1:销量,2:价格,3:上架时间  默认0
            sortOrder:0,//排序方向,0:desc(降序),1-asc(升序) 默认0
            pageIndex:1  //分页页码

        };
    },
    componentWillMount: function () {
        this.fetchData();
    },

    fetchData: function () {
        var self = this;
        /**
         * 从分装的 json 中取数据
         */
        //fetch(API_URL1)
        //    .then((response) => response.json())
        //    .then((responseData) => {
        //        self.setState({
        //            dataSource: self.state.dataSource.cloneWithRows(responseData.body.MerchandiseList),
        //            activityInfo:responseData.body.activityInfo,
        //            loaded: true,
        //        });
        //    })
        //    .done();
        //请求数据
        var data = {
            "apiVersion" : apiVersion,
            "token":"6b1435d32d9f737bdc583ef542002dd4",
            "body" : {
                "areaCode":shanghaiCode,//四级市代码
                "campSeq":campID, //行销活动编码
                "sortType":this.state.sortType, //排序类型: 0:可卖量,1:销量,2:价格,3:上架时间  默认0
                "sortOrder":this.state.sortOrder,//排序方向,0:desc(降序),1-asc(升序) 默认0
                "onePageSize":10, //每页多少个,默認10个
                "pageIndex":this.state.pageIndex,  //分页页码
                "search_price":{"min":"","max":""},//价格区间
                "filters": [], //品牌列表
                "cate": '', //分类ID
                "is_attribute": 0,
                "is_category": 0,
                "is_activity": 0
            }
        }
        console.log(data);
        // console.log("data=" + encodeURIComponent(JSON.stringify(data)) + "&paramsMD5=6de251e789180f175aeee5103e5a8a41" );
        /**
         * 从接口取数据
         */
        fetch(test_url, {
            method: 'post',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "data=" + encodeURIComponent(JSON.stringify(data)) + "&paramsMD5=8db96f0bff671eaa3f75927489cb2895"
        })
            .then((response) => response.json())
            .then((responseData) => {
                self.setState({
                    dataSource: self.state.dataSource.cloneWithRows(responseData.body.MerchandiseList),
                    activityInfo:responseData.body.activityInfo,
                    loaded: true,
                    refreshing:false,
                    isScroll : true
                });
            })
            .done();
    },
    changeSelected(value){
        if(value == SORT.ZONGHE_SORT.seq){
            this.state.sortType = SORT.ZONGHE_SORT.sortType;
        }else if(value == SORT.JIAGE_SORT.seq){
            this.state.sortType = SORT.JIAGE_SORT.sortType;
        }else if(value == SORT.XIAOLIANG_SORT.seq){
            this.state.sortType = SORT.XIAOLIANG_SORT.sortType;
        }else {
            return;
        }
        this.fetchData();
    },
    changeTab:function(){
        console.log(this);
    },
    nextPage:function() {
        this.setState({
            refreshing:true
        })

        this.fetchData();
    },
    //渲染整个页面框架
    render: function () {
        var self = this;
        if (!self.state.loaded) {
            return <LoadingView/>;
        }
        return (
            <ScrollView>
                <View role="toolbar" style={{flex: 1}}>
                    <View style={headerStyles.header}>
                        <TouchableOpacity>
                            <Image source={require('./app/images/icon_back.png')} style={{width:30,height:30}}/>
                        </TouchableOpacity>
                        <Text style={headerStyles.headerText}>行销活动聚合页</Text>
                    </View>
                </View>

                <View style={headerStyles.actsm}>
                    <Text style={headerStyles.text}>{this.state.activityInfo.title}</Text>
                </View>
                <View style={headerStyles.descbox}>
                    <Text style={headerStyles.descText}>{this.state.activityInfo.desc}</Text>
                    <Text style={headerStyles.descText}>活动时间：{this.state.activityInfo.startTime} — {this.state.activityInfo.endTime}</Text>
                </View>

                <View style={styles.flexContainer}>
                    <ScrollableTabView style={{marginTop:40}} initialPage={0}
                                       tabBarActiveTextColor="#db384c"
                                       locked='true'
                                       renderTabBar={() => <FacebookTabBar message={this}/>}
                    >
                        <View tabLabel="综合" style={styles.card}>
                            <ListView
                                dataSource={this.state.dataSource}
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
                        <View tabLabel="价格" style={styles.card}>
                            <ListView
                                dataSource={this.state.dataSource}
                                renderRow={this.renderScoreboard}
                                renderFooter = {this.renderFooter}
                                onEndReachedThreshold={100}
                                refreshControl={
                                  <RefreshControl
                                    tintColor="#ccc"
                                    title="数据更新中..."
                                    colors={['#ccc', '#ccc', '#ccc']}
                                    progressBackgroundColor="#ccc"
                                    />
                                }
                                onEndReached={this.nextPage}
                                style={styles.listView}/>
                        </View>
                        <View tabLabel="销量" style={styles.card}>
                            <ListView
                                dataSource={this.state.dataSource}
                                renderRow={this.renderScoreboard}
                                renderFooter = {this.renderFooter}
                                onEndReachedThreshold={100}
                                refreshControl={
                                  <RefreshControl
                                    tintColor="#ccc"
                                    title="数据更新中..."
                                    colors={['#ccc', '#ccc', '#ccc']}
                                    progressBackgroundColor="#ccc"
                                    />
                                }
                                onEndReached={this.nextPage}
                                style={styles.listView}/>
                        </View>
                        <View tabLabel="筛选" style={styles.card}>
                            <ListView
                                dataSource={this.state.dataSource}
                                renderRow={this.renderScoreboard}
                                renderFooter = {this.renderFooter}
                                onEndReachedThreshold={100}
                                onEndReached={this.nextPage}
                                style={styles.listView}/>
                        </View>
                    </ScrollableTabView>
                </View>

            </ScrollView>
        );
    },
    //渲染listView商品列表2132132
    renderScoreboard:function(item) {
        return (
            <View style={styles.container}>
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


});


let headerStyles = StyleSheet.create({
    header: {
        padding: 10, marginTop: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'
    },
    headerText: {
        fontSize: 17,
        flex: 1,
        textAlign: 'center',
        marginRight: 30
    },
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
        padding: 10
    },
    descText: {
        fontSize: 12,
        lineHeight: 16,
    }

})

let styles = StyleSheet.create({
    container: {
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
    header: {
        height: 20,
        backgroundColor: "#CCCCCC"
    },
    name: {
        fontSize: 10,
        marginBottom: 8,
        textAlign: 'left',
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
    active: {
        color: '#db384c'
    },
    cell: {

    },
    welcome: {
        textAlign: 'center',
        fontSize: 12,
    },
    scrollcontainer: {
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    contentContainer: {
        margin: 10,
        backgroundColor: "#ff0000",
    },
    selectColor:{
        color:'#db384c',
    },
    loadedAll:{
        textAlign:'center',
        fontSize:18
    },
    tabView: {
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    card: {
        backgroundColor: '#fff',
        height: 500,
        shadowColor: '#ccc',
        shadowOffset: { width: 2, height: 2, },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    horizontal: {
        marginTop:10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    loadingText: {
        marginTop: 10,
        textAlign: 'center'
    }
});

AppRegistry.registerComponent('feiniu', () => feiniu);
