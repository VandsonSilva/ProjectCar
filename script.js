const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const container = document.querySelector('.container')
const items = container.querySelectorAll('.list .item')
const idicators = document.querySelector('.indicators')
const dots = idicators.querySelectorAll('ul li')
const list = container.querySelector('.list')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

function alterInformation() {

    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    items[active].classList.add('active')

    let dotsOld = idicators.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    idicators.querySelector('.number').innerHTML = "0" + (active + 1)
}


prevButton.onclick = () => {
    active = active - 1 < firstPosition ? lastPosition : active - 1
    alterInformation()

    list.style.setProperty('--calculation', -1)
}

nextButton.onclick = () => {
    active = active + 1 > lastPosition ? 0 : active + 1
    alterInformation()

    list.style.setProperty('--calculation', 1)

}

