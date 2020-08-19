import React, { useEffect, useState } from 'react'
import { AddFriendForm } from './AddFriendForm'


export const FriendsList = () => {
    const [friends, setFriends] = useState([])

    useEffect(()=>{
  
    })

    return (
        <div>
            <div>
                Friends List HERE
            </div>
            <div>
            <AddFriendForm/>
            </div>
        </div>
    )
}
