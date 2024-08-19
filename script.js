const header = document.querySelector('header'),
navBtn = document.querySelector('.menuToggle'),
home = document.querySelector('.home'),
anggota = document.querySelector('.anggota'),
jadwal = document.querySelector('.jadwal'),
piket = document.querySelector('.piket'),
Home = document.querySelector('#hhome'),
Anggota = document.querySelector('#aanggota'),
Jadwal = document.querySelector('#jjadwal'),
Piket = document.querySelector('#ppiket')

navBtn.addEventListener('click', function () {
    header.classList.toggle('active')
    home.classList.toggle('active')
    anggota.classList.toggle('active')
    jadwal.classList.toggle('active')
    piket.classList.toggle('active')
    
})

Home.addEventListener('click', function () {
    home.style.display = 'flex'
    anggota.style.display = 'none'
    jadwal.style.display = 'none'
    piket.style.display = 'none'
})

Jadwal.addEventListener('click', function () {
    home.style.display = 'none'
    anggota.style.display = 'none'
    piket.style.display = 'none'
    jadwal.style.display = 'flex'
})

Anggota.addEventListener('click', function () {
    home.style.display = 'none'
    anggota.style.display = 'grid'
    jadwal.style.display = 'none'
    piket.style.display = 'none'
})

Piket.addEventListener('click', function () {
    home.style.display = 'none'
    anggota.style.display = 'none'
    jadwal.style.display = 'none'
    piket.style.display = 'flex'
})

const jdBx = document.querySelectorAll('.jadwal-bx'),
jdTl = document.querySelectorAll('.jd-title'),
ptBx = document.querySelectorAll('.piket-bx'),
ptTl = document.querySelectorAll('.pt-title')

// for (var i = 0;i < jdTl.length;i++) {
//     jdTl[i].onmouseover = function () {
//         jdBx[i].classList.toggle('active')
//     }
// } 

// let list = document.querySelectorAll('.list')
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