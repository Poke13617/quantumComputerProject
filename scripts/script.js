/*Start of hamburger menu code*/
const hamMenu = document.querySelector(".ham-menu")
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener('click', () =>{
hamMenu.classList.toggle('active');
offScreenMenu.classList.toggle('active')
})
/*end of the hamburger menu code*/