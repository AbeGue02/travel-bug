import { useState } from "react";

export default function CreateAccountScreen() {
    
    const initialForm = {
        name: '',
        username: '',
        email: '',
        password: ''
    }

    const [formInfo, setFormInfo] = useState(initialForm)

    const formOnChange = (event) => {
        setFormInfo({ ...formInfo, [event.target.id]: event.target.value })
    }

    const formOnSubmit = async (event) => {
        event.preventDefault()

        if (formInfo.username.length < 3) {
            alert("Username must be at least 3 characters long.")
            return
        }

        try {
            const response = await fetch('http://localhost:3001/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formInfo)
            });

            const data = await response.json();

            if (response.ok) {
                // Account creation successful
                // Change context for UserContext to update Main and redirect to home screen
                setFormInfo(initialForm);
            } else {
                // Account creation failed
                alert(data.error);
                console.error(data.error)
            }
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