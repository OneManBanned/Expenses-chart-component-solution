/*VARIABLES*/

const dayAmount = document.querySelectorAll('.chart-bar-amount')
const liItems = document.querySelectorAll('.listDay')

const monday = document.querySelector('.mon')
const tuesday = document.querySelector('.tue')
const wednesday = document.querySelector('.wed')
const thursday = document.querySelector('.thu')
const friday = document.querySelector('.fri')
const saturday = document.querySelector('.sat')
const sunday = document.querySelector('.sun')

/*EVENTLISTENERS */

window.addEventListener('load', currentDayHighlight)
window.addEventListener('load', jsonData)


/*CHANGES CURRENT DAY BAR COLOR BLUE */

function currentDayHighlight() {

    const currentDate = new Date()
    const [day] = [currentDate.getDay()]

    if (day === 1) {
        monday.style.backgroundColor = 'hsl(186, 34%, 60%)'
    } else if (day === 2) {
        tuesday.style.backgroundColor = 'hsl(186, 34%, 60%)'
    } else if (day === 3) {
        wednesday.style.backgroundColor = 'hsl(186, 34%, 60%)'
    } else if (day === 4) {
        thursday.style.backgroundColor = 'hsl(186, 34%, 60%)'
    } else if (day === 5) {
        friday.style.backgroundColor = 'hsl(186, 34%, 60%)'
    } else if (day === 6) {
        saturday.style.backgroundColor = 'hsl(186, 34%, 60%)'
    } else if (day === 0) {
        sunday.style.backgroundColor = 'hsl(186, 34%, 60%)'
    }
}

/*PASRSE JSON DATA */

function jsonData() {
    fetch('data.json')
        .then((res) => res.json())
        .then((data) => {
            for (let j = 0; j < data.length; j++) {
                liItems[j].innerHTML = `${data[j].day}`
                dayAmount[j].innerHTML = `$${data[j].amount}`
            }
        })
}



