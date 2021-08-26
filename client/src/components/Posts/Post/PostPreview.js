import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Post from './Post';
import Ask from '../../Forms/Ask/Ask';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Posts from '../Posts';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        margin: theme.spacing(2)
        // color: theme.palette.text.secondary,
    },
    title: {
        fontWeight:"bold",
        margin: theme.spacing(1)
    },
}));
// const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
const PostPreview = (props) => {
    const classes = useStyles();
    const { state } = props;
    let { path, url } = useRouteMatch();
    console.log(path,url)
    console.log("datadsffff",state)
    return (
        <Grid spacing={3} item xs={8}>
            <Paper className={classes.paper}>
                <Typography className={classes.title} variant="h5">
                    {state.title}
                </Typography>
                <hr></hr>
                <Typography variant="body1">
                    {state.body.substring(0,1000)}
                </Typography>
                <Link to={`posts/${state._id}`} onClick={e=>console.log(`${state.title}`)}>
                    <p>Read more</p>
                </Link>
            </Paper>
        </Grid>

    );
}

export default PostPreview;