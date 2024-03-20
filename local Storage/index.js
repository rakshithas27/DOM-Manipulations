function handleFormSubmit(event) {
  event.preventDefault()

  const name = event.target.username.value
  const mail = event.target.email.value
  const phone = event.target.phone.value

  let myObj = {
    Username: name,
    Email: mail,
    Phone: phone
  }

  let jsonObj = JSON.stringify(myObj)
  localStorage.setItem('User Details', jsonObj)
  
}
