import React, { useState } from "react"

import "./profile.css"

const Profile = ({ userData, isProfileOpen, loadUser, toggleProfileModal }) => {
  const { id, email, name, entries, joined, age, car } = userData
  const [userName, setUserName] = useState(name)
  const [userAge, setUserAge] = useState(age)
  const [userCar, setUserCar] = useState(car)

  const onFormChanged = (event) => {
    switch (event.target.name) {
      case "user-name":
        setUserName(event.target.value)
        break
      case "user-age":
        setUserAge(event.target.age)
        break
      case "user-car":
        setUserCar(event.target.car)
        break
      default:
        return
    }
  }

  const submitProfileUpdate = (data) => {
    fetch(`http://localhost:5000/profile/${id}`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formInput: data }),
    })
      .then((resp) => {
        toggleProfileModal()
        loadUser({
          ...userData,
          ...data,
        })
      })
      .catch(console.log)
  }

  return (
    <div className='profile-modal'>
      <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white'>
        <main className='pa4 black-80 w-80'>
          <img
            src='http://tachyons.io/img/logo.jpg'
            className='h3 w3 dib'
            alt='avatar'
          />
          <h1>{userName}</h1>
          <h4>{`Image Submitted: ${entries}`}</h4>
          <p>{`Member since: ${new Date(joined).toLocaleDateString()}`}</p>
          <hr />
          <label className='mt2 fw6' htmlFor='user-name'>
            User Name:
          </label>
          <div className='mt3'>
            <input
              className='pa2 ba w-100'
              onChange={onFormChanged}
              placeholder={name}
              type='text'
              name='user-name'
              id='name'
            />
            <label className='mt2 fw6' htmlFor='user-age'>
              Age:
            </label>
            <input
              className='pa2 ba w-100'
              onChange={onFormChanged}
              placeholder={age}
              type='text'
              name='user-age'
              id='age'
            />
            <label className='mt2 fw6' htmlFor='user-car'>
              Car:
            </label>
            <input
              className='pa2 ba w-100'
              onChange={onFormChanged}
              placeholder={car}
              type='text'
              name='user-car'
              id='car'
            />
          </div>
          <div
            className='mt4'
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <button
              className='b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20'
              onClick={() =>
                submitProfileUpdate({
                  name: userName,
                  age: userAge,
                  car: userCar,
                })
              }
            >
              Save
            </button>
            <button
              className='b pa2 grow pointer hover-white w-40 bg-light-red b--black-20'
              onClick={toggleProfileModal}
            >
              Cancel
            </button>
          </div>
        </main>
        <div className='modal-close' onClick={toggleProfileModal}>
          &times;
        </div>
      </article>
    </div>
  )
}

export default Profile
