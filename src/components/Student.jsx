import React from 'react'
import { Link } from 'react-router-dom'


const Student = ({id, name, grade,image}) => {
  return (
    <Link to={`/students/${id}`}>
     <div>
      <img src={image} alt="" />
      <div>
        <h1>First Name: { name} </h1>
         <p>grade: { grade}</p>
      </div>
    </div>
    </Link>
   
  )
}


export default Student
