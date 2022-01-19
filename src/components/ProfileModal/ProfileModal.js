import React, { useEffect } from "react"
import ReactDOM from "react-dom"

import "./profileModal.css"

const modalRoot = document.getElementById("modal-root")

const ProfileModal = (props) => {
  const element = document.createElement("div")
  const cleanup = () => modalRoot.removeChild(element)

  useEffect(() => {
    modalRoot.appendChild(element)

    return cleanup
  })

  return ReactDOM.createPortal(props.children, element)
}

export default ProfileModal
