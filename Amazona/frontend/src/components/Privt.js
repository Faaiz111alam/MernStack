import React from 'react'
import { useSelector } from 'react-redux'
import {Route,Redirect} from 'react-router-dom'

export default function Privt({component:Component, ...rest}) {
  const userinfo =useSelector(state=>state.UseSigin)
  const {userInfo}=userinfo


    return(
        <Route {...rest} render={(props)=>userInfo?(<Component {...props}></Component>):(<Redirect to="/sigin" />)} >

        </Route>
    )
    
}