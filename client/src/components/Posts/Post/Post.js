import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

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
const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
const Post = ({match}) => {
    const classes = useStyles();
    console.log(match)
    const {postId} = match.params
    return (
            <Grid item xs={12} fullWidth container justifyContent="center">
                <Paper className={classes.paper}>
                    <Typography variant="h6">
                    </Typography>
                    <Typography variant="body1">
                        {postId}
                        <hr></hr>
                        {lorem}
                    </Typography>
                </Paper>
            </Grid>

    );
}

export default Post;