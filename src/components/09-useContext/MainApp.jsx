import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext'

import AppRouter from './AppRouter'

const MainApp = () => {

  const [user, setUser] = useState({})

  return (
    <UserContext.Provider value={{
      user,
      setUser,
      temporal: 1234
    }}>
      <AppRouter />
    </UserContext.Provider>
  )
}

export default MainApp
