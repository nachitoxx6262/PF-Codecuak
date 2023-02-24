
const onlyText = /^[^0-9]*$/
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const regexPassword = /^(?=.*[A-Z])(?=.*\d).{1,8}$/

export const validations = ({name,email,nickName,password}) =>{
    const errors = {}
    if(name.length < 3 || name.length > 30){errors.name = "Debe agregar un nombre entre 3 y 30 caracteres"} 
    if(!onlyText.test(name)) {errors.name = "No se permiten numeros"}
    if(!name){errors.name = "Ingrese un nombre"} 

    if(!regexEmail.test(email)){errors.email = "Ingrese un email valido"}
    if(email.length < 0){errors.email = "Ingrese un email"}

    if(nickName.length < 3 || nickName.length > 10){errors.nickName = "Debe agregar un nombre de entre tres y diez caracteres"} 

    if(regexPassword.test(password)){errors.password = "Debe contener al menos una mayuscula, un numero y una longitud de ocho caracteres"}
    return errors
}

