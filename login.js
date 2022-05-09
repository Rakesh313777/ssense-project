var form = document.querySelector("form")
   var userData=JSON.parse(localStorage.getItem
   ("userData"))
   

    form.addEventListener("submit",function(event){    

      event.preventDefault()
        var data = {
          email:form.email.value,
          password:form.password.value,
      }

      if(userData===null){
          alert("create your account")
      }
      else if(userData.email == data.email && userData.password == data.password){
        //   alert("login Successful")
          localStorage.setItem("login",JSON.stringify
         (userData))
         window.location.href="home.html"
      }
      else{
       alert("User does not exist")
    }
      
   
    })