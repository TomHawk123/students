const createStudent = (studentName, studentGrade) => {
    const studentObj = {
        name: studentName,
        grade: studentGrade
    }
    return studentObj
}


let student = createStudent("Van", 12)
// console.log(student)


const addMathGrade = (mathObj) => {
    mathObj.math = "B"
    return mathObj
}
// console.log(addMathGrade(student))

student = addMathGrade(student)

const addHistoryGrade = (historyObj) => {
    historyObj.history = "C"
    return historyObj
}

student = addHistoryGrade(student)
// console.log(student)

const addScienceGrade = (scienceObj) => {
    scienceObj.science = "A"
    return scienceObj
}

student = addScienceGrade(student)
console.log(student)
