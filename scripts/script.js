// parto da buttare in pagina gli elementi grezzi (non mi interessa la grafica per ora);
// ricreo la funzionalità dei multi dropdown sulle varie voci di menù, su viewport largo;
// ricreo anche la funzionalità di menù hamburger a viewport più piccoli;
// cerco di far si che funzioni la questione di far comparire e scomparire ciò che mi serve sui viewport diversi (quindi come abbiam fatto questa mattina sulla correzione EX che era di ieri).
//

//
$(document).ready(function(){

  // creo le variabili da utilizzare

  var ulHide = $(".abs-ul");
  var liDrop = $(".li-drop");
  var rightNav = $(".nav.right");
  var mediaBurger = $(".media-burger");
  var mediaNav = $(".media-nav");
  var cross = $(".cross");
  // nascondo i dropdown

  ulHide.hide();

  // faccio comparire i dropdown quando faccio cose con il mouse

liDrop.on({
  mouseover: function() {
      // prima nascondili tutti
      // poi come giustamente fai mostri quello in cui ti trovi
    // $(".abs-ul").hide();
    liDrop.children("ul").hide();
    $(this).children("ul").show();

  }, click: function(){
     $(this).children("ul").hide();
  }
})

$(document).click(function(){
  liDrop.children("ul").hide();
})

// faccio apparire il menu-burger quando clicco nell'icona mediaBurger



mediaBurger.click(function(){
mediaNav.addClass("mediaHide");
})

cross.click(function(){
  mediaNav.removeClass("mediaHide");
})



});
