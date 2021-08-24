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
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
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
        <Grid item xs={8}>
            <Paper className={classes.paper}>
                <Typography variant="h6">
                    {state.title}
                </Typography>
                <Typography variant="body1">
                    {state.body}
                </Typography>
                <Link to={`posts/${state._id}`} onClick={e=>console.log(`${state.title}`)}>
                    <p>Read more</p>
                </Link>
            </Paper>
        </Grid>

    );
}

export default PostPreview;