import React from 'react'
import { Outlet } from 'react-router-dom'
import Signup from '../signUp/Signup'
import { useLocation } from 'react-router-dom';

const path = {
  user:{
    route:['/',"/signup","/order","/profile","/product"]
  },
  admin:{
    route:['/',"/signup","/order","/profile","/inventory","/product"]
  }
}
const Private = () => {
  let location = useLocation()
  let getData =JSON.parse( localStorage.getItem('setData') )
  let user_data = getData?.user
  console.log(getData)
  let renderData = () => {
    if(user_data === "user"){
     let a =  path.user.route.includes(location.pathname)
      return a
    }
    if(user_data === "admin"){
      let a =  path.admin.route.includes(location.pathname)
      return a
    }
  }

  let val = renderData()
  console.log(val)
  return (
    <div>
      {
        getData?.token && val ? <Outlet/> : <Signup/>
       
      }
        
    </div>
  )
}

export default Private