// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element
const form = document.getElementById("form")
const userName = document.getElementById("username")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")
const terms = document.querySelector("#terms")
const errors = document.querySelector(".errors")

const errorsList = document.querySelector(".errors-list")

form.addEventListener("submit", (e) => {
  const validationsErrors = []
  clearErrors()

  if (userName.value.length < 6) {
    validationsErrors.push("Username has to be at teast 6 characters long")
  }

  if (password.value.length < 10) {
    validationsErrors.push("Password has to be at teast 10 characters long")
  }

  if (
    passwordConfirmation.value.length < 10 ||
    password.value !== passwordConfirmation.value
  ) {
    validationsErrors.push("Password confirmation has to be equal password")
  }

  if (!terms.checked) {
    validationsErrors.push("Terms has to be checked")
  }

  if (validationsErrors.length > 0) {
    showErrors(validationsErrors)

    e.preventDefault()
  }
})

// TODO: Create an event listener for when the form is submitted and do the following inside of it.
//    TODO: Create an array to store all error messages and clear any old error messages
//    TODO: Define the following validation checks with appropriate error messages
//      1. Ensure the username is at least 6 characters long
//      2. Ensure the password is at least 10 characters long
//      3. Ensure the password and confirmation password match
//      4. Ensure the terms checkbox is checked
//    TODO: If there are any errors then prevent the form from submitting and show the error messages

// TODO: Define this function
function clearErrors() {
  while (errorsList.lastElementChild) {
    errorsList.removeChild(errorsList.lastElementChild)
  }

  errors.classList.remove("show")
  // Loop through all the children of the error-list element and remove them
  // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
  // I recommend using a while loop to accomplish this task
  // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
  // Also, make sure you remove the show class to the errors container
}

// TODO: Define this function
function showErrors(errorMessages) {
  errorMessages.forEach((ve) => {
    const errorLiElement = document.createElement("li")
    errorLiElement.innerText = ve
    errorsList.appendChild(errorLiElement)
  })

  errors.classList.add("show")
  // Add each error to the error-list element
  // Make sure to use an li as the element for each error
  // Also, make sure you add the show class to the errors container
}
