import React from 'react'

import useStyles from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Ask from '../Forms/Ask/Ask';
import Posts from '../Posts/Posts';
import Post from '../Posts/Post/Post';

export default function Header() {
    const classes = useStyles();

    return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />

                        </IconButton>

                        <Typography variant="h6" className={classes.title}>
                            <Link to="/"  style={{ textDecoration: 'none', color: 'white' }}>
                                Home
                            </Link>
                        </Typography>

                        
                        <Button color="inherit" >
                            <Link to="/users"  style={{ textDecoration: 'none', color:'white' }}>
                                User list
                            </Link>
                        </Button>

                        <Button color="inherit" >
                            <Link to="/ask"  style={{ textDecoration: 'none', color:'white' }}>
                                Ask
                            </Link>
                        </Button>
                        
                        <Button color="inherit" >
                            <Link to="/login"  style={{ textDecoration: 'none', color:'white' }}>
                                Login
                            </Link>
                        </Button>

                        <Button color="inherit" >
                            <Link to="/signup"  style={{ textDecoration: 'none', color:'white' }}>
                                sing up
                            </Link>
                        </Button>

                    </Toolbar>
                </AppBar>
            </div>

 
    );
}

