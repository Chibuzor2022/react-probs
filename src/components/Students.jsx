import React from 'react'
import Student from './Student'
import studentData from '../data/studentsData'

const Students = () => {

 
  return (
    <div>
      <div className="max-x-4xl mx-auto mt-10">
        <h1>These are our Students</h1>
        <div className="" >
           {studentData.map((student) => (
            <Student
              key={student.id}
              id={student.id}
              name={student.name}
              grade={student.grade}
              image={student.image}
            />
                      ))} 
          
         </div>
        
       
        



      </div>
    </div>
  )
}

export default Students
