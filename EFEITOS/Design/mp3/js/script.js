const $audio = document.querySelector("#musica")
const $click = document.querySelector("#efeito")
const $title = document.querySelector(".title")
const $img = document.querySelector(".img")
const $recado = document.querySelector(".recado")
const $btns = document.querySelectorAll(".controls svg")
const $vols = document.querySelectorAll(".v")
const $play = document.querySelector("#play")
const $pause = document.querySelector("#pause")
const $last = document.querySelector("#last")
const $next = document.querySelector("#next")
const $random = document.querySelector("#random")
const $reload = document.querySelector("#reload")
const $perfil = document.querySelector(".perfil")
const $progress = document.querySelector("#progress")
const $vol_plus = document.querySelector(".vol_plus")
const $vol = document.querySelector(".vol")
let intervalo;

const config = {
    vol: 1,
    ind: 0,
    ran: false,
    block_list: []
}

const musics = [
    {
        nome: 'Abismo',
        recados: 'ESPERTA',
        src: '../music/abismo.mp3',
        img: '../img/p_um.jpg'
    },
    {
        nome: 'De Olhos Abertos',
        recados: 'LINDA',
        src: '../music/de_olhos_abertos.mp3',
        img: '../img/p_dois.jpg'
    },
    {
        nome: 'Meu Bem Querer',
        recados: 'MEIGA',
        src: '../music/meu_bem_querer.mp3',
        img: '../img/p_tres.jpg'
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
            if(cont >= musics.length)
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
    intervalo = setInterval(() =>
    {
        $progress.min = 0
        $progress.max = $audio.duration
        $progress.value = $audio.currentTime
        if($audio.currentTime == $audio.duration)
        {
            f_pause()
        }
    },1)
    f_selected($play)
}//Play
$play.onclick = () => f_play();

const f_pause = () =>
{
    $audio.pause()
    clearInterval(intervalo)
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
    f_pause()
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
    f_pause()
    f_selected_music()
}//Last
$last.onclick = () => f_last();

const f_vol_plus = () =>
{
    config.vol = config.vol + .1
    $audio.volume = config.vol
}
$vol_plus.onclick = () => f_vol_plus()

const f_vol = () =>
{
    config.vol = config.vol - .1
    $audio.volume = config.vol
}
$vol.onclick = () => f_vol()

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
    $img.classList.toggle('hide')
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
})//Style

$click.volume = .02
$btns.forEach(btn =>
    {
        btn.addEventListener("mousedown", () =>
        {
            $click.play()
            btn.classList.toggle('control-selected')
        })

        btn.addEventListener("mouseup", () =>
        {
            $click.play()
            btn.classList.toggle('control-selected')
        })
        btn.addEventListener("touchstart", () =>
        {
            $click.play()
            btn.classList.toggle('control-selected')
        })
        btn.addEventListener("touchend", () =>
        {
            $click.play()
            btn.classList.toggle('control-selected')
        })
    })//Click
$vols.forEach(vol =>
    {
        vol.addEventListener("mousedown", () =>
        {
            vol.classList.toggle('vol-selected')
        })

        vol.addEventListener("mouseup", () =>
        {
            vol.classList.toggle('vol-selected')
        })
        vol.addEventListener("touchstart", () =>
        {
            vol.classList.toggle('vol-selected')
        })
        vol.addEventListener("touchend", () =>
        {
            vol.classList.toggle('vol-selected')
        })
    })//Click
