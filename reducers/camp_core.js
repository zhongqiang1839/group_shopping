/***
 * 行销活动 reducer
 */

'use strict';

import React, {
    ListView,
} from 'react-native';


import * as types from '../constants/ActionTypes';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const initialState = {
    loading: false, //加載中動畫
    isRefreshing:false,
    isLoadMore:false,
    dataSource0: ds.cloneWithRows([]),//数据源 listview
    dataSource1: ds.cloneWithRows([]),//数据源 listview
    dataSource2: ds.cloneWithRows([]),//数据源 listview
    dataSource3: ds.cloneWithRows([]),//数据源 listview
    activityInfo:{},
    sortType:0,     //排序类型: 0:可卖量,1:销量,2:价格,3:上架时间  默认0
    sortOrder:0,    //排序方向,0:desc(降序),1-asc(升序) 默认0
    pageIndex:1     //分页页码
}

export default function camp(state = initialState, action) {
    switch (action.type) {
        case types.QUERY_CAMP_LIST0:
            return Object.assign({}, state, {
                loading:action.loading,
                dataSource0:ds.cloneWithRows(action.campList),
                activityInfo:action.activityInfo,
            });
        case types.QUERY_CAMP_LIST1:
            return Object.assign({}, state, {
                loading:action.loading,
                dataSource1 : ds.cloneWithRows(action.campList),
                activityInfo:action.activityInfo,
            });
        case types.QUERY_CAMP_LIST2:
            return Object.assign({}, state, {
                loading:action.loading,
                dataSource2 : ds.cloneWithRows(action.campList),
                activityInfo:action.activityInfo,
            });
        case types.QUERY_CAMP_LIST3:
            return Object.assign({}, state, {
                loading:action.loading,
                dataSource3 : ds.cloneWithRows(action.campList),
                activityInfo:action.activityInfo,
            });
        default:
            return state;
    }
}

