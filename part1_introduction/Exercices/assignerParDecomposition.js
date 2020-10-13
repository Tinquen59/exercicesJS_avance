let student = {
  name: "Alan",
  notes: [10, 16, 17],
  average: null,
};

student.average = student.notes.reduce((acc, current) => (acc + current)) / student.notes.length

console.log('la moynne est de : ', student.average)

const { name, notes, average } = student

// constantes
console.log(name, notes, average);

