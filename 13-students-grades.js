/*
    HackerLand University has the following grading policy:

   1. Every student receives a grade in the inclusive range from 1 to 100.
   2. Any grade less than 30 is a failing grade. 

   Sam is a professor at the university and likes to round each student's grade according to these rules:

   1.If the difference between the grade and the next multiple of 5 is less than 3 , round up to the next multiple of 5.
   2.If the value of grade  is less than 38 , no rounding occurs as the result will still be a failing grade.

  Examples

  1. grade = 84 round to85 (85 - 84 is less than 3)
  2. grade = 29 do not round (result is less than 40)
  3. grade = do not round (60 - 57 is 3 or higher)

  grades = [73,67,38,33]
  returns = [75,67,40,33]

*/

const grades = [73, 67, 38, 33]

function gradingStudents(grades) {
    let parsedGrades = []
    grades.forEach(grade => {
        const result = Math.round(grade / 5) * 5 - grade
        if (Math.round(grade / 5) * 5 >= 40 && result > 0 && result < 3) {
            parsedGrades.push(Math.round(grade / 5) * 5)
        }
        else parsedGrades.push(grade)
    })

    console.log(parsedGrades)
}

gradingStudents(grades)
