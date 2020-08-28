/*============ SOAL1 =============*/
function halo() {
    return "Halo Sanbers!"
}
console.log(halo())

/*============ SOAL2 =============*/
function kalikan(x, y) {
    return x * y
}
var num1 = 12
var num2 = 4
var hasilKali = kalikan(num1, num2)
console.log(hasilKali)

/*============ SOAL3 =============*/
function introduce(a, b, c, d) {
    return "Nama saya " + a + ", umur saya " + b + " tahun, alamat saya di " + c + ", dan saya punya hobby yaitu " + d + "!"
}
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)

/*============ SOAL4 =============*/
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992]
var arrayBaru = {
    nama: arrayDaftarPeserta[0],
    jenis_kelamin: arrayDaftarPeserta[1],
    hobby: arrayDaftarPeserta[2],
    tahun_lahir: arrayDaftarPeserta[3]
}
console.log(arrayBaru)

/*============ SOAL5 =============*/
var data = [{ nama: "strowberry", warna: "merah", ada_bijinya: "tidak", harga: 9000 },
{ nama: "jeruk", warna: "orange", ada_bijinya: "ada", harga: 8000 },
{ nama: "semangka", warna: "hijau & merah", ada_bijinya: "ada", harga: 10000 },
{ nama: "pisang", warna: "kuning", ada_bijinya: "tidak", harga: 5000 }]
console.log(data[0])

/*============ SOAL6 =============*/
var dataFilm = []
function tambahData(nama, durasi, genre, tahun) {
    {
        dataFilm.push({ nama: nama, durasi: durasi, genre: genre, tahun: tahun })
    }
}
tambahData("Titanic", "2 jam", "Romance", 1996)
console.log(dataFilm)