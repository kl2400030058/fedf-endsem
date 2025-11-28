import React from 'react';
import StudentList from './StudentList';

// Sample student data - replace with your actual data
const generateStudents = (count) => {
  const students = [];
  for (let i = 1; i <= count; i++) {
    students.push({
      id: i,
      name: `Student ${i}`,
      email: `student${i}@example.com`
    });
  }
  return students;
};

const App = () => {
  // Example: 50 students - you can change this number
  const students = generateStudents(50);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <StudentList students={students} />
    </div>
  );
};

export default App;

