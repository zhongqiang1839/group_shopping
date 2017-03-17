/**
 * Created by KE on 16/3/9.
 */
'use strict';

import React, {
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Animated,
} from 'react-native';


var styles = StyleSheet.create({
    tab: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
    },
    tabs: {
        height: 40,
        flexDirection: 'row',
        borderColor:'#ccc'

    },
    icon: {
        position: 'absolute',
        top: 0,
        left: 30,
    },
});

var FacebookTabBar = React.createClass({
    selectedTabIcons: [],
    unselectedTabIcons: [],

    propTypes: {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array
    },

    fetchData:function(page){
        if(page == 3) return;
        var aa = this.props;
        this.props.message.changeSelected(page,function(){

        });

        aa.goToPage(page);

        //if(this.props.message.state.isScorll){
        //    this.props.goToPage(page);
        //}
        //this.props.goToPage(page);
    },
    renderTabOption(name, page) {
        var isTabActive = this.props.activeTab === page;
        var activeTextColor = this.props.activeTextColor;
        var inactiveTextColor = this.props.inactiveTextColor || "#ccc";

        return (
            <TouchableOpacity key={name} onPress={() => this.fetchData(page)} style={styles.tab}>
                <Text name={name} size={30} color='#ccc' style={[styles.icon,{color: isTabActive ? activeTextColor : inactiveTextColor}]} >{name}</Text>
            </TouchableOpacity>
        );
    },

    componentDidMount() {
        this.setAnimationValue({value: this.props.activeTab});
        this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
    },

    setAnimationValue({value}) {
        var currentPage = this.props.activeTab;

        this.unselectedTabIcons.forEach((icon, i) => {
            var iconRef = icon;

            if (!icon.setNativeProps && icon !== null) {
                iconRef = icon.refs.icon_image
            }

            if (value - i >= 0 && value - i <= 1) {
                iconRef.setNativeProps({ style: {opacity: value - i} });
            }
            if (i - value >= 0 &&  i - value <= 1) {
                iconRef.setNativeProps({ style: {opacity: i - value} });
            }
        });
    },

    render() {
        var containerWidth = this.props.containerWidth;
        var numberOfTabs = this.props.tabs.length;
        var tabUnderlineStyle = {
            position: 'absolute',
            width: containerWidth / numberOfTabs,
            height: 0,
            backgroundColor: '#ccc',
            bottom: 0,
        };

        var left = this.props.scrollValue.interpolate({
            inputRange: [0, 1], outputRange: [0, containerWidth / numberOfTabs]
        });

        return (
            <View>
                <View style={[styles.tabs, this.props.style, ]}>
                    {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
                </View>
                <Animated.View style={[tabUnderlineStyle, {left}]} />
            </View>
        );
    },
});

module.exports = FacebookTabBar;