import React from 'react'
import Header from './Header'

const Invalid = () => {
  return (
    <><Header/>
    <div className="not-found">
        <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1691344387~exp=1691344987~hmac=122de0691140499cb805fcc4eed1233c1c4f588bf228afc2d822cb1be9d9ca65" alt="Not Found Url" />
        <h1>Page Not Found!</h1>
    </div>
    </>
  )
}

export default Invalid