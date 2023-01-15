import React from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import UserContext from './context/user.context'

function App() {  
  return ( <>
    <UserContext.Provider value={{
      isLogedIn: false
  }}>
      <RouterProvider  router={router}/>
    </UserContext.Provider>
    </> 
    )
}

export default App
