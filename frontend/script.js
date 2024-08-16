async function llamadaPagina(){
    try{
        const respuesta =  await axios.get('/home');
        console.log(respuesta.data);
    }
    catch (error) {
        console.log(error);
    }
}

// crear nuevo registro
async function crearRegistro(){
    if (!validarNombre() || !validarApellido() || !validarCorreo() || !validarContrasena() || !validarCelular() ){
        alert ("Campos inválidos!!!")
    }
    else {
        const name = document.getElementById('name').value;
        console.log(name);
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const phone = document.getElementById('phone').value;
        try{
            const respuesta = await axios.post('bd/usuarios', {
                name: name,
                lastName: lastName,
                email: email,
                password: password,
                phone: phone
            })
            document.getElementById('respuesta').innerHTML = respuesta.data;
            if(respuesta.data){
                window.location.href = '/usuarioCreado';
            }
            console.log(respuesta.data);
        }
        catch(error){
            console.log(error);
        }
    }
}
document.getElementById('boton').addEventListener('click', crearRegistro)