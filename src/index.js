import React from 'react';
import ReactDOM from 'react-dom'
import App from 'components/App'; // absolute path .. jsconfig.json in root
import Root from 'Root'
import { BrowserRouter, Route} from 'react-router-dom'

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Root>, 
    document.querySelector('#root') 
);