import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Link } from 'react-router-dom'
import { signin } from '../actions/USerActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

export default function SigninScreen(props) {
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const userSig= useSelector(state=>state.UseSigin)
  const {userInfo,loading,error}=userSig
 

  const redirect= props.location.search? props.location.search.split('=')[1]:'/'

  const disptach =useDispatch()
    const submithandle=((e)=>{
        e.preventDefault()
        disptach(signin({email,password}))

    })
    useEffect(()=>{
       if (userInfo) {

        props.history.push(redirect)
           
       }
    },[props.history,userInfo,redirect])
    return (
        <div >
            <form className='forms' onSubmit={submithandle}>
                <div>
                    <h1>Sign In</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox error={error} />}
                <div>
                    <label htmlFor='email'> Email address</label>
                    <input type='email' id='email' placeholder='Enter email' required onChange={(e)=>setemail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='password'> password</label>
                    <input type='password' id='password' placeholder='Enter password' required onChange={(e)=>setpassword(e.target.value)} />
                </div>
                <div>
                    <label/>
                    <button className='siginbutoon' type='submit'>Sigin</button>
                </div>
                <div>
                    <label/>
                    <div>New customer? {''}
                      <Link to="/register?redirect=shipping">create your account</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
