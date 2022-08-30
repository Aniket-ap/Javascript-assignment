// 20. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let studentGrade = 710;

if(studentGrade >= 80 && studentGrade <= 100){
    console.log("Grade A");
} else if(studentGrade >= 70 && studentGrade < 80){
    console.log("Grade B");
} else if(studentGrade >= 60 && studentGrade < 70){
    console.log("Grade C");
} else if(studentGrade >= 50 && studentGrade < 60){
    console.log("Grade D");
} else if(studentGrade >= 0 && studentGrade < 50){
    console.log("Grade F");
} else{
    console.log("INVALID GRADE");
}