function log_element(in_put) {
    let out_put = document.querySelector(in_put)
    console.log(out_put)
    return
  }
function honorcheck (students){
    const studentsScholarship = []
    
    for (let row of students){
        let sum = 0
        for(let grades of row.grades){
            sum += grades
        }
        let num_of_grade = row.grades.length
        let average_grade = sum / num_of_grade

        if(average_grade >= 80){
            studentsScholarship.push({'name':students.name, "average_grade": average_grade})
        }
    }
    return studentsScholarship
}

const students = [
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
  ]
  

console.log(honorcheck(students))
