
const students = [
    { name: "Gokul", age: 21, grades: [80, 85, 90] },
    { name: "Ram", age: 19, grades: [70, 75, 65] },
    { name: "Prabu", age: 22, grades: [88, 92, 84] },
    { name: "Anu", age: 20, grades: [78, 82, 80] }
  ];
  
  const studentNames = students.map(student => student.name);
  
  const olderStudents = students.filter(student => student.age > 20);
  
  const allGrades = students.flatMap(student => student.grades); 
  const averageGradeAll = allGrades.reduce((sum, grade) => sum + grade, 0) / allGrades.length;
  
  const averageGradeOlder = students
    .filter(student => student.age > 20)
    .flatMap(student => student.grades)
    .reduce((sum, grade, _, arr) => sum + grade / arr.length, 0);
  
  console.log("Student Names:", studentNames);
  console.log("Students older than 20:", olderStudents);
  console.log("Average Grade (All Students):", averageGradeAll.toFixed(2));
  console.log("Average Grade (Students > 20):", averageGradeOlder.toFixed(2));
  