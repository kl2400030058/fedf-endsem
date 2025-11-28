import { useMemo, useState } from 'react'

const tableCellStyles = {
  padding: '10px',
  border: '1px solid #e4e4e4',
  textAlign: 'left',
}

const navButtonStyles = (disabled) => ({
  padding: '10px 20px',
  fontSize: '16px',
  cursor: disabled ? 'not-allowed' : 'pointer',
  backgroundColor: disabled ? '#bdbdbd' : '#2563eb',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  transition: 'background-color 150ms',
})

const StudentList = ({ students = [], perPage = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const { totalPages, currentStudents } = useMemo(() => {
    const total = Math.max(1, Math.ceil(students.length / perPage))
    const lastIndex = currentPage * perPage
    const firstIndex = lastIndex - perPage
    return {
      totalPages: total,
      currentStudents: students.slice(firstIndex, lastIndex),
    }
  }, [students, perPage, currentPage])

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
  }

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
  }

  return (
    <div style={{ padding: '24px', fontFamily: 'Segoe UI, Arial, sans-serif' }}>
      <h2 style={{ marginBottom: '16px' }}>Student Directory</h2>

      <div style={{ overflowX: 'auto', marginBottom: '16px', minHeight: '320px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '480px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f3f4f6' }}>
              <th style={tableCellStyles}>ID</th>
              <th style={tableCellStyles}>Name</th>
              <th style={tableCellStyles}>Email</th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.length ? (
              currentStudents.map((student, idx) => (
                <tr key={student.id ?? `${student.name}-${idx}`}>
                  <td style={tableCellStyles}>{student.id ?? 'N/A'}</td>
                  <td style={tableCellStyles}>{student.name}</td>
                  <td style={tableCellStyles}>{student.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} style={{ ...tableCellStyles, textAlign: 'center' }}>
                  No students to display
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={handlePrev} disabled={currentPage === 1} style={navButtonStyles(currentPage === 1)}>
          Previous
        </button>

        <span style={{ fontWeight: 'bold' }}>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          style={navButtonStyles(currentPage === totalPages)}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default StudentList

