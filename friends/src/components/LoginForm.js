import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'


const initialValues = {
    username: 'Lambda School',
    password: 'i<3Lambd4'
}

 
export const LoginForm = () => {
    const [values, setValues ] = useState (initialValues)

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth()
        .post('/login', values)
        .then((res) => {
           localStorage.setItem('token', res.data.payload) 
           history.push('./friends')
        })
        .catch((err) => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type='text'
                placeholder='username'
                onChange={handleChange}
                name='username'
                value={values.username}
                />
                 <input 
                type='text'
                placeholder='password'
                onChange={handleChange}
                name='password'
                value={values.password}
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
