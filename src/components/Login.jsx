import React from 'react'
import { useDispatch } from 'react-redux'
import {login, logout} from '../features/user'

const Login = () => {
  // to modify values from states
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=> {dispatch( login({name:'muichiro', age:20, email:'mui@chiro.jav'}))}}>Login</button>
      <button onClick={()=> {dispatch( logout() )}}>Logout</button>
    </div>
  )
}

export default Login