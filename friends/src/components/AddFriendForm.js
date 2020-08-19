import React, { useState } from 'react'


const initialValues = {
    name: '',
    age: '',
    email: ''
}


export const AddFriendForm = () => {
    const [addFriend, setAddFriend ] = useState (initialValues)
    

    const handleChange = (e) => {
        setAddFriend({...addFriend, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <form >
                <input 
                type='text'
                placeholder='name'
                onChange={handleChange}
                name='name'
                />
                 <input 
                type='text'
                placeholder='age'
                onChange={handleChange}
                name='age'
                />
                <input 
                type='text'
                placeholder='email'
                onChange={handleChange}
                name='email'
                />
                <button>Add</button>
            </form>
         </div>
    )
}
