const $audio = document.querySelector("audio")
const src = ''
$audio.src = src 

const $play = document.querySelector("#play")
const $btn = document.querySelector(".button")


$play.onclick = () => control()
$btn.onclick = () => control

const control = () =>
{
    $play.classList.toggle("play")
    $play.classList.toggle("pause")

    if($play.classList[1] == 'play')
    {
        $audio.play()
    }
    else 
    {
        $audio.pause()
    }

    if($btn.innerHTML == 'Play')
    {
        $audio.play()
        $btn.innerHTML = 'Pause'
    }
    else 
    {
        $audio.pause()
        $btn.innerHTML = 'Play'
    }
}