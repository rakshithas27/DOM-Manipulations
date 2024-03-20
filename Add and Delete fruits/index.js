// Add the Edit Button:
const fruit = document.querySelectorAll('.fruit')
const deleteButton=document.querySelector('.delete-btn')
fruit.forEach(element => {
    const addButton = document.createElement('button')
    const addButtonText = document.createTextNode('Edit')
    addButton.appendChild(addButtonText)
    addButton.className='edit-btn'
    element.appendChild(addButton)
});




// Implement the code as in video but with one extra 'Edit' button in 'li'
const form = document.querySelector('form')
const fruits = document.querySelector('.fruits')


form.addEventListener('submit', function(event) {
    event.preventDefault() //event is a default parameter of any event, so we want to prevent any default behaviour of the form
    const fruitsToAdd = document.getElementById('fruit-to-add')

    const newLi = document.createElement('li')
    const newLiText = document.createTextNode(fruitsToAdd.value)
    //console.log(fruitsToAdd.value)

    newLi.appendChild(newLiText)
    newLi.className='fruit'

    const deleteButton = document.createElement('button')
    const deleteButtonText = document.createTextNode('X')
    deleteButton.className='delete-btn'
    deleteButton.appendChild(deleteButtonText)
    newLi.appendChild(deleteButton)

    const editButton = document.createElement('button')
    const editButtonText = document.createTextNode('Edit')
    editButton.className='edit-btn'
    editButton.appendChild(editButtonText)
    newLi.appendChild(editButton)
    fruits.appendChild(newLi)

})

//Delete functionality

fruits.addEventListener('click', function(event) {
    if(event.target.classList.contains('delete-btn')) {
        const fruitToDelete = event.target.parentElement
        fruits.removeChild(fruitToDelete)
    }  
}) 




