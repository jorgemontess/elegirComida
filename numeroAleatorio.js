
window.onload = function myo()
{
    setTimeout(mostrarOcultar());
}


function mostrarOcultar() {
    let obj = document.getElementById("numeroComidas").value;

    switch (parseInt(obj)) {
        case 2:



            /* Muestra*/
            document.getElementById("c1").style.display = "block";
            document.getElementById("c2").style.display = "block";
    
            /* Oculta*/
            document.getElementById("imagenInicio").style.display = "none";
            document.getElementById("c3").style.display = "none";
            document.getElementById("c4").style.display = "none";
            document.getElementById("c5").style.display = "none";

            



            break;

        case 3:

            /* Muestra*/
            document.getElementById("c1").style.display = "block";
            document.getElementById("c2").style.display = "block";
            document.getElementById("c3").style.display = "block";


            /* Oculta*/
            document.getElementById("imagenInicio").style.display = "none";
            document.getElementById("c4").style.display = "none";
            document.getElementById("c5").style.display = "none";

            

            break;

        case 4:

            /* Muestra*/
            document.getElementById("c1").style.display = "block";
            document.getElementById("c2").style.display = "block";
            document.getElementById("c3").style.display = "block";
            document.getElementById("c4").style.display = "block";

            /* Oculta*/
            document.getElementById("imagenInicio").style.display = "none";
            document.getElementById("c5").style.display = "none";

            

            break;

        case 5:


            /* Muestra*/

            document.getElementById("c1").style.display = "block";
            document.getElementById("c2").style.display = "block";
            document.getElementById("c3").style.display = "block";
            document.getElementById("c4").style.display = "block";
            document.getElementById("c5").style.display = "block";


            /* Oculta*/
            document.getElementById("imagenInicio").style.display = "none";


            

            break;

        default:

            /*Muestra */
            document.getElementById("imagenInicio").style.display = "block";


            /* Oculta*/
            document.getElementById("c1").style.display = "none";
            document.getElementById("c2").style.display = "none";
            document.getElementById("c3").style.display = "none";
            document.getElementById("c4").style.display = "none";
            document.getElementById("c5").style.display = "none";
            break;

    }
}


function Aleatorio() {


    let comida1 = document.getElementById("comida1").value;
    let comida2 = document.getElementById("comida2").value;
    let comida3 = document.getElementById("comida3").value;
    let comida4 = document.getElementById("comida4").value;
    let comida5 = document.getElementById("comida5").value;

    let obj = document.getElementById("numeroComidas").value;


    var comi = new Alerta();



    switch (parseInt(obj)) {


        case 2:
            var numeroAleatorio = Math.round(Math.random() * 1) + 1;



            if (numeroAleatorio == 1) {


                comi.setComida(comida1);



            } else if (numeroAleatorio == 2) {

                comi.setComida(comida2);


            }
            break;

        case 3:
            var numeroAleatorio = Math.round(Math.random() * 2) + 1;

            console.log(numeroAleatorio);

            if (numeroAleatorio == 1) {

                comi.setComida(comida1);

            } else if (numeroAleatorio == 2) {

                comi.setComida(comida2);

            } else if (numeroAleatorio == 3) {


                comi.setComida(comida3);

            }
            break;

        case 4:
            var numeroAleatorio = Math.round(Math.random() * 3) + 1;

            if (numeroAleatorio == 1) {

                comi.setComida(comida1);

            } else if (numeroAleatorio == 2) {

                comi.setComida(comida2);

            } else if (numeroAleatorio == 3) {

                comi.setComida(comida3);

            } else if (numeroAleatorio == 4) {

                comi.setComida(comida4);

            }

            break;

        case 5:
            var numeroAleatorio = Math.round(Math.random() * 4) + 1;

            console.log(numeroAleatorio);

            if (numeroAleatorio == 1) {

                comi.setComida(comida1);

            } else if (numeroAleatorio == 2) {

                comi.setComida(comida2);

            } else if (numeroAleatorio == 3) {

                comi.setComida(comida3);

            } else if (numeroAleatorio == 4) {

                comi.setComida(comida4);

            } else if (numeroAleatorio == 5) {

                comi.setComida(comida5);
            }

            break;
    }
}


/* Funcion para mostrar y ocultar */




/* Funcion para mostrar la alerta, se creó con un constructor*/

var Alerta = function() {

    let comida1 = document.getElementById("comida1").value;
    let comida2 = document.getElementById("comida2").value;
    let comida3 = document.getElementById("comida3").value;
    let comida4 = document.getElementById("comida4").value;
    let comida5 = document.getElementById("comida5").value;


    //Este es el constructor para mostrar la alerta y cambiar variables en otra funcion

    this.comida = comida1;

    this.setComida = function(comida) {
        this.comida = comida;
    }

    this.getcomida = function() {
        return this.comida;
    }


    Swal.fire({
        type: 'question',
        title: 'Comida Aleatoria',
        html: 'Su comida estará lista en:  <strong> </strong> segundos',
        timer: 1500, //tiempo del timer
        onBeforeOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
                Swal.getContent().querySelector('strong')
                    .textContent = Swal.getTimerLeft()
            }, 100)
        },
        onClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        if (
            // Read more about handling dismissals
            result.dismiss === Swal.DismissReason.timer
        ) {
            Swal.fire({
                type: 'success',
                title: 'Listo!',
                text: 'Hoy toca comer: ' + this.comida,
            });
        }
    });
}