// hacer la pagina responsive ...
var consulta = window.matchMedia('(max-width: 500px)');
consulta.addListener(mediaQuery);
var $burguerButton = document.getElementById('burguer-button');
var $menu = document.getElementById('menu');

// $burguerButton.addEventListener('touchstart',toggleMenu);
//
function toggleMenu(){
  $menu.classList.toggle('active');
};
function showMenu(){
  $menu.classList.add('active');
};
function hideMenu(){
  $menu.classList.remove('active');
};

function mediaQuery(){
  if (consulta.matches){
    console.log('se cumplió');
    $burguerButton.addEventListener('touchstart',toggleMenu);

  }else {

    console.log('no se cumplió');
    $burguerButton.removeEventListener('touchstart',toggleMenu);
  }
}
// ..................................................................................
// carga imagenes a medida que se navega por la aplicacion http://dinbror.dk/blazy/  y descarga la libreria en: https://cdnjs.com/
mediaQuery();
var bLazy = new Blazy({
    selector: 'img'
});

// gestos touch ------------- se usa hammer js
var $body = document-body;
var gestos = new Hammer($body);
// gestos.on('swipeleft', function(ev) {
// 	console.log(ev);
// });
// gestos.on('swiperigth', function(ev) {
// 	console.log(ev);
// });
gestos.on('swipeleft', hideMenu);
gestos.on('swiperigth', showMenu);
