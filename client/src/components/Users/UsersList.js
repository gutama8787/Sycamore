import React from 'react'
import { useSelector } from 'react-redux';

const UsersList = () => {
    const users = useSelector(state => state.users); 
    let lst = users.map(x => (<h2> {x}</h2>))
    return (
        <div>
            {users.map(ind=><h1 key={ind.username}>{ind.username}</h1>)}
            <h1>Nothing to see here</h1>
        </div>
    )
}

export default UsersList;
