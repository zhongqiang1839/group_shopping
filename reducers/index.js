'use strict';

import {combineReducers} from 'redux';
import camp from './camp_core';
import user from './userinfo';

const rootReducer = combineReducers({
	camp,
    user
})

export default rootReducer;