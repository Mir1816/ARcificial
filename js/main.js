const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener("click", ()=>{
            nav.classList.toggle("show__menu")
        })
    }
}
showMenu("l-header__toggle","l-nav-menu")





const navLink = document.querySelectorAll('.nav__link');
function linkAction(){
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active__link'));
    this.classList.add('active__link');
    
    /*Remove menu mobile*/
    const navMenu = document.getElementById('l-nav-menu')
    navMenu.classList.remove('show__menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

$('.about__slider-iner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows:false,
    dots:true,
    responsive:[
        {
            breakpoint: 1170,
            settings: {
              slidesToShow: 2,
            }
        },
        {
            breakpoint: 780,
            settings: {
              slidesToShow: 1,
            }
        }
    ]
});