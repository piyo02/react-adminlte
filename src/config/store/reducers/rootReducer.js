import groupPageReducer from './GroupPageReducer';
import menuDetailPageReducer from './MenuDetailPageReducer';
import userPageReducer from './UserPageReducer';

import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    group: groupPageReducer,
    menuDetail: menuDetailPageReducer,
    user: userPageReducer
})

export default rootReducer;