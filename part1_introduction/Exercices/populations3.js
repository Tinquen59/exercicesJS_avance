const populations = [
    { id: 0, name: "Alan" },
    { id: 1, name: "Albert" },
    { id: 2, name: "Jhon" },
    { id: 3, name: "Brice" },
    { id: 4, name: "Alexendra" },
    { id: 5, name: "Brad" },
    { id: 6, name: "Carl" },
    { id: 7, name: "Dallas" },
    { id: 8, name: "Dennis" },
    { id: 9, name: "Edgar" },
    { id: 10, name: "Erika" },
    { id: 11, name: "Isaac" },
    { id: 12, name: "Ian" },
];

let groupNames = []

for (const population of populations) {
    population.lenName = population.name.length
}
console.log(populations)

let j = 0

for (let i = 0; i < populations.length; i++) {
    if (populations[j].lenName === populations[i].lenName && populations[j].id !== populations[i].id) {
        groupNames.push(populations[i].name)
    }

    if (i == populations.length - 1 && j < populations.length - 1) {
        i = 0
        j++
    }
}

groupNames = new Set(groupNames)
console.log(groupNames)