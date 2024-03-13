import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react'

import Home from './Home'
import TripList from './TripList'
import TripDetails from './TripDetails'
import UserContext from '../Context'
import LogInScreen from './LogInScreen'
import CreateAccountScreen from './CreateAccountScreen'
import ForgotInfoScreen from './ForgotInfoScreen'
import TripListDetails from './TripListDetails'
import UserProfile from './UserProfile'
import EditUserProfile from './EditUserProfile'

export default function Main() {
    
    //Check for if user is logged in or not
    const { user, setUser } = useContext(UserContext)
    
    return (
        <>
            {
                //user.email ? (
                user.email ? (
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/:tripListId' element={<TripListDetails/>} />
                        <Route path='/:tripListId/trips/:id' element={<TripDetails />} />
                        <Route path='/user/:id' element={<UserProfile />} />
                        <Route path='/user/:id/edit' element={<EditUserProfile />} />
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