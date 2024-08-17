function validateForm(){
    let name = document.forms["myForm"]["name"].value;
    if(name=="") {
        alert("Falta el nombre!");
        return false;
    } 
}
