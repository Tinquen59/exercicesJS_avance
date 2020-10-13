let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function accumulator(numbers, acc = 0) {
  if (numbers.length === 0) return acc;

  acc = acc + numbers.shift();

  return accumulator(numbers, acc); // stack overflow

  // Une condition d'arrêt et retourner la somme des valeurs du tableau
  // dans la fonction on ré-appelle la fonction elle-même
  // accumulator(numbers, 10);
}

console.log(accumulator(numbers)); // doit retourner 55