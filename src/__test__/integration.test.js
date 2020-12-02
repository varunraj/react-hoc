import React from 'react'
import { mount } from 'enzyme'
import Root from 'Root'
import App from 'components/App'
import moxios from 'moxios'

// jsdom cannot make api calls using axios. So we need to intercept and stop it using moxios
// then moxios will send back a fake data 

beforeEach(()=>{
    moxios.install(); // moxios intercept calls from axios and stop them 
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', { // intercept this request
        status:200,
        response:[ // data send back to axios
            {name:'fetch#1'},
            {name:'fetch#2'},
        ]   
    }); 
})

afterEach(()=>{
    moxios.uninstall();
})


it('can  fetch a list of comments and display them' ,(done)=>{

    // Attempt to render the entire app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )
    //find the fetchComments button and click it
    wrapped.find('.fetch-comments').simulate('click')


    // pause for second for req to complete before checking expect
    // Expect to find a list of comments

    setTimeout(()=>{
        wrapped.update()
        expect(wrapped.find('li').length).toEqual(2);
        done() // we need to call done for jest to know that test is completed only after setTimeOut
        wrapped.unmount();
    },500)
        

});

