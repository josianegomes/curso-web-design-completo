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

if(window.SimpleAnime){
new SimpleForm({
  form: ".formphp", // seletor do formulário
  button: "#enviar", // seletor do botão
  erro: "<div id='form-erro'><h2>Erro no envio</h2><p>Um erro ocorreu, tente para o email support@global-products-sell.com.</p></div>", // mensagem de erro
  sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
});
}