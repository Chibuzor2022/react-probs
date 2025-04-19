import React from 'react'
import { useParams } from 'react-router-dom'
import studentData from '../data/studentsData';
import { Link } from 'react-router-dom';

const StudentDetails = () => {

  const { id } = useParams(); 
  const student=studentData.find((s) => s.id === parseInt(id))
  
  return (
    <div className='max-w-xl mx-auto mt-10 bg-white rounded p-6 text-center'>
      <img src={student.image}
        alt={student.name}
        className='w-32 h-32 mx-auto rounded object-cover border-4 mb-4'
      />
      <h2 className='text-2xl font-bold text-gray'>{student.name}</h2>
      <p className='text-gray mt-2'>Grade: {student.grade}</p>
      <Link to="/">Go Home</Link>
    </div>
  )
}

export default StudentDetails
