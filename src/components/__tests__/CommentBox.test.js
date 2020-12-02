import React from 'react';
import CommentBox from 'components/CommentBox';
import { mount } from 'enzyme' // this will do full dom rendering
import Root from 'Root' // privder and store is setup here


let wrapped;

beforeEach(()=>{
    wrapped = mount(  // full render instead of shallow
        <Root>
            <CommentBox />
        </Root>
    ); 
})

afterEach(()=>{
    // unmount the component from jsdom 
    wrapped.unmount();
})

it('Has a text area and two buttons', ()=>{
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
    
});

// descrive is used to group together a tests that have similar set ups 
describe('the text area', ()=>{ 

    beforeEach(()=>{
         // simulate method will recreate the event
         wrapped.find('textarea').simulate('change', {
            target:{value:'new comment'} // this will be passed to event handler as event.target.value
        })
        wrapped.update() // this will rerender the component so that text area have new value
    })    

    it('has a text area that user can type text in', ()=>{
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });
    
    it('text areas is cleared when form is submitted',()=>{
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
        wrapped.find('form').simulate('submit')
        wrapped.update() // this will rerender the component so that text area have new value
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
    
})

