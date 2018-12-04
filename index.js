let name=document.getElementById('lastName')
let firstName=document.getElementById('firstName')
let eMail=document.getElementById('e-mail')
let password1=document.getElementById('pwd1')
let password2=document.getElementById('pwd2')

function checkConditions(){
    if(checkEmpty(name.value, "nom")||checkNbChar(name.value, "nom")) return
    if(checkEmpty(firstName.value, "prenom")||checkNbChar(firstName.value, "prenom"))return
    if(checkEmpty(eMail.value, "e-mail")||checkEmail(eMail.value))return
    if(checkEmpty(password1.value, "mot de passe")||checkEmpty(password2.value, "mot de passe de confirmation")||checkPwd(password1.value, password2.value))return
    reinit()
    alert("Felicitation vous etes enregistré!!!") 
}

function reinit(){
    inputs = document.querySelectorAll('input[type=text], input[type=password]'),
    inputsLength = inputs.length;
    for (var i = 0; i < inputsLength; i++) {
        inputs[i].value = '';
    }
}

function checkEmpty(str, label){
    if (str==='') {
        alert("Veuillez entrez un "+label+"!")
        return true
    }
}
function checkNbChar(str, label){
    if (str.length<2 || str.length>20){
        alert("Veuillez entrer un "+label+ " entre 2 et 20 caractéres")
        return true
    }
}
function checkEmail(str){
    let regex = /\b\w{3,20}@\w{3,20}\.\w{2,3}\b/g
    //bool is true if the entred email match the syntax word@word.word
    let bool= regex.test(str)
    //alert message if the entered email hasn't the specified expression
    if(!bool){
        alert("Veuillez entrer une adresse email valide ")
        return true
    }
    
}

function checkPwd(str1, str2){
    if (str1 !== str2) {
        alert("Les mots de passe ne sont pas identique")
        password2.value=''
        return true
    }
    let regex = new RegExp("^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    let bool = regex.test(str1)
    if (!bool){
        alert('Le mot de passe doit contenir un chiffre une majuscule et un caractere special [! @ # $ % ^ & *]')
        password1.value=''
        password2.value=''
        return true
    }

}

