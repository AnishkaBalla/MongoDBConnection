import { useEffect, useState} from 'react'
import './App.css'
import ContentSection from './HeaderAndText.jsx'
import axios from "axios"
import MessageForm from './MessageForm.jsx'


function App() {
  const [students, setStudents]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/test").then((response)=>{
      console.log("api response recieved", response) 
      setStudents(response.data)
    })
  }, [])
  return (
    <>
      <ContentSection title="Interactivity!">Add stuff here!</ContentSection>
      <ul>
        {students.map((student)=>{
          return(<li key={student.id}>{student.id} {student.first_name} {student.last_name}</li>)
        })}
      </ul>
      <MessageForm/>
    </>
  )
}

export default App
