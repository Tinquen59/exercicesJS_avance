function ttc(prixHt, tva = 20) {
    let calcul

    prixHT = Math.floor(prixHT * 100) / 100

    if (isNaN(tva) === true || isNaN(prixHT) === true) {
        console.log('Erreur de type')
    } else {
        calcul = parseFloat(prixHT) * (parseFloat(tva) / 100) + 100
    }

    console.log(calcul)
}

let prixHT = 100

ttc(prixHT)