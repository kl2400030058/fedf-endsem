import React, { useState } from 'react';

const StudentList = ({ students = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 10;

  // Calculate total pages
  const totalPages = Math.ceil(students.length / studentsPerPage);

  // Get students for current page
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);

  // Navigation handlers
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Student List</h2>
      
      {/* Display current students */}
      <div style={{ marginBottom: '20px', minHeight: '300px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>ID</th>
              <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Name</th>
              <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Email</th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.length > 0 ? (
              currentStudents.map((student, index) => (
                <tr key={student.id || index}>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{student.id || indexOfFirstStudent + index + 1}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{student.name}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{student.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={{ padding: '10px', textAlign: 'center' }}>No students found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
            backgroundColor: currentPage === 1 ? '#cccccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Previous
        </button>

        <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
          Page {currentPage} of {totalPages || 1}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages || totalPages === 0}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: (currentPage === totalPages || totalPages === 0) ? 'not-allowed' : 'pointer',
            backgroundColor: (currentPage === totalPages || totalPages === 0) ? '#cccccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StudentList;

