class PlayAudio {
    constructor(alifBet, audio) {
        this.alifBet = alifBet;
        this.audio = audio;
    }
    playSound = () => {
        this.alifBet.addEventListener('click', () => {
            this.audio.play()
        })
    }
}

const audioAlif = document.getElementById("audioAlif")
const audioBaa = document.getElementById("audioBaa")
const audioTaa = document.getElementById("audioTaa")
const audioThaa = document.getElementById("audioThaa")
const audioJiim = document.getElementById("audioJiim")
const audioHaa = document.getElementById("audioHaa")

const alif = document.getElementById("alif");
const baa = document.getElementById("baa");
const taa = document.getElementById("taa");
const thaa = document.getElementById("thaa");
const jiim = document.getElementById("jiim");
const haa = document.getElementById("haa");

const sayAlif = new PlayAudio(alif, audioAlif);
sayAlif.playSound();

const sayBaa = new PlayAudio(baa, audioBaa);
sayBaa.playSound();

const sayTaa = new PlayAudio(taa, audioTaa);
sayTaa.playSound();

const sayThaa = new PlayAudio(thaa, audioThaa);
sayThaa.playSound();

const sayJiim = new PlayAudio(jiim, audioJiim);
sayJiim.playSound();

const sayHaa = new PlayAudio(haa, audioHaa);
sayHaa.playSound();