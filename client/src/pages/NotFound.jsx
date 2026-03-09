import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <button onClick={()=> window.location.href='/'}>Go Home</button>
    </div>
  )
}

export default NotFound
