import { GiButterfly } from "react-icons/gi";
import { useState, useContext } from 'react'
import UserContext from '../Context'
import { useNavigate } from "react-router-dom";


export default function Header() {
    const { user, setUser } = useContext(UserContext)

    const navigate = useNavigate()

    const handleClick = () => {
        if (user.email) {
            navigate(`/`)
            console.log('clicked')
        }
    }

    return (
        <>
            <div className="header">
            <div className="logo" onClick={handleClick}>
                {/* Should render Logo and Profile Picture */}
                {}
                <h1><GiButterfly /> Travel Bug</h1>
            </div>
            {user.email ? (
                <div>
                    <img id="profile-pic" src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg" />
                </div>
            ) : <div className="username">no user here</div>}
            </div>
        </>
    )
}