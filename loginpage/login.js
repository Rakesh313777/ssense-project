var signupdata= JSON.parse(localStorage.getItem("signupdata"))
var form=documnet.querrySelector(".box")
form.addEventListener("submit", myfunction)
function myfunction(){
    event.preventDefault()

    var data={
        emailname: box.emailname.value,
        password:box.password.value,
    }
    if(signupdata == null){
        alert ("Please create an account")
    }
    else if (signupdata.emailname==data.emailname && signupdata.password==data.password)
    {
        alert("login sucessfull")
        localStorage.setItem("signupdata",JSON.stringify(signupdata))
    }
    else
    {
        alert("Wrong input")
    }
    
}