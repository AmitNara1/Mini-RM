document.getElementById('Login').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display = 'none';
});

document.bg-modal.style.position == 'fixed';
document.bg-modal.style.top == '-${window.scrollY}px';

document.bg-modal.style.position == '';
document.bg-modal.style.top =='';

const scrollY = document.bg-modal.style.top;
document.bg-modal.style.position == '';
document.bg-modal.style.top =='';
window.scrollTo(0, parseInt(scrollY || '0')* -1);
