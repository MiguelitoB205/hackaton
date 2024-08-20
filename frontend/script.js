function validateForm(){
    let name = document.forms["myForm"]["name"].value;
    let email = document.forms["myForm"]["email"].value;
    let passowrd = document.forms["myForm"]["password"].value;
    
    

    if (name=="" || email=="" || passowrd=="") {
        alert("Ops! Los datos están incorrectos")
        return false;
    } 
    
}
