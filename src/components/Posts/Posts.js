import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from './Post/Post';
import Post from './Post/Post';
import React from 'react';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts); // called "posts" because that's what we named it in reducers/index.js
    const classes = useStyles();

    console.log(posts);

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId} />
                        </Grid>
                    ))
                }
            </Grid>
        )
    );
}

export default Posts; 