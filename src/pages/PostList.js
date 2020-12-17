import React, {useState, useEffect} from "react";
//import data from "../db.json";
import Posts from "./Posts.js";
import postStore from "../stores/postStore";
import {getPosts} from "../actions/postActions";
export default function PostList(){
    // const [posts, setPosts] = useState([]);
    // useEffect(()=>{
    //     setPosts(data["posts"]);
    //     console.log("Запрос к API/файлу");
    // },
    // []);
    const [posts, setPosts] = useState(postStore.getPosts());
    useEffect(()=>{
        postStore.addChangeListener(onChange);
        if(postStore.getPosts().length===0)
        getPosts();
        return postStore.removeChangeListener(onChange);
    }, []);

    const onChange = ()=>{
        setPosts(postStore.getPosts());
    }
    return <>
    <Posts posts={posts}></Posts>
    </>
}