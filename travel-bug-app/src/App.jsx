import { useContext, useEffect, useState } from 'react'
import './App.css'
import UserContext from './Context'
import Header from './components/Header'
import Main from './components/Main'
import LogInScreen from './components/LogInScreen'


function App() {

  const {user, setUser} = useContext(UserContext)

  return (
    <>
      <UserContext.Provider value={{user, setUser}}>
        {/* Have onboarding screen load while retrieving data (Have it take 0.5 seconds and fade out)
        Check if user is logged in and render the right screen */}
        {
          user 
          ? (
            <>
              <Header/>
              <Main/>
            </>
          ) : (
            <>
              <LogInScreen/>
            </>
          )
        }
      </UserContext.Provider>
    </>
  )
}

export default App
