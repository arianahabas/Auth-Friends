import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialValues = {
    name: '',
    age: '',
    email: ''
}
export const AddFriendForm = () => {
    const [newFriend, setNewFriend ] = useState ([])
    const [values, setValues] = useState(initialValues)

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    // console.log(newFriend)

    const onSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth()
        .post('/friends', newFriend)
        .then(res => {
            console.log('it worked', res)
            setValues({
                name: '',
                age: '',
                email: ''
            })
            setNewFriend([...newFriend, res.data])
        })
        .catch(err => {
            console.log('it didnt work', err)
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                type='text'
                placeholder='name'
                onChange={handleChange}
                name='name'
                value={values.name}
                />
                 <input 
                type='text'
                placeholder='age'
                onChange={handleChange}
                name='age'
                value={values.age}
                />
                <input 
                type='text'
                placeholder='email'
                onChange={handleChange}
                name='email'
                value={values.email}
                />
                <button type='submit'>Add</button>
            </form>
         </div>
    )
}
