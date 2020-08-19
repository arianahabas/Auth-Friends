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
    <section className='hero is-primary is-large'>
        <div className="hero-body">
            <div className="containter">
                <div className="columns is-centered">
                    <div className="column is-one-quarter">
                        <form action="" className='box' onSubmit={handleSubmit}>
                            <div className="field">
                                <label for='' className='label'>Username</label>
                                <div className="control has-icons-left">
                                    <input
                                    type='username'
                                    placeholder='e.g. bobMarley'
                                    class='input'
                                    onChange={handleChange}
                                    name='username'
                                    value={values.username}
                                    required
                                    />
                                    <span className='icon is-small is-left'>
                                    <i className='fa fa envelope'></i>
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <label for='' className='label'>Password</label>
                                <div className="control has-icons-left">
                                    <input 
                                    type='password'
                                    placeholder='********'
                                    class='input'
                                    onChange={handleChange}
                                    name='password'
                                    value={values.password}
                                    required
                                    />
                                    <span className='icon is-small is-left'>
                                        <i className='fa fa lock'></i>
                                    </span>    
                                </div>
                            </div>
                            <div className="field">
                                <button  type='submit' className='button is-success'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

{/* <div className="field">
       
<form onSubmit={handleSubmit}>
<div className="control">
    <input 
    type='username'
    placeholder='username'
    onChange={handleChange}
    name='username'
    value={values.username}
    />
    </div>
    <div className="control">
    <input 
    type='text'
    placeholder='password'
    onChange={handleChange}
    name='password'
    value={values.password}
    />
    </div>
<div class="control">
    <button class="button is-primary">Login</button>
</div>

</form>
</div>       */}