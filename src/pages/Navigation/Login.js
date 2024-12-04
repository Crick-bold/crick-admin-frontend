import React from 'react'
import { GoogleLogin } from '@react-oauth/google'
const Login = ({responseMessage,errorMessage}) => {
    
  return (
  
          <GoogleLogin
            onSuccess={responseMessage}
            onError={errorMessage}
            theme="outline"
            size="medium"
            text="signin"
          
          />
  )
}

export default Login
