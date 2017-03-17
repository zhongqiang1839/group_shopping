'use strict';

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native';

export default class TabBar extends Component {

    render() {
        var title = this.props.title;
        if (title != null) {
            var itemTitle = (
                <Text style={[styles.title]}>{title}</Text>
            )
        }
        return (
            <TouchableHighlight
                style={styles.cell}
                underlayColor="#B5B5B5"
                onPress={this.props.onPress}>
                <Text>
                    {itemTitle}
                </Text>
            </TouchableHighlight>
        );
    }
}

var styles = StyleSheet.create({
    cell: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderColor: '#d5d5d5',
        height: 20,
    },
});
