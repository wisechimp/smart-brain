import React, { useState } from "react"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

const ProfileIcon = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <div className='pa4 tc'>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle tag='span'>
          <img
            src='http://tachyons.io/img/logo.jpg'
            className='br-100 ba h3 w3 dib'
            alt='avatar'
          />
        </DropdownToggle>
        <DropdownMenu
          end
          className='b--transparent shadow-5'
          style={{
            marginTop: "20px",
            backgroundColor: "rgba(255, 255, 255 0.5",
          }}
        >
          <DropdownItem onClick={props.toggleProfileModal}>
            View Profile
          </DropdownItem>
          <DropdownItem onClick={() => props.onRouteChange("signout")}>
            Sign Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default ProfileIcon
