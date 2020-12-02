import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'actions/types';
import axios from 'axios'


export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload:comment
    }
}

export function fetchComments() {
    const response = axios.get('http://jsonplaceholder.typicode.com/comments')

    // redux promise middle ware took care of stopping dispatch until promise is resolved.

    return  {
        type : FETCH_COMMENTS,
        payload:response
    };
};

export function changeAuth(isLoggedIn){

    return {
        type:CHANGE_AUTH,
        payload: isLoggedIn
    }
}