'use strict';

import React, {
    StyleSheet,
    ScrollView,
    Text,
    Image,
    TouchableOpacity,
    Platform,
    View,
    TextInput,
    Dimensions,
    PropTypes,
} from 'react-native';

var deviceWidth = Dimensions.get('window').width;

class AccountPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }
    render() {
        return (
            <ScrollView>

            </ScrollView>
        );
    }
}


let styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: Platform.OS == "android" ? 0 : 20,
    },
    titleNav:{
        width:deviceWidth,
        height:300,
        borderWidth:1,

    }
})
export default AccountPage;