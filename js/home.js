let slider_container =document.querySelector('.slider-container');
let f3 =document.querySelectorAll('.fs-3');
let f4 =document.querySelectorAll('.fs-4');
let f5 =document.querySelectorAll('.fs-5');
let f6 =document.querySelectorAll('.fs-6');
let span_container=document.querySelectorAll('span')
let paragraf=document.querySelectorAll('p')

let header_li =document.querySelectorAll('header li');
let products_container_div=document.querySelectorAll('.products-container > div')
let products_container=document.querySelector('.products-container')
let slideimge =document.querySelectorAll('.slider-container div');
let category_container_div =document.querySelectorAll('.category-container-element');
let part_left =document.querySelector('.part-left');
let part_right =document.querySelector('.part-right');
let part_father =document.querySelector('.part-father');
let footer_container=document.querySelector('.footer-container');
let lesiner =0;
var i = 0;                

slider_container.style.width=(slideimge.length*66) +"%"

function slidere() {    
if(i==0){
slider_container.style.left='-45%';
}else{
   let slift =slider_container.style.left;
   let shiftminase=(slift.split('%')[0]-66);
   slider_container.style.left=shiftminase+'%'; 
}
  setTimeout(function() {   
  
      
    for(f=0 ;f<slideimge.length ;f++){
      slideimge[i+2].style.width='35%'  
      if(f!=i+2){
         slideimge[f].style.width='30%'
      }
   
       }

          
   if(i==(slideimge.length-3)){
      slider_container.innerHTML+=slider_container.innerHTML;
      slideimge =document.querySelectorAll('.slider-container div');
      slider_container.style.width=(slideimge.length*66) +"%"
   
   
   } 
       if(window.innerHeight<1000){
         mobil();
       }
    i++;                    
    if (i <(slideimge.length)) {           
        slidere();           
    }                      
  }, 3000)
}

slidere();                   



function mobil() {
if (lesiner==1 &&window.innerWidth>1000) {
   location.reload()
   lesiner=0;
}

  if(window.innerWidth<1000) {
   lesiner=1;
    console.log("dsfs")
    span_container.forEach(function (params) {
       params.style.fontSize='10px';
         
    })

    header_li.forEach(function (params) {
        params.style.fontSize='12px';
          
     })
 

   
     f3.forEach(function (params) {
        params.classList.add('fs-6');
          
     })

     f4.forEach(function (params) {
        params.classList.add('fs-6');
          
     })

    f5.forEach(function (params) {
        params.classList.remove('fs-5');
        params.style.fontSize='10px';
     })

     f6.forEach(function (params) {
        params.classList.remove('fs-6');
        params.style.fontSize='10px';
          
     })

     
    paragraf.forEach(function (params) {
        params.style.fontSize='14px';
          
     })

     products_container_div.forEach(function (params) {
        params.style.width='46%';
        params.style.margen='auto';
     })

     category_container_div.forEach(function (params) {
        params.style.width='45%';
        params.style.margen='auto';
     })

     slider_container.style.height='20vh'

     products_container.classList.remove('mt-5')
     part_left.classList.remove('flex-column')
     part_left.classList.add('flex-row')
     part_left.style.width='100%';

     part_father.classList.remove('flex-row')
     part_father.classList.add('flex-column')
     part_father.style.width='100%';
     part_right.style.width='97%'
     footer_container.classList.remove('flex-row')
     footer_container.classList.add('flex-column')
  } 

}



mobil();

