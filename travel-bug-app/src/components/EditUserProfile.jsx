import axios from "axios"
import { useState, useContext, useEffect } from "react"
import UserContext from "../Context"
import { useParams, useNavigate } from "react-router-dom"


export default function EditUserProfile() {
  const { user, setUser } = useContext(UserContext)
  let { id } = useParams()
  const navigate = useNavigate()

  const initialState = { ...user}

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    // put request
    await axios.put(`http://localhost:3001/user/${id}/edit`, formState )
    console.log(formState)
    setUser(formState)
    setFormState(initialState)
    navigate(`/user/${id}`)
  }

  return (
    <>
    <div className="profileUser">
      <h3>Your profile settings</h3>
      </div>
      <div className="profileSettings">
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="name">Trip List Name</label>
          <input type='text' name='name' id='name' value={formState.name} onChange={handleChange}></input> */}

          <label htmlFor="profile-pic">Profile Picture</label>
          <input type='text' name='profile-pic' id='profile-pic' value={formState.profilePicture} onChange={handleChange}></input>
          
          <label>Username</label>
          <input type='text' name='username' id='username' value={formState.username} onChange={handleChange}></input>
          
          <label>Name</label>
          <input type='text' name='name' id='name' value={formState.name} onChange={handleChange}></input>
          
          <label>Email</label>
          <input type='text' name='email' id='email' value={formState.email} onChange={handleChange}></input>
          
          <button type='submit'>SAVE CHANGES</button>
        </form>
      </div>
    </>
  )
}