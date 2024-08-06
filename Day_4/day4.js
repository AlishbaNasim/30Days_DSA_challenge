// // Question 7: Find Duplicate Numbers in an Array
// // *Description:*
// // Write a TypeScript function that takes an array of numbers as input and returns a new array containing only 
// //the duplicate numbers from the original array. If there are no duplicates, return an empty array.
const student = [
    { name: "alishba", age: 14, marks: 75 },
    { name: "sana", age: 13, marks: 80 },
    { name: "atiqa", age: 12, marks: 95 },
    { name: "areeba", age: 15, marks: 85 },
];
function printStudentMarks(student) {
    const aboveEighty = [];
    for (let i = 0; i < student.length; i++) {
        if (student[i].marks > 80) {
            aboveEighty.push(student[i]);
        }
    }
    return aboveEighty;
}
const aboveEighty = printStudentMarks(student);
// console.log(printStudentMarks(student1))
// console.log(aboveEighty)
console.log("Students with marks greater than 80:");
for (const student of aboveEighty) {
    console.log(`Name:${student.name}, Age:${student.age}, Marks: ${student.marks}`);
}
export {};
