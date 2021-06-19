const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//exercicio 1
lesson2.turno = 'manhã'
console.log(lesson2)

//exercicio 2
console.log(Object.keys(lesson2))

//exercicio 3
console.log(Object.keys(lesson2).length)

//exercicio 4
console.log(Object.values(lesson2))

//exercicio 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})
console.log(allLessons)

//exercicio 6
const allStudents = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes
console.log(allStudents)

//exercicio 7
const value = Object.values(lesson2)[2]
console.log(value)

//exercicio 8
const verifyPair = (target, key, value) => {
  const obj = Object.entries(target)

  for (i in obj) {
    if (key === obj[i][0] && value === obj[i][1])
    return true
  }
}

console.log(verifyPair(lesson3, 'turno', 'noite'))