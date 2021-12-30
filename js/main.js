//ZOOM ANIMATION
AOS.init();

//TYPED ANIMATION
const typed = new Typed('.typed', {
  stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
  typeSpeed: 50, // Velocidad en mlisegundos para poner una letra,
  startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
  backSpeed: 50, // Velocidad en milisegundos para borrrar una letra,
  smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
  shuffle: false, // Alterar el orden en el que escribe las palabras.
  backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
  loop: true, // Repetir el array de strings
  loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
  showCursor: true, // Mostrar cursor palpitanto
  cursorChar: '|', // Caracter para el cursor
  contentType: 'html', // 'html' o 'null' para texto sin formato
});

//NAVBAR CHANGE ON CLICK
$('.nav-item .nav-link').on('click', function () {
  $('.nav-item').find('.active').removeClass('active');
  $(this).addClass('active');
});

//NAVBAR CHANGE ON SCROLL
$(window)
  .scroll(function () {
    var distance = $(window).scrollTop();
    $('.page-section').each(function (i) {
      if ($(this).position().top <= distance + 250) {
        $('.navbar-nav a.active').removeClass('active');

        $('.navbar-nav a').eq(i).addClass('active');
      }
    });
  })
  .scroll();

//PROGRESS BAR ANIMATION
// $('.bar-1').css('width', '75%');
// $('.bar-2').css('width', '50%');
// $('.bar-3').css('width', '60%');
// $('.bar-4').css('width', '60%');
// $('.bar-5').css('width', '55%');
$(window)
  .scroll(function () {
    var distance = $(window).scrollTop();
    $('#skills').each(function (i) {
      if ($(this).position().top <= distance + 250) {
        $('.bar-1').css('width', '75%');
        $('.bar-2').css('width', '50%');
        $('.bar-3').css('width', '60%');
        $('.bar-4').css('width', '60%');
        $('.bar-5').css('width', '55%');
      }
    });
  })
  .scroll();

// Validation Form
(function () {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();

$(document).ready(function () {
  var referencePosition = 0; // donde se almacena a partir de que top se muestra el navbar
  var lastPosition = 0; // Auxiliar para saber si estas bajando o subiendo

  $(window).scroll(function () {
    console.log($(this).scrollTop(), referencePosition);
    let positionActual = $(this).scrollTop();
    if (positionActual > referencePosition) {
      //si estas debajo del punto de referencia, ocultar
      $('.navbar').fadeOut(150);
    } else {
      // si subistes arriba del punto de referencia mostrar
      $('.navbar').fadeIn(150);
    }
    if (positionActual > lastPosition) {
      // si estas bajando, actualizar punto de referencia a 50 pixeles arriba del scroll actual
      referencePosition = positionActual - 50;
    }
    lastPosition = positionActual; // actualizar auxiliar para saber si subes o bajas
  });
});
