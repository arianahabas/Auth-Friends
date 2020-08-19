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
        axiosWithAuth()
        .post('/friends', values)
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
        <section className='hero is-light is-small'>
        <div className="hero-body">
            <div className="containter">
                <div className="columns is-centered">
                    <div className="column is-one-quarter">
                        <form action="" className='box' onSubmit={onSubmit}>
                            <h2 className='title is-3 has-text-black'>Add a Friend</h2>
                            <div className="field">
                                <label for='' className='label'>Name</label>
                                <div className="control has-icons-left">
                                    <input
                                    type='name'
                                    placeholder='Bob Marley'
                                    class='input'
                                    onChange={handleChange}
                                    name='name'
                                    value={values.name}
                                    required
                                    />
                                    <span className='icon is-small is-left'>
                                    <i className='fa fa envelope'></i>
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <label for='' className='label'>Age</label>
                                <div className="control has-icons-left">
                                    <input 
                                    type='age'
                                    placeholder='#'
                                    class='input'
                                    onChange={handleChange}
                                    name='age'
                                    value={values.age}
                                    required
                                    />
                                    <span className='icon is-small is-left'>
                                        <i className='fa fa lock'></i>
                                    </span>    
                                </div>
                            </div>
                            <div className="field">
                                <label for='' className='label'>Email</label>
                                <div className="control has-icons-left">
                                    <input 
                                    type='email'
                                    placeholder='bobmarley@gmail.com'
                                    class='input'
                                    onChange={handleChange}
                                    name='email'
                                    value={values.email}
                                    required
                                    />
                                    <span className='icon is-small is-left'>
                                        <i className='fa fa lock'></i>
                                    </span>    
                                </div>
                            </div>
                            <div className="field">
                                <button  type='submit' className='button is-success'>Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
        // <div>
        //     <form onSubmit={onSubmit}>
        //         <input 
        //         type='text'
        //         placeholder='name'
        //         onChange={handleChange}
        //         name='name'
        //         value={values.name}
        //         />
        //          <input 
        //         type='text'
        //         placeholder='age'
        //         onChange={handleChange}
        //         name='age'
        //         value={values.age}
        //         />
        //         <input 
        //         type='text'
        //         placeholder='email'
        //         onChange={handleChange}
        //         name='email'
        //         value={values.email}
        //         />
        //         <button type='submit'>Add</button>
        //     </form>
        //  </div>
    )
}
