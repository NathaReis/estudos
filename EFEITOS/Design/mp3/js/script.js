const $audio = document.querySelector("audio")
const $title = document.querySelector(".title")
const $img = document.querySelector(".img")
const $recado = document.querySelector(".recado")
const $btns = document.querySelectorAll(".controls svg")
const $play = document.querySelector("#play")
const $pause = document.querySelector("#pause")
const $last = document.querySelector("#last")
const $next = document.querySelector("#next")
const $random = document.querySelector("#random")
const $reload = document.querySelector("#reload")
const $perfil = document.querySelector(".perfil")

const config = {
    vol: .5,
    ind: 0,
    ran: false,
    block_list: []
}

const musics = [
    {
        nome: 'Meu Bem Querer',
        recados: 'Meiga',
        src: './music/meu_bem_querer.mp3',
        img: './img/perfil_t.jpg'
    },
    {
        nome: 'Abismo',
        recados: 'Meiga',
        src: './music/abismo.mp3',
        img: './img/perfil_t.jpg'
    },
    {
        nome: 'De Olhos Abertos',
        recados: 'Meiga',
        src: './music/de_olhos_abertos.mp3',
        img: './img/perfil_t.jpg'
    },
]

const f_selected_music = () =>
{
    if(config.ran)
    {        
        let pos_ran = Math.floor(Math.random() * musics.length - 1) + 1
        let cont = 1;//Valida a qnt de vezes do loop
        //Validar se a música já foi usada
        while(config.block_list.includes(pos_ran))
        {
            if(cont > musics.length)
            {
                config.block_list = []
            }
            pos_ran = Math.floor(Math.random() * musics.length - 1) + 1
            cont++
        }

        config.ind = pos_ran
        config.block_list.push(pos_ran)
    }
    else 
    {
        config.block_list = []
    }

    const pos = config.ind
    $audio.src = musics[pos].src
    $title.innerHTML = musics[pos].nome
    $recado.innerHTML = musics[pos].recados
    $img.src = musics[pos].img
    $audio.volume = config.vol
}//Select music
f_selected_music()

const f_ran = () =>
{
    $random.classList.toggle('control-random-selected')
    const classes = $random.classList
    let cont = 0
    classes.forEach(classe =>
        {
            if(classe == 'control-random-selected')
            {
                cont++
            }//Soma 1 caso ela exista
        })//Valida  a existência da classe
    if(cont > 0)
    {
        config.ran = true
    }//Se não existir a classe random
    else 
    {
        config.ran = false
    }//Se existir a classe random
}//Random
$random.onclick = () => f_ran();

const f_play = () =>
{
    $audio.play()
    f_selected($play)
}//Play
$play.onclick = () => f_play();

const f_pause = () =>
{
    $audio.pause()
    f_selected($pause)
}//Pause
$pause.onclick = () => f_pause();

const f_reload = () =>
{
    $audio.currentTime = 0
}//Reload
$reload.onclick = () => f_reload();

const f_next = () =>
{
    const pos_atual = config.ind
    if(pos_atual + 2 > musics.length)
    {
        config.ind = 0
    }
    else 
    {
        config.ind = pos_atual + 1
    }
    f_selected($pause)
    f_selected_music()
}//Next
$next.onclick = () => f_next();

const f_last = () =>
{
    const pos_atual = config.ind
    if(pos_atual - 1 < 0)
    {
        config.ind = musics.length - 1
    }
    else 
    {
        config.ind = pos_atual - 1
    }
    f_selected($pause)
    f_selected_music()
}//Last
$last.onclick = () => f_last();

const f_selected = (button) =>
{
    if(button.id == 'play' || button.id == 'pause')
    {
        if(button.id == 'play')
        {
            button.classList.add('control-hide')
            $pause.classList.remove('control-hide')
        }
        else
        {
            button.classList.add('control-hide')
            $play.classList.remove('control-hide')
        }
    }
}//Style

$perfil.addEventListener("click", () =>
{
    $perfil.classList.toggle('muted')
    const classes = $perfil.classList
    let cont = 0
    classes.forEach(classe =>
        {
            if(classe == 'muted')
            {
                cont++
            }//Soma 1 caso ela exista
        })//Valida  a existência da classe
    if(cont > 0)
    {
        config.vol = 0
    }//Se não existir a classe muted
    else 
    {
        config.vol = .5
    }//Se existir a classe muted
    $audio.volume = config.vol
})