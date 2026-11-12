
// Question 1: Student Information
let studentName = "Ali";
let age = 18;
let marks = 75;

console.log(studentName);
console.log(age);
console.log(marks);

// Question 2: Shopping Bill

let quantity = 5;
let price = 100;

let totalBill = quantity * price;

console.log("Total Bill:", totalBill);

// Question 3: Exam Result

let examMarks = 35;

if (examMarks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Question 4: Student Grading System

let studentMarks = 78;

if (studentMarks >= 80) {
    console.log("A Grade");
} else if (studentMarks >= 70) {
    console.log("B Grade");
} else if (studentMarks >= 60) {
    console.log("C Grade");
} else if (studentMarks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Question 5: School Admission

let studentAge = 16;
let admissionMarks = 65;

if (studentAge >= 15) {
    if (admissionMarks >= 50) {
        console.log("Admission Approved");
    } else {
        console.log("Admission Rejected");
    }
} else {
    console.log("Admission Rejected");
}