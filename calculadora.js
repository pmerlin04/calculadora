var numero1 = document.getElementById('valor1')
var numero2 = document.getElementById('valor2')
var resp = document.getElementById('res')

function somar(){
    var n1 = Number(numero1.value)
    var n2 = Number(numero2.value)
    var soma = n1+n2
    resp.innerHTML=soma
}

function subtrair(){
    var n1 = Number(numero1.value)
    var n2 = Number(numero2.value)
    var sub = n1-n2
    resp.innerHTML=sub
}

function dividir(){
    var n1 = Number(numero1.value)
    var n2 = Number(numero2.value)
    var div = n1/n2
    resp.innerHTML=div
}

function multiplicar(){
    var n1 = Number(numero1.value)
    var n2 = Number(numero2.value)
    var mult = n1*n2
    resp.innerHTML=mult
}




    