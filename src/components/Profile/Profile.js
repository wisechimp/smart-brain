import React from "react"

import "./profile.css"

const Profile = ({ isProfileOpen, toggleProfileModal }) => {
  return (
    <div className='profile-modal'>
      <button onClick={toggleProfileModal}>Click</button>
    </div>
  )
}

export default Profile
