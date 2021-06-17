import React from 'react';
import Post from './Post/Post';
import useStyles from './Post/Post';
import { useSelector } from 'react-redux';

const Posts = () => {
    const posts = useSelector((state) => state.posts); // called "posts" because that's what we named it in reducers/index.js
    const classes = useStyles();

    console.log(posts);

    return (
        <>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </>
    )
}

export default Posts;