const cog = document.querySelector(".option span i");
const configWindow = document.querySelector('.config');
const close = document.querySelector('.top i');

const menu = document.querySelector(".menu");
const mapping = document.querySelector(".mapping");

const dot1 = document.querySelector('.menu li:nth-child(1)');

cog.addEventListener('click', (e) => {
    configWindow.style.top = "0%";
    configWindow.style.zIndex = "999";
    configWindow.style.opacity = "1";
})

close.addEventListener('click', (e) => {
    configWindow.style.top = "100%";
    configWindow.style.zIndex = "-999";
    configWindow.style.opacity = "0";
})

dot1.addEventListener('click', (e) => {
    menu.style.transform = 'translateX(-120%)';
    mapping.style.transform = 'translateX(-120%)';    
})