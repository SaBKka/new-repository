
function myfunction(){

  var burger = document.querySelector('.burger-menu');
  var nav = document.querySelector('.nav-lists');
  var remove = document.querySelector('.remove');

  burger.addEventListener('click',()=>{

    nav.classList.toggle('active');

  });

  remove.addEventListener('click',()=>{

    nav.classList.remove('active');
    
    });

}

myfunction();



function Hideshowtools(){

  const tools = document.querySelector('.tools .content');
  if(tools.classList.contains('active')){
    tools.classList.remove('active');
  }
  else
  {
    tools.classList.add('active');
  }
}

function scrollUp(){

  var bodyEl = document.querySelector('body');

  document.documentElement.scrollTop = '0';

}