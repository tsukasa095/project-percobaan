const _ = require("lodash");
const dayjs = require("dayjs");
require('dayjs/locale/id');


const dataPendaftar = ["aldi", "budi", "citra", "deni"];

const tanggalPendaftar = [
"2026-08-01",
"2026-08-05",
"2026-08-03",
"2026-08-10"
];
const hariIni = dayjs();




const daftarGabung = [
{ nama: dataPendaftar[0], tgl: tanggalPendaftar[0], status : hariIni.diff(tanggalPendaftar[0], "day") },
{ nama: dataPendaftar[1], tgl: tanggalPendaftar[1], status : hariIni.diff(tanggalPendaftar[1], "day") },
{ nama: dataPendaftar[2], tgl: tanggalPendaftar[2], status : hariIni.diff(tanggalPendaftar[2], "day") },
{ nama: dataPendaftar[3], tgl: tanggalPendaftar[3], status : hariIni.diff(tanggalPendaftar[3], "day") }
];

const dataHasil = _.chunk(dataPendaftar, 2);
const hasil = _.sortBy(daftarGabung,"tgl");

console.log(dataPendaftar);
console.log("Jadi hasil dari data di atas setelah di chunk data tersebut akan berubah menjadi : ");
console.log(dataHasil);
console.log("HASIL : ")
console.log("NAMA : " + hasil[0].nama  + "\n" + "TANGGAL : " + dayjs(hasil[0].tgl).locale("id").format("DD MMMM YYYY") + "\n" + "STATUS : " + "Terdaftar " + hasil[0].status + " hari yang lalu");
console.log("NAMA : " + hasil[1].nama  + "\n" + "TANGGAL : " + dayjs(hasil[1].tgl).locale("id").format("DD MMMM YYYY") + "\n" + "STATUS : " + "Terdaftar " + hasil[1].status + " hari yang lalu");
console.log("NAMA : " + hasil[2].nama  + "\n" + "TANGGAL : " + dayjs(hasil[2].tgl).locale("id").format("DD MMMM YYYY") + "\n" + "STATUS : " + "Terdaftar " + hasil[2].status + " hari yang lalu");
console.log("NAMA : " + hasil[3].nama  + "\n" + "TANGGAL : " + dayjs(hasil[3].tgl).locale("id").format("DD MMMM YYYY") + "\n" + "STATUS : " + "Terdaftar " + hasil[3].status + " hari yang lalu");