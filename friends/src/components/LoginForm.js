import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'


const initialValues = {
    username: 'Lambda School',
    password: 'i<3Lambd4'
}
 
export const LoginForm = () => {
    const [values, setValues ] = useState (initialValues)
    const history = useHistory()

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth()
        .post('/login', values) //the (route, the data you want to send in)
        .then((res) => {
           localStorage.setItem('token', res.data.payload) 
           history.push('./friends')
        })
        .catch((err) => console.log(err))
    }

    return (
    <section className='hero is-white'>
        <div className="hero-body">
            <div className="containter">
                <div className="columns is-centered">
                    <div className="column is-one-quarter">
                        <form className='box' onSubmit={handleSubmit}>
                            <div className="field">
                                <label className='label'>Username</label>
                                <div>
                                    <input
                                    type='username'
                                    placeholder='e.g. bobMarley'
                                    class='input'
                                    onChange={handleChange}
                                    name='username'
                                    value={values.username}
                                    required
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label for='' className='label'>Password</label>
                                    <input 
                                    type='password'
                                    placeholder='********'
                                    class='input'
                                    onChange={handleChange}
                                    name='password'
                                    value={values.password}
                                    required
                                    />  
                            </div>
                                <button type='submit' className='button is-success'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

