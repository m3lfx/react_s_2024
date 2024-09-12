import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { getUser } from './helper'

const PrivateRoute = ({  children, redirectTo }) => {
    
        console.log(children.type.name)
           return getUser() ? children :  <Navigate to={redirectTo} />;
    
}

export default PrivateRoute