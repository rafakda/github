   
   
  
//ABERTURA E FECHAMENTO DO MODAL

//CONVERTENDOS OS COMPONENTES PARA A MNIPULAÇÃO DO DOM
  var acionarModal = document.getElementById('acionarModal');  //CONVERTENDO O ACINADOR
  var modal = document.getElementById('modal');// CONVERENDO O ACIONADO
  var modalFilho = document.getElementById('modalFilho');// CONVERENDO O ACIONADO

  modal.style.display = "none"//DANDO UM VALOR AO ELEMENTO ACIONADO

  acionarModal.onclick = () =>{ //FUNCÇÃO DE CLICK NO ACIONADOR
  modal.style.display = "flex" //RECEBENDO O VALOR 
  }

 
  //FECHAR MODAL COM O CLICK FORA 
  modal.onclick = (function(event){
    if(event.target === modal || event.target === modalFilho){
      modal.style.display = "none"
    }
  })




 

  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //INICIO SLIDE PRODUTOS (ORIGIAL DO DOCUMENTO)=>
var swiper = new Swiper(".swiper",
{
slidesPerView:3,
spaceBetween: 10,
slidesPerGroup: 5,
loop:true,
loopFillGroupWithBlank:true,
pagination: {
  el: ".swiper-pagination",
  clicKable: true,
},
navigation: {
  prevEl: ".swiper-button-prev",
  nextEl: ".swiper-button-next",

},


breakpoints: {
  540: {
  slidesPerView: 2,
  spaceBetween: 10,
  },
  450: {
  slidesPerView: 2,
  spaceBetween: 10,
  slidesPerGroup: 1,
  },
  400: {
  slidesPerView: 1.3,
  spaceBetween: 10,
  slidesPerGroup: 1,
  },
  350: {
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  },
  250: {
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  },
  768: {
  slidesPerView: 3,
  spaceBetween: 10,
  slidesPerGroup: 1,

  },
  1024: {
  slidesPerView: 3,
  spaceBetween: 10,
  slidesPerGroup: 1,

  },
  },

  });
//FINAL SLIDE PRODUTOS (ORIGIAL DO DOCUMENTO)=>






