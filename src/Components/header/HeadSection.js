import React from 'react'
import './HeadSection.css'



const HeadSection = () => {
  return (
    <div className='header_container'>
        <div className='fullname'>
            <h3>Akinbo Olamilekan Daniel</h3>
        </div>
        <div className='contacts'>
          <div className='contact-info'>
            <h4>Address:</h4>
            <p>Akinbowale Street, Sango Otta, Ogun State</p>
            </div>
          <div className='contact-info'>

            <h4>Email Address:</h4>
            <p>akinboolami@gmail.com || akinbo.o.daniel@gmail.com</p>
            </div>
          <div className='contact-info'>

            <h4>Phone Number:</h4>
            <p>(+234) 8163-177-517, (+234) 7018-557-883</p>
            </div>
        </div>
    </div>

  )
}

export default HeadSection