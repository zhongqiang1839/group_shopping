/**
 * Created by KE on 16/2/25.
 */
/**
 * React Native News App
 * https://github.com/tabalt/ReactNativeNews
 */
'use strict';

var React = require('react-native');

var {
    StyleSheet,
    Text,
    View,
    } = React;

var LoadingView = React.createClass({

    render : function() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading...
                </Text>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color : '#bababa',
        backgroundColor : '#ffffff',
        fontSize : 12,
    }
});

module.exports = LoadingView;