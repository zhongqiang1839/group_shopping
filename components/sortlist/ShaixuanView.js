/**
 * Created by KE on 16/3/15.
 */
'use strict';
import React, {
    View,
    StyleSheet,
    Text,
    Image,
    ListView,
    RefreshControl,
    PropTypes,
} from 'react-native';



class ShaixuanView extends React.Component {
    constructor(props) {
        super(props);
        this.renderScoreboard = this.renderScoreboard.bind(this);
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
        return (
            <View>
                <ListView
                    dataSource={this.props.camp.camp_obj.dataSource}
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
})


export default ShaixuanView;
