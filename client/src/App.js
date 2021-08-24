import React,{useEffect,useState} from 'react'
import Header from './components/Header/Header'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Ask from './components/Forms/Ask/Ask';
import Post from './components/Posts/Post/Post';
import Posts from './components/Posts/Posts';
import Signup from './components/Forms/Signup/Signup';
import Login from './components/Forms/Login/Login';
import UsersList from './components/Users/UsersList';
import {data} from './app/api'
import {useDispatch} from 'react-redux'
import {getPosts} from './reducers/postSlice'
import {createPost} from './reducers/postSlice'
import {allPosts} from './reducers/postSlice'
/* 
[X] There should be a header. -static
[X]  - The website name
[X] There should be a button to allow them to post. [an ask button] - static
[X]  - should be just below the header
[X] As someone opens our website we want them to see a list of questions that have been asked.
[X]  - should be clickable
[X]  - if clicked sends to a new route where they can interact with the post. 
[x]  Upload to git hub
[x]    - add a .env file
[x]    - init git localy and push remotly 
[x]  Complete form
[x]    - make sure the form is saved onto redux store
[x]    - make sure the from is saved onto a database 
 
*/

function App() {
    const dispatch = useDispatch();
    dispatch(allPosts())
        
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <React.Fragment>
                                <Posts />
                            </React.Fragment>
                        )}
                    />
                    <Route exact path="/posts/:postId" component={Post} />
                    <Route exact path="/ask" component={Ask} />
                    {/* <Redirect to="/" /> */}
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path = "/users" component={UsersList}/>
                </Switch>
            </Router>
        </div>

    )
}

export default App
