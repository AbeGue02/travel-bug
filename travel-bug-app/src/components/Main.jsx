import { Routes, Route } from 'react-router-dom'
import TripList from './TripList'
import TripDetails from './TripDetails'

export default function Main() {
    
    //Check for if user is logged in or not
    
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/trips' element={<TripList/>}/>
                <Route path='/trips/:id' element={<TripDetails/>}/>
            </Routes>
        </>
    )
}