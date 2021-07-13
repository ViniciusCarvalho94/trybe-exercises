const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correct = (answers, student) => {
  let grades = 0;
  for (i = 0; i < 10; i += 1) {
    if (answers[i] === student[i]) {
      grades += 1;
    } else if (student[i] === 'N.A') {
      grades = grades;
    } else {
      grades -= 0.5;
    }
  }
  return grades;
};

const right = (answers, student, callback) => {
  return callback(answers, student);
};

console.log(right(rightAnswers, studentAnswers, correct));
