
export default function Alerta()
{
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
    }

       
      

      
