import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()

  return (
    <div>
      <h3 onClick={() => navigate('/')}>Home</h3>
      <h3 onClick={() => navigate('/basket')}>Basket</h3>
      <h3 onClick={() => navigate('/admin')}>Admin</h3>
    </div>
  )
}

export default Header