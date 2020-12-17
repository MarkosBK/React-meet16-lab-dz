import React, { useState } from "react";
import {addPost} from "../actions/postActions"
export default function AddPost() {
    const [id, setId] = useState(1);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        addPost({id, title, author, text});
        //
    }
    const handleChange = e => {
        switch (e.target.name) {
            case "id":
                setId(e.target.value);
                break;
            case "title":
                setTitle(e.target.value);
                break;
            case "author":
                setAuthor(e.target.value);
                break;
            case "text":
                setText(e.target.value);
                break;
            default:
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Id</label>
                <input type="number" value={id} onChange={handleChange} className="form-control" name="id"></input>
            </div>
            <div className="form-group">
                <label>Title</label>
                <input type="text" value={title} onChange={handleChange} className="form-control" name="title"></input>
            </div>
            <div className="form-group">
                <label>Author</label>
                <input type="text" value={author} onChange={handleChange} className="form-control" name="author"></input>
            </div>
            <div className="form-group">
                <label>Text</label>
                <input type="text" value={text} onChange={handleChange} className="form-control" name="text"></input>
            </div>
            <input type="submit" className="btn btn-primary"></input>
        </form>
    )
}