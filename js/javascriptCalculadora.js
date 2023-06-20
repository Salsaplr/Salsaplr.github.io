function operaciones(){
    let op = document.getElementById('seleccion').value;
    switch (op) {
        case "SUMAR":
            sumar();
            console.log('suma');
            break;

        case "RESTAR":
            restar();
            console.log('resta');
            break;

        case "MULTIPLICAR":
            multiplicar();
            console.log('multiplica');
            break;
        
        case "DIVIDIR":
            console.log('divide');
            dividir();
            break;

        default:
            console.log('Por defecto');
            break;
    }
}


function dividir(){
    let valSum1 = parseInt(document.getElementById('sNum1').value);
    let valSum2 = parseInt(document.getElementById('sNum2').value);
    document.write(valSum1/valSum2);
} 

function multiplicar(){
    let valSum1 = parseInt(document.getElementById('sNum1').value);
    let valSum2 = parseInt(document.getElementById('sNum2').value);
    document.write(valSum1*valSum2);
}

function restar(){
    let valSum1 = parseInt(document.getElementById('sNum1').value);
    let valSum2 = parseInt(document.getElementById('sNum2').value);
    document.write(valSum1-valSum2);
} 


function sumar(){
    let valSum1 = parseInt(document.getElementById('sNum1').value);
    let valSum2 = parseInt(document.getElementById('sNum2').value);
    console.log(valSum1,valSum2);
    document.write(valSum1+valSum2).innerHTML;
}

function limpiar(){
    console.log('Se envió');
    form.reset();
}