const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body')
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
    console.log('Click Hamburger');

    if(header.classList.contains('open')){ //close menu
        body.classList.remove('no-scroll')
        header.classList.remove('open')
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })
        

    }else{ //open menu
        body.classList.add('no-scroll')
        header.classList.add('open')
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out')
            element.classList.add('fade-in')
        })
        
    
    }
})