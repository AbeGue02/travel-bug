import { useContext } from "react"
import UserContext from "../Context"
import { useNavigate } from "react-router-dom"


export default function UserProfile() {

  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/user/${id}/edit`)  
  }

  return (
    <div>
      <h3>Profile</h3>
      <ul>
        <li>Profile Picture: <img src={user.profilePicture } /></li>
        <li>Username {user.username}</li>
        <li>Name {user.name}</li>
        <li>Email {user.email} </li>
      </ul>
      <button onClick={()=> handleClick(user._id)}>EDIT PROFILE SETTING</button>
    </div>
  )
}