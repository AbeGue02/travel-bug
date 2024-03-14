import { useContext, useState } from "react";
import axios from "axios";
import UserContext from '../Context'
import {useNavigate} from 'react-router-dom'

export default function CreateAccountScreen() {
    
    const initialForm = {
        name: '',
        username: '',
        email: '',
        password: '',
        profilePicture: ''
    }

    const {setUser} = useContext(UserContext)

    const [formInfo, setFormInfo] = useState(initialForm)
    let navigate = useNavigate()

    const formOnChange = (event) => {
        setFormInfo({ ...formInfo, [event.target.id]: event.target.value })
    }

    const formOnSubmit = async (event) => {
        event.preventDefault()

        if (formInfo.username.length < 3) {
            alert("Username must be at least 3 characters long.")
            return
        }
        console.log(formInfo)
        try {
            const response = await axios.post('http://localhost:3001/user', formInfo);
            console.log(response)

            if (response.status === 201) {
                // Account creation successful
                // Change context for UserContext to update Main and redirect to home screen
                setFormInfo(initialForm);
            } else {
                // Account creation failed
                alert(response.data.error);
                console.error(response.data.error)
            }

            setUser(initialForm) 
            navigate('/')

        } catch (error) {
            console.error('Error creating account:', error);
            alert('An error occurred while creating your account. Please try again.');
        }
    }
    
    return (
        <>
            <div className="card">
                <h2>Create Account</h2>

                <form onSubmit={formOnSubmit}>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        value={formInfo.name} 
                        onChange={formOnChange}
                        id="name" />
                    
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        value={formInfo.username} 
                        onChange={formOnChange}
                        id="username" />
                    
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email" 
                        value={formInfo.email} 
                        onChange={formOnChange}
                        id="email" />
                    
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        value={formInfo.password} 
                        onChange={formOnChange} 
                        id='password' />

                    <button type="submit">Lets Travel!</button>
                </form>
            </div>
        </>
    )
}