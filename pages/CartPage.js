'use strict';

import React, {
    StyleSheet,
    ScrollView,
    Text,
    PropTypes,
} from 'react-native';

import HeaderView from '../components/Header';

class CartPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }
    render() {
        console.log("<----渲染购物车页----->");
        console.log(this.props);
        return (
            <ScrollView>
                <HeaderView {...this.props} pnav={this.props.pnav} title={"购物车"}/>
            </ScrollView>
        );
    }
}

export default CartPage;