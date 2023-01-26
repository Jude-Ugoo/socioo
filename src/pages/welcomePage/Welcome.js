import React from 'react'
import "./Welcome.scss"
import illustration from '../../assets/online_organizer.svg'

const Welcome = () => {
  return (
    <div className='welcomePage'>
        <div className="welcomePage__auth-buttons">
        <div className="welcomePage__auth-buttons-login">Login</div>
        <div className="welcomePage__auth-buttons-signup">Sign Up</div>
      </div>
      <img
        // src="https://img.freepik.com/free-vector/schedule-concept-illustration_114360-1531.jpg?w=2000"
        src={illustration}
        alt="home-img"
        className="welcomePage__image"
      />
      <div className="welcomePage__home-text">
      <h1>Socioo</h1>
      <p>An app to manage all your posts</p>
      </div> 
    </div>
  )
}

export default Welcome