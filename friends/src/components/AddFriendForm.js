import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { FriendsList } from './FriendsList'

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
        <section className='hero'>
        <div className="hero-body">
            <div className="containter">
                <div className="columns is-centered">
                    <div className="column is-one-quarter">
                        <form action="" className='box' onSubmit={onSubmit}>
                            <h2 className='title is-3 has-text-black'>Add a Friend</h2>
                            <div className="field">
                                <label for='' className='label'>Name</label>
                                    <input
                                    type='name'
                                    placeholder='Bob Marley'
                                    class='input'
                                    onChange={handleChange}
                                    name='name'
                                    value={values.name}
                                    required
                                    />
                            </div>
                            <div className="field">
                                <label for='' className='label'>Age</label>
                                    <input 
                                    type='age'
                                    placeholder='#'
                                    class='input'
                                    onChange={handleChange}
                                    name='age'
                                    value={values.age}
                                    required
                                    />
                                </div>
                            <div className="field">
                                <label for='' className='label'>Email</label>
                         
                                    <input 
                                    type='email'
                                    placeholder='bobmarley@gmail.com'
                                    class='input'
                                    onChange={handleChange}
                                    name='email'
                                    value={values.email}
                                    required
                                    />
                            </div>
                                <button  type='submit' className='button is-success'>Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}


//TEST SH Example

// import React from 'react'
// import { render, screen, waitForDomChange } from '@testing-library/react'
// import { FriendsList } from './FriendsList'
// // import { axiosWithAuth as mockAxios } from './llAxiosWithAuth'
// import {fetchApi as mockFetch } from './fetchApi' // change useEffect in freindsLIst (switch axioswithauth with fetchApi)


// jest.mock('./fetchApi')

// const testData = {
//     data: [
//         {
//             id: 1,
//             name: 'ben',
//             age: '22',
//             email: '22',
//         }
//         {

//         }
//     ]
// }

// test{'fetches data and renders freinds',  async () => {
//     mockFetch.mockResolvedValueOnce(testData)
//     const {debug, getByText } = render (<FriendsList/>)
//     await waitForDomChange(() => {
//         expect(getByText(/kdkdkdkddk/i)).toBeInTheDocument()
//     })
//     debug()

// }}