const phones = [
    { name: "iphone XX", priceHT: 900 },
    { name: "iphone X", priceHT: 700 },
    { name: "iphone B", priceHT: 200 },
  ];

const tva = .2

console.log(phones.map(phone => phone.priceHT * (1 + tva)))