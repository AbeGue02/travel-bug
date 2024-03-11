import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function LogInScreen() {
    
    const initialForm = {
        email: '',
        password: ''
    }

    const [formInfo, setFormInfo] = useState(initialForm)

    const navigate = useNavigate()

    const formOnChange = (event) => {
        setFormInfo({ ...formInfo, [event.target.id]: event.target.value })
    }

    const formOnSubmit = (event) => {
        event.preventDefault()

        // Change context for UserContext to update Main

        setFormInfo(initialForm)
    }

    return (
        <div className="card">
            <h2>Log In Screen</h2>

            <form onSubmit={formOnSubmit}>
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

                <p className="createAccount" onClick={() => {navigate('/user/create')}}>Create Account</p>
            </form>
        </div>
    )
}