const dino = document.getElementById('dino')
const cactus = document.getElementById('cactus')
k = 0
document.addEventListener('keydown', (e)=> {
    jump()
    count()
});

function jump() {
    if (dino.classList != 'jump ') {
        dino.classList.add('jump')
    }
    setTimeout(function() {
        dino.classList.remove('jump')
    }, 500)    
}
let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))

    if (dinoTop >=140 && cactusLeft < 40 && cactusLeft > 0) {
        alert('Конец игры')
    }
    console.log(cactusLeft)
    function count() {
        if (cactusLeft < 30) {
            k+=1
            document.querySelector('.score').innerHTML = `Счёт ${k}` 
        }
    }
}, 10)

