//navbar-fix
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top')

    if(window.pageYOffset> fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu =document.querySelector('#nav-menu');

hamburger.addEventListener('click',function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//klik diluar hamburger
window.addEventListener('click',function(e){
    if(e.target !=hamburger && e.target !=navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');

    }
})

//darkmode

const darkToggle =document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click',function(){
if(darkToggle.checked){
    html.classList.add('dark')
    localStorage.theme = 'dark';
}else{
    html.classList.remove('dark')
    localStorage.theme = 'light';
}
});

//pindahkan posisi toogle sesuai mode

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
   darkToggle.checked = true;
} else {
    darkToggle.checked = false;
  }


  function gotoWhatsapp(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pesan = document.getElementById("pesan").value;

    var url = "https://wa.me/6282172716552?text="
    +"Name:"+name+"%0a"
    +"Email:"+email+"%0a"
    +"Pesan:"+pesan;

    window.open(url,  '_blank').focus();
}
