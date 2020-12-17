import React from "react";
import {NavLink} from "react-router-dom";

export default function NavMenu(){
    let active= {color: "red"};
    return (
        <nav className="navbar navbar-light bg-light">
        <NavLink to="/" activeStyle={active}>Main</NavLink>
        <NavLink to="/add" activeStyle={active}>New Post</NavLink>
        <NavLink to="/posts" activeStyle={active}>Posts</NavLink>
    </nav>
    )
}