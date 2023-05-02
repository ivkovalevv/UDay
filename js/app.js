document.addEventListener('DOMContentLoaded', () =>{
    let main = document.querySelector('.main')
    let heading = document.querySelector('.heading')
    let wrapper = document.querySelector('.wrapper')
    let front = document.querySelectorAll('.front')
    let back = document.querySelectorAll('.back')
    let container1 = document.querySelector('.container-1')
    let container2 = document.querySelector('.container-2')
    let container3 = document.querySelector('.container-3')
    let container4 = document.querySelector('.container-4')
    let container5 = document.querySelector('.container-5')
    let container6 = document.querySelector('.container-6')
    let container7 = document.querySelector('.container-7')
    let container8 = document.querySelector('.container-8')
    let container9 = document.querySelector('.container-9')
    let container10 = document.querySelector('.container-10')
    let container11 = document.querySelector('.container-11')
    let btnNext = document.getElementById('next')
    btnNext.disabled = true

    document.addEventListener('click', (event) =>{
        const target = event.target.dataset.card
        if(target === 'card-1'){
            const element = document.querySelector(`.${target}`);
            const removeEl = document.querySelector('.card-2')

            front.forEach(el => el.classList.add('non-visible'))
            back.forEach(el => el.classList.add('visible'))

            element.classList.add('open')
            removeEl.style.display = 'none'
            btnNext.disabled = false

        } else if(target === 'card-2'){
            const element = document.querySelector(`.${target}`);
            const removeEl = document.querySelector('.card-1')

            front.forEach(el => el.classList.add('non-visible'))
            back.forEach(el => el.classList.add('visible'))

            element.classList.add('open')
            removeEl.style.display = 'none'
            btnNext.disabled = false
        }
    })

    function next(cont1, cont2){
        btnNext.disabled = true
        cont1.classList.add('animate__backOutLeft')
            setInterval(()=>{
                cont1.style.display = 'none'
                cont1.remove()
                cont2.style.display = 'flex'
                cont2.classList.add('animate__backInRight')
            }, 1000)
    }

    btnNext.addEventListener('click', () => {
        front.forEach(el => el.classList.remove('non-visible'))
        back.forEach(el => el.classList.remove('visible'))
        let firstChild = wrapper.children[0]

        if(firstChild === container1){
            next(container1, container2)
        } else if(firstChild === container2){
            next(container2, container3)
        } else if(firstChild === container3){
            next(container3, container4)
        } else if(firstChild === container4){
            next(container4, container5)
        } else if(firstChild === container5){
            next(container5, container6)
        } else if(firstChild === container6){
            next(container6, container7)
        } else if(firstChild === container7){
            next(container7, container8)
        } else if(firstChild === container8){
            next(container8, container9)
        } else if(firstChild === container9){
            next(container9, container10)
        } else if(firstChild === container10){
            next(container10, container11)
            heading.textContent = 'Surprise!'
            btnNext.style.display = 'none'
            let link = document.createElement('a')
            link.setAttribute('href', "https://media.tenor.com/elWu7_2H9vAAAAAC/obnimashki-milo.gif")
            link.classList.add('btn-link')
            link.textContent = 'Follow'

            main.appendChild(link)
        }
    })
});