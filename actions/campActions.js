'use strict';

import * as types from '../constants/ActionTypes';
import {request} from '../utils/RequestUtils';
import * as urls from '../constants/Urls';

export function fetchCampList(isRefreshing,isLoadMore,loading,areaCode,sortType ,sortOrder,pageIndex,seq) {
    var data = {
        "apiVersion" : "t5.01",
        "token":"397307a8a177d58f47c386d37e155b17",
        "body" : {
            "areaCode":areaCode,//四级市代码
            "campSeq":"45027", //行销活动编码
            "sortType":sortType, //排序类型: 0:可卖量,1:销量,2:价格,3:上架时间  默认0
            "sortOrder":0,//排序方向,0:desc(降序),1-asc(升序) 默认0
            "onePageSize":10, //每页多少个,默認10个
            "pageIndex":pageIndex,  //分页页码
            "search_price":{"min":"","max":""},//价格区间
            "filters": [], //品牌列表
            "cate": '', //分类ID
            "is_attribute": 0,
            "is_category": 0,
            "is_activity": 0
        }
    }
    return dispatch => {
        fetch("http://m.feiniu.com/list/queryCamp", {
            method: 'post',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "data=" + encodeURIComponent(JSON.stringify(data)) + "&paramsMD5=397307a8a177d58f47c386d37e155b17"
        })
            .then((response) => response.json())
            .then((responseData) => {
                if (responseData.errorCode == 0) {
                    var activityInfo = responseData.body.activityInfo;
                    dispatch(fetchCamp(responseData.body.MerchandiseList,activityInfo,0));
                } else {
                    alert(responseData.errorDesc);
                }

            })
            .done();
    }
}
export function fetchCampList1(isRefreshing,isLoadMore,loading,areaCode,sortType ,sortOrder,pageIndex,seq) {
    var data = {
        "apiVersion" : "t5.01",
        "token":"397307a8a177d58f47c386d37e155b17",
        "body" : {
            "areaCode":areaCode,//四级市代码
            "campSeq":"45027", //行销活动编码
            "sortType":sortType, //排序类型: 0:可卖量,1:销量,2:价格,3:上架时间  默认0
            "sortOrder":0,//排序方向,0:desc(降序),1-asc(升序) 默认0
            "onePageSize":10, //每页多少个,默認10个
            "pageIndex":1,  //分页页码
            "search_price":{"min":"","max":""},//价格区间
            "filters": [], //品牌列表
            "cate": '', //分类ID
            "is_attribute": 0,
            "is_category": 0,
            "is_activity": 0
        }
    }
    return dispatch => {
        fetch("http://m.feiniu.com/list/queryCamp", {
            method: 'post',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "data=" + encodeURIComponent(JSON.stringify(data)) + "&paramsMD5=397307a8a177d58f47c386d37e155b17"
        })
            .then((response) => response.json())
            .then((responseData) => {
                if (responseData.errorCode == 0) {
                    var activityInfo = responseData.body.activityInfo;
                    dispatch(fetchCamp(responseData.body.MerchandiseList,activityInfo,1));
                } else {
                    alert(responseData.errorDesc);
                }

            })
            .done();
    }
}
export function fetchCampList2(isRefreshing,isLoadMore,loading,areaCode,sortType ,sortOrder,pageIndex,seq) {
    var data = {
        "apiVersion" : "t5.01",
        "token":"397307a8a177d58f47c386d37e155b17",
        "body" : {
            "areaCode":areaCode,//四级市代码
            "campSeq":"45027", //行销活动编码
            "sortType":sortType, //排序类型: 0:可卖量,1:销量,2:价格,3:上架时间  默认0
            "sortOrder":0,//排序方向,0:desc(降序),1-asc(升序) 默认0
            "onePageSize":10, //每页多少个,默認10个
            "pageIndex":1,  //分页页码
            "search_price":{"min":"","max":""},//价格区间
            "filters": [], //品牌列表
            "cate": '', //分类ID
            "is_attribute": 0,
            "is_category": 0,
            "is_activity": 0
        }
    }
    return dispatch => {
        fetch("http://m.feiniu.com/list/queryCamp", {
            method: 'post',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "data=" + encodeURIComponent(JSON.stringify(data)) + "&paramsMD5=397307a8a177d58f47c386d37e155b17"
        })
            .then((response) => response.json())
            .then((responseData) => {
                if (responseData.errorCode == 0) {
                    var activityInfo = responseData.body.activityInfo;
                    dispatch(fetchCamp(responseData.body.MerchandiseList,activityInfo,2));
                } else {
                    alert(responseData.errorDesc);
                }

            })
            .done();
    }
}
export function fetchCampList3(isRefreshing,isLoadMore,loading,areaCode,sortType ,sortOrder,pageIndex,seq) {
    var data = {
        "apiVersion" : "t5.01",
        "token":"397307a8a177d58f47c386d37e155b17",
        "body" : {
            "areaCode":areaCode,//四级市代码
            "campSeq":"45027", //行销活动编码
            "sortType":sortType, //排序类型: 0:可卖量,1:销量,2:价格,3:上架时间  默认0
            "sortOrder":0,//排序方向,0:desc(降序),1-asc(升序) 默认0
            "onePageSize":10, //每页多少个,默認10个
            "pageIndex":1,  //分页页码
            "search_price":{"min":"","max":""},//价格区间
            "filters": [], //品牌列表
            "cate": '', //分类ID
            "is_attribute": 0,
            "is_category": 0,
            "is_activity": 0
        }
    }
    return dispatch => {
        fetch("http://m.feiniu.com/list/queryCamp", {
            method: 'post',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "data=" + encodeURIComponent(JSON.stringify(data)) + "&paramsMD5=397307a8a177d58f47c386d37e155b17"
        })
            .then((response) => response.json())
            .then((responseData) => {
                if (responseData.errorCode == 0) {
                    var activityInfo = responseData.body.activityInfo;
                    dispatch(fetchCamp(responseData.body.MerchandiseList,activityInfo,3));
                } else {
                    alert(responseData.errorDesc);
                }

            })
            .done();
    }
}

function fetchCamp(campList,activityInfo,seq) {
    var type;
    if (seq == 0){
        type = types.QUERY_CAMP_LIST0;
    }else if(seq ==1){
        type = types.QUERY_CAMP_LIST1;
    }else if(seq ==2){
        type = types.QUERY_CAMP_LIST2;
    }else if(seq ==3){
        type = types.QUERY_CAMP_LIST3;
    }
    return {
        loading:true,
        type: type,
        campList: campList,
        activityInfo:activityInfo
    }
}
