'use strict';
/**
 *  个人中心  reducer
 */
import React, {
    ListView,
} from 'react-native';


import * as types from '../constants/ActionTypes';


var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const initialState = {
	loading: false, //加載中動畫
}

//todo  以后用于扩展 其他的  reducers
export default function user(state = initialState, action) {
    switch (action.type) {
        case types.QUERY_CAMP_LIST:
            return Object.assign({}, state, {
                loading: action.loading,
                dataSource : ds.cloneWithRows(action.campList),
            });
        default:
            return state;
    }
}
