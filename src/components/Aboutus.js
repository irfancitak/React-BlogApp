import React from 'react'
import AboutImg from '../assets/aboutus.jpg';


const Aboutus = () => {
  return (
    <div className='aboutus container'>
        <div className='aboutus_img'>
            <img src={AboutImg} alt="about us" />
        </div>

        <div className='aboutus_content'>
            <h1>About us</h1>
            <h2>What we believe in</h2>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>

            <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

            <a href='#' className='button'>Learn more</a>
        </div>
    </div>
  )
}

export default Aboutus