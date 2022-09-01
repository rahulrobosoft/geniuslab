const closedface = document.querySelector('.close');
const openface = document.querySelector('.open');

closedface.addEventListener('click',()=>{
        openface.classList.add('active');
        closedface.classList.remove('active');
});

openface.addEventListener('click',()=>{
        openface.classList.remove('active');
        closedface.classList.add('active');
      
});