import React, { useEffect, useState } from 'react'
import { AddFriendForm } from './AddFriendForm'
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import styled from 'styled-components'


const Card = styled.div `
    border: 1px solid black;
    margin: 3px;
    padding: 5px;

`


export const FriendsList = () => {
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
            {friends.map(friend => 
                <Card key={friend.id}>
                    <p>Name: {friend.name}</p>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </Card>
            )}
            </div>
            <div>
            <AddFriendForm/>
            </div>
        </div>
    )
}
