if(window.SimpleSlide){
new SimpleSlide({
  slide:"quote", //nome atribuido 
  time:5000 //tempo de transicao dos slide (5000 sao 5segundos)
})

new SimpleSlide({
  slide:"portfolio", 
  time:5000,
  nav: true
})
}

if(window.SimpleAnime){ //fazer verificacao so vai funcionar se o SimpleAnime existir
new SimpleAnime();
}