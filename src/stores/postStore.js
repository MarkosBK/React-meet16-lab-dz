import {EventEmitter} from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT="change";
let _posts = [];

class PostStore extends EventEmitter {
    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange(){
        this.emit(CHANGE_EVENT);
    }

    getPosts(){
        return _posts;
    }

}

const postStore = new PostStore();

dispatcher.register(action=>{
    switch(action.actionTypes){
        case actionTypes.GET_POSTS: 
        _posts = action.posts;
        postStore.emitChange();
        break;
        case actionTypes.ADD_POST:
            _posts.push(action.posts);
            postStore.emitChange();
            break;
        default: 
    }
})



export default postStore;