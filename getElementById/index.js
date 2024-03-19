const heading = document.getElementById('main-heading')
heading.textContent='Fruit World'
heading.style.color='orange'

const div = document.getElementById('header')
div.style.backgroundColor='green'
div.style.borderBottom=' 3px solid orange'

const change = document.getElementById('basket-heading')
change.style.color='green'

const para =  document.getElementById('thanks')
let newPara = document.createElement('p')

newPara.textContent='Please visit us again'

para.appendChild(newPara)
