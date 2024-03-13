import { useContext, useState } from 'react'
import './App.css'
import UserContext from './Context'
import Header from './components/Header'
import Main from './components/Main'

function App() {

  const [user, setUser] = useState({
    "_id": "65f056d3c4193fdfdf0fb497",
  "name": "Abe Guerrero",
  "email": "ag@example.com",
  "password": "password123",
  "username": "abe_gue",
  "profilePicture": "profile1.jpg",
  "__v": 0,
  "createdAt": "2024-03-12T13:21:23.217Z",
  "updatedAt": "2024-03-12T13:21:23.217Z"
  })

  return (
    <>
      <UserContext.Provider value={{user, setUser}}>
        <Header />
        <Main />
      </UserContext.Provider>
    </>
  )
}

export default App
