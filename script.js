const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
})

<<<<<<< HEAD
document.querySelectorAll('.nav-link').forEach(n => n.
  addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
 })) 
=======
document.querySelectorAll(".nav-link").forEach(n => n.
 addEventListener("click" , () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    
 }))


 
 
 
 
 
>>>>>>> 4493674b9e7fa56766a8a07bb245e5a1839d5bc5
