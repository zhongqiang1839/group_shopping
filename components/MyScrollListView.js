/**
 * Created by KE on 16/3/15.
 */
'use strict';

import React from 'react-native';
const {
    View,
    StyleSheet,
    Image,
    Text,
    ListView,
    ScrollView,
    RefreshControl,
    Platform,
    ProgressBarAndroid,
    ActivityIndicatorIOS,
    PullToRefreshViewAndroid,
    TouchableOpacity,
} = React;

import ScrollableTabView, { DefaultTabBar, ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import {fetchCampList,fetchCampList1,fetchCampList2,fetchCampList3} from '../actions/campActions';



const propTypes = {

}

var sortArr = [
    {
        key:0,sortType: 0, sortName: "zonghe", name:"综合",isSortOrder: 0, DefaultOrder: 1
    },
    {
        key:1,sortType: 2, sortName: "jiage", name:"价格",isSortOrder: 0, DefaultOrder: 1
    },
    {
        key:2,sortType: 4, sortName: "xiaoliang", name:"销量",isSortOrder: 0, DefaultOrder: 1
    },
    {
        key:3,sortType: 0, sortName: 'saixuan', name:"筛选",isSortOrder: 0, DefaultOrder: 1
    }
]

var canLoadMore;
var page = 1;
var categoryid = 0;
var sortType = 0;

class MyScrollListView extends React.Component {
    constructor(props) {
        super(props);
        this.renderScoreboard = this.renderScoreboard.bind(this);
        this.changedTab = this.changedTab.bind(this);
        this.appendPage = this.appendPage.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.scrollto = this.scrollto.bind(this);
        canLoadMore = false;
    }
    scrollto(){
        if (!canLoadMore) {
            canLoadMore = true;
        };
    }

    //下拉或者上拉  拼接数据
    appendPage(){
        if (canLoadMore){
            page ++;
            const {dispatch} = this.props;
            if(categoryid == 0){
                dispatch(fetchCampList(true,false,true,"CS000016-0-0-0",sortType,0,page,0));
            }else if(categoryid ==1){
                dispatch(fetchCampList1(true,false,true,"CS000016-0-0-0",sortType,0,page,1));
            }else if(categoryid ==2){
                dispatch(fetchCampList2(true,false,true,"CS000016-0-0-0",sortType,0,page,2));
            }else if(categoryid ==3) {
                dispatch(fetchCampList3(true,false,true,"CS000016-0-0-0",sortType,0,page,3));
            }
            canLoadMore = false;
        }
    }

    renderFooter() {
        if (this.props.camp.isLoadMore) {
            return (
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <ProgressBarAndroid styleAttr='Inverse' color='#3e9ce9' />
                    <Text style={{textAlign: 'center', fontSize: 16}}>
                        数据加载中……
                    </Text>
                </View>
            );
        }
    }

    changedTab(router){
        const {dispatch} = this.props;
        categoryid = router.i
        setTimeout(function(){
            switch (router.i) {
                case 0:
                    sortType = 0;
                    dispatch(fetchCampList(true,false,true,"CS000016-0-0-0",sortType,0,1,0));
                    break;
                case 1:
                    sortType = 2;
                    dispatch(fetchCampList1(true,false,true,"CS000016-0-0-0",sortType,0,1,1));
                    break;
                case 2:
                    sortType = 4;
                    dispatch(fetchCampList2(true,false,true,"CS000016-0-0-0",sortType,0,1,2));
                    break;
                case 3:
                    sortType = 0;
                    dispatch(fetchCampList3(true,false,true,"CS000016-0-0-0",sortType,0,1,3));
                    break;
            }
        },200)
    }


    //渲染listView商品列表
    renderScoreboard(item) {
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

    render() {
        console.log(this.props.camp.dataSource0);
        return (
            <ScrollableTabView style={{marginTop:10}} initialPage={0}
                               tabBarActiveTextColor="#db384c"
                               tabBarUnderlineColor = "#db384c"
                               locked="true"
                               scrollsToTop={this}
                               onChangeTab = {this.changedTab} >
                <View key={0} tabLabel={"综合"}>
                    <ListView
                        dataSource={this.props.camp.dataSource0}
                        renderRow={this.renderScoreboard}
                        renderFooter={this.renderFooter}
                        onEndReached={this.appendPage}
                        onEndReachedThreshold = {10}
                        onScroll = {this.scrollto}
                        removeClippedSubviews = {true}
                        {...this.props}
                        onRefresh = {this.appendPage}
                        refreshControl={
                            <RefreshControl
                                tintColor="#ccc"
                                title="数据更新中..."
                                colors={['#ccc', '#ccc', '#ccc']}
                                progressBackgroundColor="#ccc"
                                onRefresh = {this.appendPage}

                            />
                        }
                    />
                </View>
                <View key={1} tabLabel={"价格"}>
                    <ListView
                        dataSource={this.props.camp.dataSource1}
                        renderRow={this.renderScoreboard}
                        renderFooter={this.renderFooter}
                        onEndReached={this.appendPage}
                        onEndReachedThreshold = {10}
                        onScroll = {this.scrollto}
                        removeClippedSubviews = {true}
                        {...this.props}
                        onRefresh = {this.appendPage}
                        refreshControl={
                            <RefreshControl
                                tintColor="#ccc"
                                title="数据更新中..."
                                colors={['#ccc', '#ccc', '#ccc']}
                                progressBackgroundColor="#ccc"
                                onRefresh = {this.appendPage}

                            />
                        }
                    />
                </View>
                <View key={2} tabLabel={"销量"}>
                    <ListView
                        dataSource={this.props.camp.dataSource2}
                        renderRow={this.renderScoreboard}
                        renderFooter={this.renderFooter}
                        onEndReached={this.appendPage}
                        onEndReachedThreshold = {10}
                        onScroll = {this.scrollto}
                        removeClippedSubviews = {true}
                        {...this.props}
                        onRefresh = {this.appendPage}
                        refreshControl={
                            <RefreshControl
                                tintColor="#ccc"
                                title="数据更新中..."
                                colors={['#ccc', '#ccc', '#ccc']}
                                progressBackgroundColor="#ccc"
                                onRefresh = {this.appendPage}

                            />
                        }
                    />
                </View>
                <View key={3} tabLabel={"筛选"}>
                    <ListView
                        dataSource={this.props.camp.dataSource3}
                        renderRow={this.renderScoreboard}
                        renderFooter={this.renderFooter}
                        onEndReached={this.appendPage}
                        onEndReachedThreshold = {10}
                        onScroll = {this.scrollto}
                        removeClippedSubviews = {true}
                        {...this.props}
                        onRefresh = {this.appendPage}
                        refreshControl={
                            <RefreshControl
                                tintColor="#ccc"
                                title="数据更新中..."
                                colors={['#ccc', '#ccc', '#ccc']}
                                progressBackgroundColor="#ccc"
                                onRefresh = {this.appendPage}

                            />
                        }
                    />
                </View>

            </ScrollableTabView>
        );
    }
};

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
    appendLoading: {
        flex: 1,
        alignItems: 'center',
        height: 40,
        justifyContent: 'center'
    }
})

MyScrollListView.propTypes = propTypes;

export default MyScrollListView;
