console.log("============= soal 1 ===============")
class Animal {
    constructor(nama) {
        this.nama = nama
        this._kaki = 4
        this._darah = false
    }
    get name() {
        return this.nama
    }
    get legs() {
        return this._kaki
    }
    get cold_blooded() {
        return this._darah
    }
    set legs(x) {
        this._kaki = x
    }
}
let sheep = new Animal("shaun");
console.log(sheep.name)
console.log(sheep.legs)
console.log(sheep.cold_blooded)

class Ape extends Animal {
    constructor(nama) {
        super(nama);
    }
    yell() {
        return "Auooo";
    }
}
class Frog extends Animal {
    constructor(nama) {
        super(nama);
    }
    jump() {
        return "hop hop";
    }
}

let sungokong = new Ape("kera sakti")
sungokong.legs = 2
console.log(sungokong.name)
console.log(sungokong.legs)
console.log(sungokong.cold_blooded)
console.log(sungokong.yell())

let kodok = new Frog("buduk")
console.log(kodok.name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)
console.log(kodok.jump())


console.log("============= soal 2 ===============")
class Clock {
    constructor({ template }) {
        this.template = template
    }
    render() {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
        console.log(output);
    }
    stop() {
        clearInterval(this.timer);
    };
    start() {
        this.render();
        this.timer = setInterval(this.render.bind(this), 1000);
    };
}
let clock = new Clock({ template: 'h:m:s' });
clock.start(); 