import './App.css'
import StudentList from './components/StudentList'

const buildStudentData = (count) =>
  Array.from({ length: count }, (_, idx) => {
    const id = idx + 1
    return {
      id,
      name: `Student ${id.toString().padStart(3, '0')}`,
      email: `student${id}@example.com`,
    }
  })

const App = () => {
  const students = buildStudentData(120)

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <StudentList students={students} perPage={10} />
    </div>
  )
}

export default App
