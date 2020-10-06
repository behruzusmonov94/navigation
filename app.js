const navBtn = document.querySelector('.nav-btn');
const btns = document.querySelectorAll('nav button');
const features = document.querySelector('.features');
const price = document.querySelector('.price');
const contact = document.querySelector('.contact');

const line = document.querySelector('.line');


navBtn.addEventListener('click', (event)=>{
    if(event.target.textContent == 'Features'){
        features.classList.add('active');
        features.style = 'display: block';
        price.classList.remove('active');
        contact.classList.remove('active');
        if(features.classList.contains('active')){
            btns[0].style = 'font-size: large';
        }
        if(!price.classList.contains('active')){
            btns[1].style = 'font-size: normal';
        }
        if(!contact.classList.contains('active')){
            btns[2].style = 'font-size: normal';
        }
        line.style = 'top: 9px';
        

    } if(event.target.textContent == 'Price'){
        features.classList.remove('active');
        features.style = 'display: none';
        price.classList.add('active');
        contact.classList.remove('active');
        if(!features.classList.contains('active')){
            btns[0].style = 'font-size: normal';
        }
        if(price.classList.contains('active')){
            btns[1].style = 'font-size: large';
        }
        if(!contact.classList.contains('active')){
            btns[2].style = 'font-size: normal';
        }

        line.style = 'top: 49px';

        

    } if(event.target.textContent == 'Contact'){
        features.classList.remove('active');
        features.style = 'display: none';
        price.classList.remove('active');
        contact.classList.add('active');
        if(!features.classList.contains('active')){
            btns[0].style = 'font-size: normal';
        }
        if(!price.classList.contains('active')){
            btns[1].style = 'font-size: normal';
        }
        if(contact.classList.contains('active')){
            btns[2].style = 'font-size: large';
        }
        line.style = 'top: 89px';

    }

})


if(features.classList.contains('active')){
    btns[0].style = 'font-size: large';
}else{
    btns[0].style = 'font-size: unset'
}



const logo = document.querySelector('.logo');
logo.addEventListener('click', ()=>{
    location.reload();
})

// logo.addEventListener('drag',()=>{
//     console.log('draggable');
// })
