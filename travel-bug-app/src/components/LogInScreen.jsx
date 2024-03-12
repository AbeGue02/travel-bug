import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import UserContext from "../Context"

export default function LogInScreen() {
    
    const initialForm = {
        email: '',
        password: ''
    }

    const [formInfo, setFormInfo] = useState(initialForm)
    const {user, setUser} = useContext(UserContext)

    const navigate = useNavigate()

    const formOnChange = (event) => {
        setFormInfo({ ...formInfo, [event.target.id]: event.target.value })
    }

    const formOnSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post('http://localhost:3001/api/login', formInfo)
            const verifiedUser = response.data

            if (verifiedUser) {

        // Change context for UserContext to update Main
                console.log('Logged in user:', verifiedUser)
                setUser (verifiedUser)
            } else {
                console.log('Invalid email or password')
        }

    } catch (error) {
        // console.error('Error logging in:', error)
    }
};

    return (
        
        <div className="card">
            <form onSubmit={formOnSubmit}>

            <h2>Login</h2>

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
                    id='password'/>

                <p className="forgotPassword" onClick={() => {navigate('/user/forgot-info')}}>Forgot your password?</p>

                <button type="submit">Log In</button>

                <button className="createAccount" onClick={() => {navigate('/user/create')}}>Create Account</button>
            </form>
            
        </div>
    )
    }