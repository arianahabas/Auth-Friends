import React, { useState } from 'react'
import axios from 'axios'


const initialValues = {
    username: 'Lambda School',
    password: 'i<3Lambd4'
}


export const LoginForm = () => {
    const [values, setValues ] = useState (initialValues)
   

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // axios.post('http://localhost:5000/api/login', initialValues)
        // .then((res) => console.log(res))
        // .catch((err) => console.log(err))
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
                <button>Login</button>
            </form>
        </div>
    )
}
