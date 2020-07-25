


function Aleatorio() {

  
  let comida1 = document.getElementById("comida1").value;
  let comida2 = document.getElementById("comida2").value;
  let comida3 = document.getElementById("comida3").value;
  let comida4 = document.getElementById("comida4").value;
  let comida5 = document.getElementById("comida5").value;

  let obj = document.getElementById("numeroComidas").value;

 
  switch (parseInt(obj)) {


    case 2:
      var numeroAleatorio = Math.round(Math.random() * 1) + 1;

      console.log(numeroAleatorio);

      if (numeroAleatorio == 1) {


        Swal.fire({
          type: 'question',
          title: 'Comida Aleatoria',
          html: 'Su comida estará lista en:  <strong> </strong> segundos',
          timer: 2000, //tiempo del timer
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
              text: 'Hoy toca comer: ' + comida1,        
          });
          }
        });    
        
        


      } else if (numeroAleatorio == 2) {

        Alerta();

      }
      break;

    case 3:
      var numeroAleatorio = Math.round(Math.random() * 2) + 1;

      if (numeroAleatorio == 1) {
        
        Swal.fire({        
          type: 'success',
          title: 'Listo!',
          text: 'Hoy toca comer: ' + comida1,        
      });

      } else if (numeroAleatorio == 2) {

        Swal.fire({        
          type: 'success',
          title: 'Listo!',
          text: 'Hoy toca comer: ' + comida2,        
      });

      } else if (numeroAleatorio == 3) {


        Swal.fire({        
          type: 'success',
          title: 'Listo!',
          text: 'Hoy toca comer: ' + comida3,        
      });

      }
      break;

    case 4:
      var numeroAleatorio = Math.round(Math.random() * 3) + 1;

      if (numeroAleatorio == 1) {

        Swal.fire({        
          type: 'success',
          title: 'Listo!',
          text: 'Hoy toca comer: ' + comida1,        
      });

      } else if (numeroAleatorio == 2) {

        Swal.fire({        
          type: 'success',
          title: 'Listo!',
          text: 'Hoy toca comer: ' + comida2,        
      });

      } else if (numeroAleatorio == 3) {

        Swal.fire({        
          type: 'success',
          title: 'Listo!',
          text: 'Hoy toca comer: ' + comida3,        
      });

      } else if (numeroAleatorio == 4) {

        Swal.fire({        
          type: 'success',
          title: 'Listo!',
          text: 'Hoy toca comer: ' + comida4,        
      });

      }

      break;

    case 5:
      var numeroAleatorio = Math.round(Math.random() * 4) + 1;

      if (numeroAleatorio == 1) {

        Swal.fire({        
          type: 'success',
          title: 'Listo!',
          text: 'Hoy toca comer: ' + comida1,        
      });

      } else if (numeroAleatorio == 2) {

        Swal.fire({        
          type: 'success',
          title: 'Listo!',
          text: 'Hoy toca comer: ' + comida2,        
      });
      } else if (numeroAleatorio == 3) {

        Swal.fire({        
          type: 'success',
          title: 'Listo!',
          text: 'Hoy toca comer: ' + comida3,        
      });
      } else if (numeroAleatorio == 4) {

        Swal.fire({        
          type: 'success',
          title: 'Listo!',
          text: 'Hoy toca comer: ' + comida4,        
      });
        
      } else if (numeroAleatorio == 5) {
        
        Swal.fire({        
          type: 'success',
          title: 'Listo!',
          text: 'Hoy toca comer: ' + comida5,        
      });
      }

      break;
  }
}


/* Funcion para mostrar y ocultar */

function mostrarOcultar() {
  let obj = document.getElementById("numeroComidas").value;

  switch (parseInt(obj)) {
    case 2:
      /* Oculta*/
      document.getElementById("c3").style.display = "none";
      document.getElementById("c4").style.display = "none";
      document.getElementById("c5").style.display = "none";

      

      break;

    case 3:
      /* Oculta*/

      document.getElementById("c4").style.display = "none";
      document.getElementById("c5").style.display = "none";

      /* Muestra*/
      document.getElementById("c3").style.display = "block";

      break;

    case 4:
      /* Oculta*/
      document.getElementById("c5").style.display = "none";

      /* Muestra*/
      document.getElementById("c3").style.display = "block";
      document.getElementById("c4").style.display = "block";

      break;

    case 5:
      /* Muestra*/

      document.getElementById("c3").style.display = "block";
      document.getElementById("c4").style.display = "block";
      document.getElementById("c5").style.display = "block";

      break;
  }
}

