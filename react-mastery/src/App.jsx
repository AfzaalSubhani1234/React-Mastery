
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const [student, setStudent] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setStudent({
      name: name,
      email: email,
      age: age,
      course: course,
    });
  };

  return (
    <>
      <h1>Student Registration</h1>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <br />
        <br />

        <label>Course:</label>

        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">Select Course</option>
          <option value="React">React</option>
          <option value="Python">Python</option>
          <option value="Django">Django</option>
          <option value="JavaScript">JavaScript</option>
        </select>

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      {student && (
        <>
          <h1>Student Details</h1>

          <p>Name: {student.name}</p>
          <p>Email: {student.email}</p>
          <p>Age: {student.age}</p>
          <p>Course: {student.course}</p>
        </>
      )}
    </>
  );
}

export default App;

