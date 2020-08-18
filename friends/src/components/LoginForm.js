import React, { useState } from 'react'


const initialValues = {
    username: 'ariana',
    password: 'habas'
}

export const LoginForm = () => {
    const [values, setValues ] = useState (initialValues)
    const [login, setLogin]  = useState('')

    const handleChange = (e) => {
        setValues({...login, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
     
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
            </form>
        </div>
    )
}
