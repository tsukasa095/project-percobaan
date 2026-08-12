const _ = require("lodash");
const data = ["aldi", "budi", "citra", "deni"];
const hasil = _.chunk(data, 2);

console.log(data);
console.log("Jadi hasil dari data di atas setelah di chunk data tersebut akan berubah menjadi : ");
console.log(hasil);