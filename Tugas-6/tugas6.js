/*=========== Soal 1 =============*/
const luasLingkaran = (r) => Math.PI * Math.pow(r, 2)
console.log(luasLingkaran(10));
let kelLingkaran = (jari) => 2 * Math.PI * jari;
console.log(kelLingkaran(10));

/*=========== Soal 2 =============*/
let kalimat = ""
const tambahKata = (...input) => {
    kalimat += `${input + " "}`
};

tambahKata("saya");
tambahKata("adalah");
tambahKata("seorang");
tambahKata("frontend");
tambahKata("developer");
console.log(kalimat);

/*=========== Soal 3 =============*/
const newFunction = (firstName, lastName) => {
    return {
        fullName() {
            console.log(`${firstName} ${lastName}`);
        }
    }
}
newFunction("William", "Imoh").fullName();

/*=========== Soal 4 =============*/
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}
const { firstName, lastName, destination, occupation, spell } = newObject
console.log(firstName, lastName, destination, occupation);

/*=========== Soal 5 =============*/
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
console.log(combined);