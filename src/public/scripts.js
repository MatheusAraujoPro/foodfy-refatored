const modalOverlay   = document.querySelector('.modal__overlay');
const cardCollection = document.querySelectorAll('.card');
const btnClose       = modalOverlay.querySelector('.close__modal');
const cardContent    = modalOverlay.querySelector('.modal__content');


for (let card of cardCollection){
    card.addEventListener('click' , ()=>{
        let cardId = card.getAttribute('id');
       /*         
        modalOverlay.classList.add('actived');

        card.classList.remove('card');
        card.classList.add('modal__content')

        cardContent.append(card);  
        */
       
        window.location.href= `/receita?id=${cardId}`
        

    })
}

