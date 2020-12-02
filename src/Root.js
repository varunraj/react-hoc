// we move creation of store and provider here so that so we can reuse in testing file
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from 'reducers'
import reduxPromise from 'redux-promise'


// initial state is passed only by comments list test file. For othe cases it is defaulted to empty object

export default ({children, initialState={}})=> {
    
    const store = createStore(reducers, initialState, applyMiddleware(reduxPromise));
    
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
};