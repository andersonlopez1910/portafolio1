//____________________NAVBAR___________________

const menu = document.getElementById('menu')
const openBtn = document.getElementById('openBtn')
const btnClose= document.getElementById('btnClose')
//esto es para que cuando se selecciona un link resalte de los demas
const links = menu.querySelectorAll('.items__list_a')//cuando se trae una clase en general, toca penerle punto

menu.addEventListener('click', function (event) {

    if (event.target.matches('.items__list_a')) {
        menu.classList.remove('show-menu')
        
        for (const link of links){
            link.classList.remove('active')
        }
        event.target.classList.add('active')
    }
})

function openMenu() {
    menu.classList.add('show-menu');
}
function closeMenu() {
    menu.classList.remove('show-menu')
}
//de cualquiera de las dos formas se puede realizar para ejutar la funcion
openBtn.addEventListener('click', openMenu)
btnClose.onclick = closeMenu


/*_______________modo oscuro_____________*/

const mod = document.getElementById('mod')
const windows = window.localStorage
//preguntamos si tenemos activado el darkmode en el localStor
const logoMod= document.getElementById('logoMod')


mod.addEventListener('click', function (event) {
    const body = document.body
    //toggle significa que si dan un click activa el modo
    body.classList.toggle('dark')
    
    //almacenar en el navegador temporalmente localStorge
    if (body.classList.contains('dark')) {
        //almacenar el valor en el localStorge
        localStorage.setItem('darkMode', true)
    
    }else{
        //eliminar el valor almacenado en localStorge
        localStorage.removeItem('darkMode', true)
    }
    //esta condicion es para cambiar el logo del boton del modo oscuro
if (body.classList.contains('dark')) {
    mod.firstChild.className = 'bx bx-sun'
}else{
    mod.firstChild.className = 'bx bx-moon'
}

})
//el addEventListener se puede utilizar cuando solo sea un boton
const theme = localStorage.getItem('darkMode')

if(theme){
    body.classList.add('dark')

}else{
    body.classList.remove('dark')
}

//libreria de texto para que salga varias veces
var typed = new Typed('#typing', {
    strings: ['Frontend Developer', 'Web Developer', 'Designer', 'Fullstack Developer'],
    typeSpeed: 50,
    startDelay: 50,
    backSpeed: 50,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
  cursorChar: '_',
  });

  //_______________scrollReveal______________

  const sr = new ScrollReveal({
    origin: 'top',
    distance: '1024px',
    duration: 2500,
    reset: true
  })

  sr.reveal('.con__img',{origin:'top', distance: '100px'})
  sr.reveal('.hero__title',{origin:'top', distance: '100px'})
  sr.reveal('.cont_coment',{origin:'top', distance: '100px'})
  sr.reveal('.social',{origin:'top', distance: '100px'})


  