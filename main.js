var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var birthday = document.getElementById("birthday");
var email = document.getElementById("email");
var option = document.getElementById("option");
var submit = document.getElementById("submit-btn");


function submitHandler() {
  var d = new Date();
  // console.log(birthday.value);
  if (firstName.value.length < 60 && firstName.value != "@" && firstName.value != "#" && firstName != "!" && firstName != "$" && firstName != "%" && firstName != "/" && firstName != ":" && firstName != ";" && firstName.value != "^" && firstName.value != "*" && firstName.value != "&" && firstName.value != "`" && firstName.value != "~" && firstName.value != "+" && firstName.value != "=" &&
    lastName.value.length < 60 && lastName.value != "@" && lastName.value != "#" && lastName != "!" && lastName != "$" && lastName != "%" && lastName != "/" && lastName != ":" && lastName != ";" && lastName.value != "^" && lastName.value != "*" && lastName.value != "&" && lastName.value != "`" && lastName.value != "~" && lastName.value != "+" && lastName.value != "=" &&
    // birthday.value.getFullYear() < d.getFullYear() &&
    email.value.includes("@") && email.value.includes(".") &&
    option.value == "option1" || option.value == "option2") 
  {
    localStorage.setItem("name1", firstName.value)
    localStorage.setItem("name2", lastName.value)
    window.location.href = '/index2.html';
  } else {
    alert("Please check the form")
  }
}


let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitHandler();
})
