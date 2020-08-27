/*============= SOAL 1 ================*/
console.log("LOOPING PERTAMA")
var deret1 = 0;
while (deret1 < 20) {
    deret1 += 2
    console.log(deret1 + " - I love coding")
}
console.log("LOOPING KEDUA")
deret2 = 20;
while (deret2 > 0) {
    console.log(deret2 + " - I will become a frontend developer")
    deret2 -= 2
}

/*============= SOAL 2 ================*/
for (var angka = 1; angka <= 20; angka++) {
    if (angka % 2 == 1 && angka % 3 == 0) {
        console.log(angka + " - I Love Coding ")
    } else if (angka % 2 == 1) {
        console.log(angka + " - Berkualitas ")
    } else {
        console.log(angka + " - Santai ")
    }
}

/*============= SOAL 3 ================*/
var output = ""
for (var i = 0; i < 7; i++) {
    output += "#";
    console.log(output)
}

/*============= SOAL 4 ================*/
var kalimat = "saya sangat senang belajar javascript"
console.log(kalimat.split(" "))

/*============= SOAL 5 ================*/
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah = daftarBuah.sort()
for (var i = 0; i < daftarBuah.length; i++) {
    x = daftarBuah.slice(i, i + 1)
    console.log(x.join())
}
