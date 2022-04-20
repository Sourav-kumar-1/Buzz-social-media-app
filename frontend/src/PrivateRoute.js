
import { Navigate } from "react-router-dom"
import { getLocalStorageData } from "./util"

import React from 'react'

function PrivateRoute({children}) {
  const user = getLocalStorageData("userinfo")
  return user ? children : <Navigate to="/"/>
  
}

export default PrivateRoute