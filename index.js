const _ = require("lodash");
const data = ["aldi", "budi", "citra", "deni"];
const hasil = _.chunk(data, 2);

console.log(hasil);