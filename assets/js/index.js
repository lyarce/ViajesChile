$(document).ready(function(){
    $('a').click(function(event){
      if(this.hash !== ""){
        event.preventDefault();
        var hash = this.hash;
        $('html,body').animate({
          scrollTop: $(hash).offset().top
        },2000,function(){ // 2000 milisegundos velocidad en que se mueve el scroll
          window.location.hash = hash
        })
      }
    })
  })

  // Smooth scroll a diferentes secciones de la página, con 2000 milisegundos de velociad  