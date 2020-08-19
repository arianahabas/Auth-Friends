import React, { useEffect, useState } from 'react'
import { AddFriendForm } from './AddFriendForm'
import { axiosWithAuth } from '../utils/axiosWithAuth'



export const FriendsList = (props) => {
    const [friends, setFriends] = useState([])

    useEffect(()=>{
        //make GET request to api
        //add the token to the 'authorization' request header
       axiosWithAuth()
       .get('/friends')
       .then((res) => {
        //    console.log('here is your data', res.data)
            setFriends(res.data)
       })
        .catch((err)=> {
            console.log('Try again', err)
        })
    },[])

    // console.log(friends)

    return (
        
        <div>
           
            <div>
                <div className='level'>
                    <p className='level-item has-text-centered'>
                         <h1 className='title is-1 is-centered mt-4' >Say 👋 to all of my 👩‍👩‍👦‍👦</h1>
                    </p>
                </div>
               
                <div class="columns is-multiline is-centered">
                {friends.map(friend => 
                    <div className='column is-one-quarter has-background-info mx-5 my-5 px-5 py-5 has-text-centered' key={friend.id}>
                        <p className='title is-3'>{friend.name}</p>
                 
                        <p className='subtitle is-5 has-text-light'>{friend.email}</p>
                        <p className='subtitle is-5 has-text-light'>Age: {friend.age}</p>
                    </div>
                )}
                </div>
            </div>
             <AddFriendForm/>
        </div>
    )
}
