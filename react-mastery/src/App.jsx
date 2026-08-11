import { useState } from "react"
import StudentForm from "./components/StudentForm"
function App() {
  const [students, setStudents] = useState([])
  function addStudent(student) {
    console.log(student)

  }
  return (
    <>

      <h1>Student Managment </h1>
      <StudentForm onAddStudent={addStudent}></StudentForm>
      <h1>{students.length}</h1>
    </>
  )
}

export default App