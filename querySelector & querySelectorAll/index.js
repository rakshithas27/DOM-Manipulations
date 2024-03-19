const fruits = document.querySelector('.fruits')
fruits.style.backgroundColor='gray'
fruits.style.padding='30px'
fruits.style.margin='30px'
fruits.style.width='50%'
fruits.style.borderRadius='5px'
fruits.style.listStyleType='none'

const query = document.querySelector('#basket-heading')
query.style.color='brown'

const fruit = document.querySelectorAll('.fruit')
for(let i=0; i<fruit.length; i++){
    fruit[i].style.backgroundColor='brown'
    fruit[i].style.color='white'
    fruits.style.padding='10px'
    fruits.style.margin='10px'
    fruits.style.borderRadius='5px'
}

const odd = document.querySelectorAll('.fruit:nth-child(odd)')
for(let i=0; i<odd.length; i++) {
    odd[i].style.backgroundColor='white'
    odd[i].style.color='brown'
}



