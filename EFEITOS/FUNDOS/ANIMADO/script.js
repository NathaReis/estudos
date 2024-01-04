const bolhas = document.querySelectorAll(".bolhas")
const qnt_max = 100
const qnt_min = 1
const max_vel = 50
const min_vel = 10

bolhas.forEach(bolhaBox =>
    {
        const random_qnt = Math.floor(Math.random() * qnt_max) + qnt_min
        for(let i = 1; i <= random_qnt; i++)
        {
            const random = Math.floor(Math.random() * max_vel) + min_vel
            const span = document.createElement('span')
            span.style = `--i:${random}`
            bolhaBox.appendChild(span)
        }        
    })