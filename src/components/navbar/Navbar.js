import React, { useState } from 'react'
import './navbar.css'
import { FaTimes, FaBars } from 'react-icons/fa'
import Brand from '../../assets/images/brand.png'
import { MdPhone, MdPhoneInTalk } from 'react-icons/md'
import {TextField} from '@mui/material'


const Navbar = () => {
  const [bars, setBars] = useState(true)
  const [modal , setModal] = useState(true);
  const [transition , setTransition] = useState(true)
  return (
    <>
      <nav className="navbar">
        <div className="brand">
          <div className="bars" onClick={() => {
            setBars(!bars)
          }}>
            {
              bars ? <FaBars /> : <FaTimes />
            }
          </div>
          <img src={Brand} alt="brand" />
        </div>
        <ul className={`menu ${bars ? "" : "show-menu"}`}>
          <li onClick={() => {
            setBars(!bars)
          }}><a href="#home">Home</a></li>
          <li onClick={() => {
            setBars(!bars)
          }}><a href="#about">About</a></li>
          <li onClick={() => {
            setBars(!bars)
          }}><a href="#features">Features</a></li>
          <li onClick={() => {
            setBars(!bars)
          }}><a href="#products">Products</a></li>
          <li onClick={() => {
            setBars(!bars)
          }}><a href="#services">Services</a></li>
          <li onClick={() => {
            setBars(!bars)
          }}><a href="#testimonls">Testimonials</a></li>
          <li onClick={() => {
            setBars(!bars)
          }}><a href="#contact">Contact us</a></li>
        </ul>
        <div className="aloqa" onClick={() => {
          setModal(false)
          setTimeout(() => {
              setTransition(false)
          } , 10)
          }}>
          <MdPhone />
        </div>
      </nav>
      <div className={` modal-big ${modal ? "" : "show-modal"}`} onClick={(e) => {
        
      }}>
        <div className={`modal ${transition ? "" : "show-modal-content"}`}>
          <div className="modal-header">
            <h2>Request a Callback</h2>
            <span className='modal-times' onClick={() => {
              setTransition(true)
              setTimeout(() => {
                setModal(true)
              } , 10)
              }}>
              <FaTimes />
            </span>
          </div>
          <div className="modal-body">
            <p className='modal-text'>Please leave your phone number in the field <br /> below and we will call you back soon.</p>
            <form className='modal-form'>
              <TextField id="outlined-basic" label="Phone" variant="outlined" />
              <button><MdPhoneInTalk/></button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar;