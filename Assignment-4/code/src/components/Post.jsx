import React from 'react'
import '../App.css'
export default function Post(props) {
  return (
    <div className="post-wrapper">
      <div className="names">
        <span> {props.name}</span>
      </div>
      <div className="location">
        <span> {props.location}</span>
      </div>
      <div className="imag">
      <img src={props.PostImage} alt='sample image'/>
      </div>
      <div className="btns">
      <img src={"./images/like.png"} alt='sample image'/>
      <img src={"./images/share.png"} alt='sample image'/>
      </div>
      <div className="likes">
        <span>{props.likes} likes</span>
      </div>
      <div className="description">
        <span>{props.description}</span>
      </div>
    </div>
  )
}
