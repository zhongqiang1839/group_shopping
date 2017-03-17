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
var deviceHieght = Dimensions.get('window').height/3.5;

var IMGS = [
    'http://img05.fn-mart.com/C/web/layout/kk/20160324/201603240849181458780558_kk-1.jpg',
    'http://img05.fn-mart.com/C/web/layout/kk/20160322/201603221438521458628732_kk-1.jpg',
    'http://img02.fn-mart.com/C/web/layout/kk/20160322/201603220954381458611678_kk-1.jpg',
    'http://img04.fn-mart.com/C/web/layout/kk/20160322/201603220947041458611224_kk-1.jpg',
    'http://img01.fn-mart.com/C/web/layout/kk/20160322/201603220946191458611179_kk-1.jpg',
];

var TopScreen = React.createClass({
    getInitialState: function() {
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });

        return {
            dataSource: dataSource.cloneWithPages(IMGS),
        };
    },

    render: function() {
        return (
            <ViewPager
                style={this.props.style}
                dataSource={this.state.dataSource}
                renderPage={this._renderPage}
                isLoop={true}
                autoPlay={true}/>
        );
    },

    _renderPage: function(data: Object, pageID: number) {
        return (
            <Image
                source={{uri: data}}
                style={styles.page} />
        );
    },
});

var styles = StyleSheet.create({
    page: {
        width: deviceWidth,
        height:deviceHieght
    },
});

module.exports = TopScreen;
