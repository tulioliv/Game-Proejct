    let scoreInicial = 0

    const mario = document.querySelector('.mario')
    const pipe = document.querySelector('.pipe')
    const cloud = document.querySelector('.clouds')
    const contador = document.getElementById('score')

    function iniciar() {
        
    }

function score() {
        

        if (pipePosition == marioPosition) {
            scoreInicial++
            contador.innerHTML = scoreInicial

        }
    }



const jump = () => {
    mario.classList.add('jump')

    setTimeout(()=> {
        mario.classList.remove('jump')

    }, 500)

}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const cloudPosition = window.getComputedStyle(cloud).bottom
  

    if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 110)  {

        

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        cloud.style.animation = 'none'
        cloud.style.right = `${cloudPosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src="./imagens/game-over.png"
        mario.style.width = '70px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    }


}, 10)

document.addEventListener('keydown', jump, score)

