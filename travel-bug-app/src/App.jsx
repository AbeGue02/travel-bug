import { useContext, useEffect, useState } from 'react'
import './App.css'
import UserContext from './Context'
import Header from './components/Header'
import Main from './components/Main'
import { useCookies } from 'react-cookie'

function App() {

  const [cookies, setCookies, removeCookie] = useCookies(['user'])
  const [user, setUser] = useState(cookies.user ? cookies.user : {})

  useEffect(() => {
    user != cookies.user && setCookies('user', user)
    console.log('cookies updated to: ', cookies.user)
  }, [user])

  console.log(user)

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
