(function(){
    const openButton = document.querySelector('nav__close');
    const menu = document.querySelector('nav__link');
    const closeMenu = document.querySelector('nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add( 'nav__link--nav__close' );
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--nav__close');
    });

    


})(); 