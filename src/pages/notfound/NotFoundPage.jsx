import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
    const navigate= useNavigate()
  return (
    <div>
        <h1>Not Found Page</h1>
        <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default NotFoundPage