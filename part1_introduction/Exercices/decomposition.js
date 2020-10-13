function sum(x, y, z) {
    return x + y + z
  }
  
  let numbers = [1, 2, 3]
  
sum(...numbers) // sum(1, 2, 3)

  function sumTTC(x, y, z, tva = 0.2) {
    if ( isNaN(parseFloat(x)) || isNaN(parseFloat(y)) || isNaN(parseFloat(z)) || isNaN(parseFloat(tva)) ) return "Error number price value"

    return Math.floor( (x + y + z) * (1 + tva) * 100 ) / 100
  }

  const pricesHT = [100, 200, 55]

  console.log(sumTTC(...pricesHT))