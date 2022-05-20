//Informacion de las cuentas creadas
let cuentas = {
    '000001' : {
        nombre : "Michael De Santa",
        pin: 1111,
        saldo : 500,

    },
    '000002' : {
        nombre : "Franklin Clinton",
        pin: 2222,
        saldo : 500,

    },
    '000003' : {
        nombre : "Trevor Philips",
        pin: 3333,
        saldo : 500,

    }
}

let cuentaActiva = ""


function validate(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if ((Object.keys(cuentas).includes(username))&&(cuentas[username].pin == password)){
        cuentaActiva = username;
        
        document.getElementById("login").style.display='none';//hide login
        document.getElementById("menu").style.display='block';//show menu
        document.getElementById("saldo").style.display='none';//hide balance
        document.getElementById("deposito").style.display='none';//hide depositar
        document.getElementById("retiro").style.display='none';//hide retirar


        datos(cuentaActiva)
        return false;
    }
    else{
        alert("Inicio de sesión fallido, inténtelo nuevamente.")
    }
}

function datos(cuentaActiva	){
    document.getElementById("saludo").innerHTML = "Bienvenido "+cuentas[cuentaActiva].nombre;
}

function consultar(cuentaActiva){
    document.getElementById("menu").style.display='none';//hide menu
    document.getElementById("login").style.display='none';//hide login
    document.getElementById("saldo").style.display='block';//show balance
    document.getElementById("deposito").style.display='none';//hide depositar
    document.getElementById("retiro").style.display='none';//hide retirar

    document.getElementById("balance").innerHTML = `\$ ${cuentas[cuentaActiva].saldo} MXN`;
}

function regresar(){
    document.getElementById("menu").style.display='block';//show menu
    document.getElementById("login").style.display='none';//hide login
    document.getElementById("saldo").style.display='none';//hide balance
    document.getElementById("deposito").style.display='none';//hide depositar
    document.getElementById("retiro").style.display='none';//hide retirar

}

function depositar(){
    document.getElementById("menu").style.display='none';//hide menu
    document.getElementById("login").style.display='none';//hide login
    document.getElementById("saldo").style.display='none';//hide balance
    document.getElementById("deposito").style.display='block';//show depositar
    document.getElementById("retiro").style.display='none';//hide retirar
}

function sumar(cuentaActiva){
    let monto = parseInt(document.getElementById("cantidadDepositada").value);
    //Sumar si es un numero positivo, no es NaN y el resultado de la suma es igual o menor a 990
    if ((monto > 0)&&(monto != NaN)){       
        total = parseInt(cuentas[cuentaActiva].saldo) + monto;
        if (total <= 990){
            cuentas[cuentaActiva].saldo = total;
            consultar(cuentaActiva);
        }
        else{
            alert("Esta transacción supera el límite de la cuenta. Por favor intenta con una cantidad menor.")
        }
        
    }
    else{
        alert("Por favor ingresar una cantidad en NUMERO ENTERO POSITIVO")
    }
    
}

function retirar(){
    document.getElementById("menu").style.display='none';//hide menu
    document.getElementById("login").style.display='none';//hide login
    document.getElementById("saldo").style.display='none';//hide balance
    document.getElementById("deposito").style.display='none';//show depositar
    document.getElementById("retiro").style.display='block';//hide retirar
}

function restar(cuentaActiva){
    let monto = parseInt(document.getElementById("cantidadRetirada").value);
    //Sumar si es un numero positivo, no es NaN y el resultado de la suma es igual o menor a 990
    if ((monto > 0)&&(monto != NaN)){
        //cantidad a retirar menor a total
        if ((monto < parseInt(cuentas[cuentaActiva].saldo))&&((parseInt(cuentas[cuentaActiva].saldo)-monto)>= 10)){
            total = parseInt(cuentas[cuentaActiva].saldo) - monto;
            cuentas[cuentaActiva].saldo = total;
            consultar(cuentaActiva);
        }
        else{
            alert("La cantidad a retirar excede el lmimite de saldo minimo de $10 en tu cuenta. Por favor intenta con otra cantidad.")
        }
    }
    else{
        alert("Por favor ingresar una cantidad en NUMERO ENTERO POSITIVO")
    }
    
}

function salir(){
    cuentaActiva = "";
    location.href =("index.html");
}

