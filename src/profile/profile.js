import React from 'react'
import PropTypes from 'prop-types';
import pic from './profile.jpg'
import { hover } from '@testing-library/user-event/dist/hover';
const Profile = (props) => {
  const handleClick = ()=> {props.handleName(props.FullName)};
  return(
<div className='App' >
  <img src={pic} style={{width:150,borderRadius:'100%'}}/>
        <p style={{color:"red",fontFamily:'cursive',fontSize:50}}>{props.FullName}</p>
        <p style={{color:"blueviolet", fontFamily:"fantasy",fontSize:30}}>{props.bio}</p> 
        <p style={{color:"royalblue", fontFamily:"monospace", fontSize:20}}>{props.profession}</p>
        <p>{props.children}</p>
        <button onClick={handleClick} style={{border:"transparent", color:"pink",backgroundColor:"black"}}> Click Me </button>
    </div>
  )
}
Profile.defaultProps={
  FullName:"First Name and Last Name",
  bio:"My Bio",
  profession:"My Profession",
  children:"My Picture",
}
Profile.propTypes={
  FullName :PropTypes.string,
  bio:PropTypes.string,
  profession:PropTypes.string,
  children:PropTypes.element,
  handleName:PropTypes.func 
  }
export default Profile
