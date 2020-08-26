//========== Soal-1 =============
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
var upper = kataKeempat.toUpperCase();
var x = kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1);
console.log(kataPertama + " " + x + " " + kataKetiga + " " + upper);
//================================


//=========== Soal-2 =============
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
var number1 = Number(kataPertama);
var number2 = Number(kataKedua);
var number3 = Number(kataKetiga);
var number4 = Number(kataKeempat);
console.log(number1 + number2 + number3 + number4);
//================================


//=========== Soal-3 =============
var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25);

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);
//================================


//=========== Soal-4 =============
var nilai = 75;
if (nilai >= 80) {
    indek = "A"
} else if (nilai >= 70 && nilai < 80) {
    indek = "B"
} else if (nilai >= 60 && nilai < 70) {
    indek = "C"
} else if (nilai >= 50 && nilai < 60) {
    indek = "D"
} else {
    indek = "E"
}
console.log(indek)
//================================


//=========== Soal-4 =============
var tanggal = 21;
var bulan = 10;
var tahun = 1996;
var buttonPushed = 1;
switch (bulan) {
    case 1: { bulan = "Januari"; break; }
    case 2: { bulan = "Februari"; break; }
    case 3: { bulan = "Maret"; break; }
    case 4: { bulan = "April"; break; }
    case 5: { bulan = "Mei"; break; }
    case 6: { bulan = "Juni"; break; }
    case 7: { bulan = "Juli"; break; }
    case 8: { bulan = "Agustus"; break; }
    case 9: { bulan = "September"; break; }
    case 10: { bulan = "Oktober"; break; }
    case 11: { bulan = "November"; break; }
    case 12: { bulan = "Desember"; break; }
}
console.log(tanggal + "-" + bulan + "-" + tahun)