import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import name from './name/nameStore';
import user from './user/userStore';

const combinedReducers = combineReducers({
    name, 
    user
})


// second param is for redux dev tool
const store = createStore(combinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// provider: from react-redux, to integrate react and redux, HOC
const StoreProvider = ({ children }) => {
    return <Provider store={store}> {children} </Provider>;
}

export { StoreProvider }