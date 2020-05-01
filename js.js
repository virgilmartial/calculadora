var pantalla = document.querySelector("#pantalla")
function pulsar(tecla){
    pantalla.value += tecla;
}

function f_reset(){
    document.querySelector("#pantalla").value = "";
}

function igual(){
    document.querySelector("#pantalla").value = eval(document.querySelector("#pantalla").value);
}

function back(){
    var value = document.querySelector("#pantalla").value;
    document.querySelector("#pantalla").value = value.substring(0,value.length-1)
    
    
}

function onOff(){
    var onoff = document.querySelector(".on");
    onoff.classList.toggle("off")
    document.querySelector("#pantalla").value = "";

}

