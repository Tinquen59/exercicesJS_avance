const students = [
    {
        name: "Alan",
        family: {
            mother: "Isa",
            father: "Philippe",
            syster: "Sylvie",
        },
        age: 35,
    },
    {
        name: "Bernard",
        family: {
            mother: "Particia",
            father: "Cécile",
            syster: "Annie",
        },
        age: 55,
    },
];

for (const student of students) {
    console.log(`Nom : ${student.name} soeur : ${student.family.syster}`)
}