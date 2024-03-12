import { useState } from "react"

export default function CreateAccountScreen() {
    
    const initialForm = {
        username: '',
        email: '',
        password: ''
    }

    const [formInfo, setFormInfo] = useState(initialForm)

    const formOnChange = (event) => {
        setFormInfo({ ...formInfo, [event.target.id]: event.target.value })
    }

    const formOnSubmit = (event) => {
        event.preventDefault()

        // Change context for UserContext to update Main

        setFormInfo(initialForm)
    }
    
    return (
        <>
            <div className="card">
            <h2>Create Account</h2>

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
                    id='password' />

                <button type="submit">Lets Travel!</button>
            </form>
            </div>
        </>
    )
}