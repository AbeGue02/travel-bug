import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react'

import Home from './Home'
import TripList from './TripList'
import TripDetails from './TripDetails'
import UserContext from '../Context'
import LogInScreen from './LogInScreen'
import CreateAccountScreen from './CreateAccountScreen'
import ForgotInfoScreen from './ForgotInfoScreen'

export default function Main() {
    
    //Check for if user is logged in or not
    const { user, setUser } = useContext(UserContext)

    return (
        <>
            {
                //user.email ? (
                true ? (
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/trips' element={<TripList/>} />
                        <Route path='/trips/:id' element={<TripDetails/>} />
                    </Routes>
                ) : (
                    <Routes>
                        <Route path='/' element={<LogInScreen/>} />
                        <Route path='/user/create' element={<CreateAccountScreen/>} />
                        <Route path='/user/forgot-info' element={<ForgotInfoScreen/>} />
                    </Routes>
                )
            }
        </>
    )
}