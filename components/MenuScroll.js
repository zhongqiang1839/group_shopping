/**
 * Created by KE on 16/3/24.
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
} = React;

var ViewPager = require('react-native-viewpager');
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

var IMGS = [
    {
        "0":[
            {"url":"http://img01.fn-mart.com/C/web/layout/kk/20160214/201602141553231455436403_kk-1.png","title":"环球购"},
            {"url":"http://img03.fn-mart.com/C/web/layout/kk/20160214/201602141553311455436411_kk-1.png","title":"飞牛山城"},
            {"url":"http://img05.fn-mart.com/C/web/layout/kk/20160214/201602141553361455436416_kk-1.png","title":"生鲜"},
            {"url":"http://img01.fn-mart.com/C/web/layout/kk/20160214/201602141553411455436421_kk-1.png","title":"母婴"},
            {"url":"http://img04.fn-mart.com/C/web/layout/kk/20160405/201604051203211459829001_kk-1.png","title":"积分商城"},
            {"url":"http://img06.fn-mart.com/C/web/layout/kk/20160214/201602141553521455436432_kk-1.png","title":"卡券充值"},
            {"url":"http://img01.fn-mart.com/C/web/layout/kk/20160214/201602141554161455436456_kk-1.png","title":"签到送积分"},
            {"url":"http://img03.fn-mart.com/C/web/layout/kk/20160214/201602141554241455436464_kk-1.png","title":"曾经购买"},
        ]
    },
    {
        "1":[
            {"url":"http://img01.fn-mart.com/C/web/layout/kk/20160214/201602141553231455436403_kk-1.png","title":"进口"},
            {"url":"http://img01.fn-mart.com/C/web/layout/kk/20160214/201602141553231455436403_kk-1.png","title":"团购"},
            {"url":"http://img01.fn-mart.com/C/web/layout/kk/20160214/201602141553231455436403_kk-1.png","title":"秒杀"},
            {"url":"http://img01.fn-mart.com/C/web/layout/kk/20160214/201602141553231455436403_kk-1.png","title":"商品分类"},
            {"url":"http://img01.fn-mart.com/C/web/layout/kk/20160214/201602141553231455436403_kk-1.png","title":"查订单"},
            {"url":"http://img01.fn-mart.com/C/web/layout/kk/20160214/201602141553231455436403_kk-1.png","title":"购物车"},
            {"url":"http://img01.fn-mart.com/C/web/layout/kk/20160214/201602141553231455436403_kk-1.png","title":"我的收藏"},
            {"url":"http://img01.fn-mart.com/C/web/layout/kk/20160214/201602141553231455436403_kk-1.png","title":"我的飞牛"},
        ]
    }
];

var TopScreen = React.createClass({
    getInitialState: function() {
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });

        return {
            dataSource: dataSource.cloneWithPages(IMGS),
        }
    },

    render: function() {
        return (
            <ViewPager
                style={styles.container}
                dataSource={this.state.dataSource}
                renderPage={this._renderPage}
                loop = {true}
            />
        );
    },

    _renderPage: function(data: Object, pageID: number) {
        return (
            <View style={styles.sliderBox}>
                {
                    data[pageID].map((tabItem)=> {
                        return (
                            <View style={styles.item}>
                                <Image
                                    source={{uri: tabItem.url}}
                                    style={styles.img} />
                                <Text style={styles.text}>{tabItem.title}</Text>
                            </View>
                        )
                    })
                }
            </View>
        );
    },
});

var styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
    },
    sliderBox:{
        flexDirection:"row",
        flexWrap:"wrap",
        height:190,
        width:deviceWidth,
    },
    item:{
        backgroundColor:"#fff",
        width:deviceWidth/4,
        height:85,
        alignItems: 'center',
    },
    img:{
        width:50,
        height: 50,
        resizeMode: Image.resizeMode.stretch,
        marginVertical:10
    },
    text:{
        color:"#333"
    },
    page: {
        width: deviceWidth,
        height:deviceHeight
    },
});

module.exports = TopScreen;
