import actionTypes from "../actions/actionTypes";
import appDispatcher from "../appDispatcher";
import data from "../db.json";

export function getPosts(){
    appDispatcher.dispatch({
        actionTypes: actionTypes.GET_POSTS,
        posts: data["posts"]
    })
}

export function addPost(post){
    appDispatcher.dispatch({
        actionTypes: actionTypes.ADD_POST,
        posts: post
    })
}