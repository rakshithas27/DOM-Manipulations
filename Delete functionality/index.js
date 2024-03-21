function handleFormSubmit(event){
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
    const newLi = document.createElement('li');
    newLi.innerHTML = `Username: ${username} , Email: ${email} , Phone: ${phone}`

    const deleteButton = document.createElement('button')
    const deleteButtonText = document.createTextNode('delete')
    deleteButton.appendChild(deleteButtonText)
    newLi.appendChild(deleteButton)

    deleteButton.addEventListener('click', function() {
        newLi.remove()
        localStorage.removeItem(email)
    })

    const userList = document.querySelector('#addList');
    userList.appendChild(newLi);

    const obj = {
        username: username,
        email: email,
        phone: phone
    };
 const newobj = JSON.stringify(obj);
 localStorage.setItem(email, newobj);
}
