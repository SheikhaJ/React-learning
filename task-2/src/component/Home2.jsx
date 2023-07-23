import React, { useState } from 'react'
import User from './User'

export default function Home2() {
    let [user] = useState([
            {title:"jkjkl", desc:"jkjkjlj"},
            {title:"jhjjkjgsd", desc:"jnkjllk;"}
    ]
    )

  return (
    <div className='container'>
   <div className='row'>
       {user.map((user)=> <User title={user.title} desc={user.desc} />)} 
   </div>
 </div>
  )
}
