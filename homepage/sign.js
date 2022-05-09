var form = document.querySelector("form")

form.addEventListener("submit", myfunction)


function myfunction() {

    event.preventDefault()

    var data = {
        username: form.username.value,
        email: form.email.value,
        password: form.password.value,
        enter: form.enter.value,
    }
    localStorage.setItem("userData", JSON.stringify(data));
    window.location.href = "login.html"
}



