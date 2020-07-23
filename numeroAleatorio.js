
function Aleatorio()
{

    let comida1 = document.getElementById("comida1").value;
    let comida2 = document.getElementById("comida2").value;
    let comida3 = document.getElementById("comida3").value;
    let comida4 = document.getElementById("comida4").value;
    let comida5 = document.getElementById("comida5").value;

    var numeroAleatorio = (Math.round(Math.random() *4 ) + 1);

    
    if (numeroAleatorio == 1) {
        alert("Hoy toca comer: "+comida1);
    }
    else if (numeroAleatorio==2) {
        alert("Hoy toca comer : " + comida2);
    }
    else if (numeroAleatorio == 3) {
        alert("Hoy toca comer: " + comida3);
    }
    else if (numeroAleatorio == 4) {
        alert("Hoy toca comer: " + comida4);
    }
    else if (numeroAleatorio == 5) {
        alert("Hoy toca comer: " + comida5);
    }
    

}