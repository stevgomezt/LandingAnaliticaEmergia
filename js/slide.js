let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function () {
  let items = document.querySelectorAll('.item');

  // Añade clase para animación de salida
  items[0].classList.add('hidden');

  setTimeout(function () {
    // Mueve el primer elemento al final después de la animación de salida
    document.querySelector('.slide').appendChild(items[0]);
    items[0].classList.remove('hidden'); // Elimina la clase para mostrar el elemento nuevamente
  }, 500); // Tiempo que coincide con la duración de la transición en CSS
});

prev.addEventListener('click', function () {
  let items = document.querySelectorAll('.item');

  // Añade clase para animación de salida
  items[items.length - 1].classList.add('hidden');

  setTimeout(function () {
    // Mueve el último elemento al principio después de la animación de salida
    document.querySelector('.slide').prepend(items[items.length - 1]);
    items[0].classList.remove('hidden'); // Elimina la clase para mostrar el elemento nuevamente
  }, 500); // Tiempo que coincide con la duración de la transición en CSS
});
