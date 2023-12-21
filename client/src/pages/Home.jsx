import React from 'react'
import {useSelector} from "react-redux"
const Home = () => {
  const {currentUser} = useSelector((state)=>state.user)
  return (
    <div><>Home{currentUser.username}
    </></div>
   
  )
}

export default Home