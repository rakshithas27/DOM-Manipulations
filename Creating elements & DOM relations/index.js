const div = document.querySelectorAll('div')
const firstDiv = div[0]

const subHead = document.createElement('h3')
const subHeadText=document.createTextNode('Buy high quality organic fruits online')

subHead.appendChild(subHeadText)
firstDiv.appendChild(subHead)

subHead.style.fontStyle='italic'


const secondDiv = div[1]
const fruits = document.querySelector('.fruits') 

const para = document.createElement('p')
const paraText=document.createTextNode('Total fruits:4')

para.appendChild(paraText)
para.id='fruits-total'
secondDiv.insertBefore(para,fruits)

