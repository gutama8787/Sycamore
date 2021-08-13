import React from 'react'
import Header from './components/Header/Header'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Ask from './components/Forms/Ask/Ask';
import Post from './components/Posts/Post/Post';
import Posts from './components/Posts/Posts';
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
[]  Complete form
[]    - make sure the form is saved onto redux store
[]    - make sure the from is saved onto a database 
 
*/

function App() {
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
                </Switch>
            </Router>
        </div>

    )
}

export default App
