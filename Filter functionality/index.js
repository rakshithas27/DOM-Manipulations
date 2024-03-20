// Add input element inside form, before button, to take fruit description
const form = document.querySelector('form')
const formButton = document.querySelector('button')
const input = document.createElement('input')
input.type='text'
input.name='description'
input.placeholder='Fruit description'
input.id='description'
form.insertBefore(input,formButton)


// Show the fruit description in italics on the next line

const fruits = document.querySelector('.fruits')
const fruitsToAdd = document.getElementById('fruit-to-add')
const descriptionToAdd = document.getElementById('description')

form.addEventListener('submit' ,function(event) {
    event.preventDefault()

    const newLi = document.createElement('li')
    const newLiTextFruit = document.createTextNode(fruitsToAdd.value)
    newLi.appendChild(newLiTextFruit)

    const para = document.createElement('p')
    //const paraText = document.createTextNode(descriptionToAdd.value)
    //para.appendChild(paraText)
    const text = `${fruitsToAdd.value} : ${descriptionToAdd.value}`
    para.textContent = text
    para.style.fontStyle='italic'
    newLi.appendChild(para)

    const deleteButton = document.createElement('button')
    const deleteButtonText = document.createTextNode('X')
    deleteButton.appendChild(deleteButtonText)
    deleteButton.className='delete-btn'

    newLi.appendChild(deleteButton)
    newLi.className='fruit'

    fruits.appendChild(newLi)

    console.log(newLi)
})

// Create a filter that shows only those fruits whose either name or description or both matches the entered text

const filter = document.getElementById('filter')


filter.addEventListener('keyup', function(event) {
    const textEntered = event.target.value.toLowerCase()
    const fruitItems = document.getElementsByClassName('fruit')
    for(let i=0; i<fruitItems.length; i++) {
        const currentFruitText = fruitItems[i].firstChild.textContent.toLowerCase()
        const currentFruitDesc = fruitItems[i].firstElementChild.firstChild.textContent.toLowerCase()
        if(currentFruitText.indexOf(textEntered) === -1 && currentFruitDesc.includes(textEntered) === false) {
            fruitItems[i].style.display='none'
        } else {
            fruitItems[i].style.display='flex'
        }
    } 
})

