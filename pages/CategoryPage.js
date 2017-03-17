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

import TopScroll from '../components/TopScroll';
import MenuScroll from '../components/MenuScroll';

var deviceWidth = Dimensions.get('window').width;


class AccountPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <SearchBar />
                <TopScroll />
                <MenuScroll />
                <View style={styles.custom}>
                    <View style={styles.hr}>

                    </View>
                    <View style={styles.customTitle}>
                        <Text style={styles.customText}>特色频道</Text>
                    </View>
                    <View style={styles.customImg}>
                        <Image
                            style={styles.leftContain}
                            source={{uri:'http://img02.fn-mart.com/C/web/layout/kk/20160310/201603101618391457597919_kk-1.jpg'}}
                        />
                        <View style={styles.rightContain}>
                            <Image
                                style={styles.img}
                                source={{uri:'http://img05.fn-mart.com/C/web/layout/kk/20160405/201604051200531459828853_kk-1.jpg'}} />
                            <Image
                                style={styles.img}
                                source={{uri:'http://img02.fn-mart.com/C/web/layout/kk/20160311/201603111100241457665224_kk-1.jpg'}} />
                        </View>
                    </View>
                    <View style={styles.customImg}>
                        <Image
                            style={styles.leftContainimg}
                            source = {{uri:'http://img03.fn-mart.com/C/web/layout/kk/20160401/201604011902011459508521_kk-1.jpg'}}
                        />
                        <Image
                            style={styles.rightContainimg}
                            source = {{uri:'http://img01.fn-mart.com/C/web/layout/kk/20160401/201604011902321459508552_kk-1.jpg'}}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}


class SearchBar extends React.Component {
    render() {
        return (
            <View style={styles.searchBar}>
                <TouchableOpacity>
                    <Image
                        source={{uri:'http://static01.m.fn-mart.com/static/img/logo_white.png?v=2016040517'}}
                        style={{width:100,height:25,marginRight:8,resizeMode: Image.resizeMode.stretch,}}
                    />
                </TouchableOpacity>
                <View style={styles.searchInput}>
                    <Image source={require('../images/icon_search.png')} style={{width:15,height:15,marginRight:8}}/>
                    <Text
                        style={{color:'#14BA91',fontSize:13}}
                        value="大米"
                    />
                </View>
                <Text>上海</Text>
            </View>
        );
    }
}


let styles = StyleSheet.create({
    container:{
    },
    nav_broadcast_hot:{
        flexDirection:"row",
        alignItems: 'center',
        backgroundColor:"#fff",
        height:60,
        marginTop:20,

    },
    broadcastimg:{
        width:80,
        height:60,
        resizeMode: Image.resizeMode.stretch,
    },
    broadcast_text:{
        color:"#db384c",
        fontSize:20,
        paddingLeft:20
    },
    custom:{
        backgroundColor:"#fff",
    },
    customTitle:{
        height:40,
        justifyContent:'center',
        paddingLeft:10,
    },
    customText:{
        fontSize:16,
        fontWeight:'bold',
    },
    customImg:{
        flexDirection:"row",
    },
    leftContain:{
        width: deviceWidth/2 - 30 ,
        height:240,
        resizeMode: Image.resizeMode.stretch,
        borderWidth:1,
        borderColor:"#eee",
    },
    rightContain:{
        width: deviceWidth/2 + 30,
        height:240,
    },
    img:{
        height:120,
        resizeMode: Image.resizeMode.stretch,
        width: deviceWidth/2 + 30,
        borderWidth:1,
        borderColor:"#eee"
    },
    leftContainimg:{
        width: deviceWidth/2 - 30 ,
        height:120,
        resizeMode: Image.resizeMode.stretch,
        borderWidth:1,
        borderColor:"#eee",
    },
    rightContainimg:{
        width: deviceWidth/2 + 30,
        resizeMode: Image.resizeMode.stretch,
        height:120,
        borderWidth:1,
        borderColor:"#eee",
    },
    hr:{
        height:10,
        backgroundColor:"#eee",
        flex:1
    },
    searchBar: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Platform.OS == "android" ? 0 : 20,
        display:'fixed',
        backgroundColor: '#FD728E',
        zIndex:9999,
    },
    headerBody: {
        padding: 20,
        marginBottom: 15,
        flexDirection: 'row'
    },
    searchInput: {
        borderRadius: 15,
        backgroundColor: '#FFF',
        paddingTop: 7,
        paddingBottom: 7,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },

})
export default AccountPage;