import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App' // use absolute path using congig in jsconfig.json in root
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

// packages to test components
import {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// executed before each 'it' in this file
let wrapped; // define global so that all 'it' can access it. 
beforeEach(()=>{
    wrapped = shallow(<App />);
})


it('shows a comment box', ()=>{

    // One way to test a component is present inside another one is using reactDOM render
    //const div = document.createElement('div') // JSDOM take care of fake div. This code does not run on browser
    //ReactDOM.render(<App />, div) // render App to this div
    
    // Below is bad code since we are checking inner working of another component
    //expect(div.innerHTML).toContain('Comment Box')
   
    //ReactDOM.unmountComponentAtNode(div) // clean up the test setup. Else degrade performance


    // WE WILL BE INSTEAD USING EZYME PACKAGE

    // shallow will just render the component and not sub components

    
    expect(wrapped.find(CommentBox).length).toEqual(1) // one comment box will be returned.


});

it('shows a comment list', ()=>{
    expect(wrapped.find(CommentList).length).toEqual(1) // one comment box will be returned.
});
//