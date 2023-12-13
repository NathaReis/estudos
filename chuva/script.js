const time = 2000

        function rain()
        {
            const cloud = document.querySelector(".cloud")
            const e = document.createElement('div')
            let left = Math.floor(Math.random() * 310)
            let width = Math.random() * 5
            let height = Math.random() * 50
            let duration = Math.random() * .5

            e.classList.add('drop')
            cloud.appendChild(e)
            e.style.left = left + 'px'
            e.style.width = width + 'px'
            e.style.height = height + 'px'
            e.style.animationDuration = 1 + duration + 's'

            setTimeout(() =>
            {
                cloud.removeChild(e)
            }, time)
        }

        setInterval(() =>
        {
            rain()
        }, time * 0.02)

        const btn = document.createElement("button")
        btn.style.display = 'none'
        btn.onclick = () =>
        {
            document.querySelector("audio").play()
            document.querySelector("audio").volume = .1
        }
        document.querySelector(".container").appendChild(btn)
        btn.click()