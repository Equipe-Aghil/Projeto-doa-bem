// Navbar 

 const elemsDropdown = document.querySelectorAll(".dropdown-trigger");
 const instancesDropdown = M.Dropdown.init(elemsDropdown, {
    coverTrigger: false
 });
elemsSidenav = document.querySelectorAll(".sidenav");
const instanceSidenav = M.Sidenav.init(elemsSidenav, {
    edge: "left"
});
/*JS Calendário Data De Nascimento a possibilidade de traduzir com Jquery.*/
/*Link para uma possível opção: https://gist.github.com/lramosduarte/d74f9ad0ad62d109a85fc58ce8985165*/
$(document).ready(function(){
    $('.datepicker').datepicker();
  });

  $(document).ready(function(){
    $('select').formSelect();
  });
        
  // Cadastro menu mobile //
var menuCad = document.getElementsByClassName('link-nav-arrow')[0];
var listSecond = document.querySelector('.list-nav-second');

menuCad.addEventListener('click', function(){
    listSecond.classList.toggle('hide');
    
})

$(function(){
  $("#adicionar").on('click',function(){
    $("#meus-videos").append('<video width="320" height="240" controls>  <source src="'+$("#video").val()+'" type="video/mp4">  <source src="movie.ogg" type="video/ogg">Your browser does not support the video tag.</video>');
  })
})