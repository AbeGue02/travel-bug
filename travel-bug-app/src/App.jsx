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
        {/* Have onboarding screen load while retrieving data (Have it take 0.5 seconds and fade out)
        Check if user is logged in and render the right screen */}
        <Header />
        <Main />
      </UserContext.Provider>
    </>
  )
}

export default App
