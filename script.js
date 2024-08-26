let seksi = document.querySelectorAll('section')
let link = document.querySelectorAll('header ul li a')
let menuToggle = document.querySelector('.menuToggle')
let header = document.querySelector('header')

for (let i = 0; i < link.length; i++) {
    link[i].onclick = function () {
        let j = 0;
        while (j < link.length) {
            seksi[j++].classList.remove('active')
        }

        header.classList.remove('active')

        if (seksi[i].className === 'home') {
            seksi[i].classList.add('active')
        }
        if (seksi[i].className === 'anggota') {
            seksi[i].classList.add('active')
        }
        if (seksi[i].className === 'jadwal') {
            seksi[i].classList.add('active')
        }
        if (seksi[i].className === 'piket') {
            seksi[i].classList.add('active')
        }
        if (seksi[i].className === 'news') {
            seksi[i].classList.add('active')
        }
    }
    menuToggle.onclick = function () {
        header.classList.toggle('active')
    }
}

const jdBx = document.querySelectorAll('.jadwal-bx'),
    jdTl = document.querySelectorAll('.jd-title'),
    ptBx = document.querySelectorAll('.piket-bx'),
    ptTl = document.querySelectorAll('.pt-title')

for (let i = 0; i < jdTl.length; i++) {
    jdTl[i].onclick = function () {
        let j = 0;
        while (j < jdBx.length) {
            jdBx[j++].classList.remove('active')
        }
        jdBx[i].className = 'jadwal-bx active'
    }
}


for (let i = 0; i < ptTl.length; i++) {
    ptTl[i].onclick = function () {
        let j = 0;
        while (j < ptBx.length) {
            ptBx[j++].classList.remove('active')
        }
        ptBx[i].className = 'piket-bx active'
    }
}

const anggotaBx = document.querySelectorAll('.anggota-bx')

let kataKata = [
    '',//1
    '',//2
    '',//3
    '',//4
    '',//5
    '',//6
    '',//7
    '',//8
    '',//9
    '',//10
    '',//11
    '',//12
    '',//13
    '',//14
    '',//15
    '',//16
    '',//17
    '',//18
    '',//19
    '',//20
    '',//21
    '',//22
    '',//23
    'Jangan berhenti belajar, karena hidup tidak berhenti mengajar',//24
    '',//25
    '',//26
    'Jangan Pernah Menyerah Apapun Masalahnya, Tetaplah Berjuang Dan Berusaha',//27
    '',//28
    '',//29
    '',//30
    '',//31
    'Hidup Itu Berjalan, Jika Cape Ngegrab Aja',//32
    'Think Big And Act Now',//33
    '',//34
    ''//35
]

for (var i = 0; i < anggotaBx.length; i++) {
    let a = document.createElement('a')
    anggotaBx[i].appendChild(a)
    let texti = document.querySelectorAll('.anggota-bx a')
    texti[i].classList.add('ri-sticky-note-2-line')

}

for (var i = 0; i < anggotaBx.length; i++) {
    let div = document.createElement('letter')
    anggotaBx[i].appendChild(div)
    let divmt = document.querySelectorAll('.anggota-bx letter')
    divmt[i].className = 'anggota-mt-bx'
    divmt[i].innerHTML = `<p> ${kataKata[i]} </p><i class="ri-close-line" id="mtClose"></i>`

}

let paperBtn = document.querySelectorAll('.ri-sticky-note-2-line')
let anggotaMtBx = document.querySelectorAll('.anggota-mt-bx')
let mtClose = document.querySelectorAll('#mtClose')

for (let i = 0; i < paperBtn.length; i++) {
    paperBtn[i].onclick = function () {
        let j = 0;
        while (j < anggotaMtBx.length) {
            anggotaMtBx[j++].classList.remove('active')
        }
        anggotaMtBx[i].classList.add('active')
    }
    mtClose[i].onclick = function () {
        anggotaMtBx[i].classList.remove('active')
    }
}

let list = document.querySelector('.slider .list')
let items = document.querySelectorAll('.slider .list .item')
let dots = document.querySelectorAll('.slider .dots li')
let prev = document.getElementById('prev')
let next = document.getElementById('next')

let active = 0

let lengthItems = items.length - 1

next.onclick = function () {
    if (active + 1 > lengthItems) {
        active = 0
    } else {
        active = active + 1
    }
    reloadSlider()
}
prev.onclick = function () {
    if (active - 1 < 0) {
        active = lengthItems
    } else {
        active = active - 1
    }
    reloadSlider()
}
function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active')
    lastActiveDot.classList.remove('active')
    dots[active].classList.add('active')

}


