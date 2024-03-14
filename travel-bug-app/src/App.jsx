import { useContext, useState } from 'react'
import './App.css'
import UserContext from './Context'
import Header from './components/Header'
import Main from './components/Main'

function App() {

  const [user, setUser] = useState({})

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
