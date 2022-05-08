var form = document.querySelector("form")

form.addEventListener("submit",function(event){
    event.preventDefault()

    var data = {
        username:form.username.value,
        email:form.email.value,
        password:form.password.value,
        enter:form.enter.value,
    }
    localStorage.setItem("signupdata",JSON.stringify(data));
    window.location.href="./loginpage/login.html"
})

