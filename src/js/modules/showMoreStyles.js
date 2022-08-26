import { getResourse } from "../services/requests";


const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);


    // простой вариант когда мы добавляем из верстки стили
    // cards.forEach(card =>{
    //     card.classList.add('animated', 'fadeInUp');
    // });

    // btn.addEventListener('click', ()=>{
    //     cards.forEach(card =>{
    //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //     });
    //     btn.style.display = 'none';

    // });

    // вариант когда стили берем из базы данных
    btn.addEventListener('click', function (){

        // 'http://localhost:3000/styles' адрес по которому работает json server( берем из терминала)
        getResourse('assets/db.json')
        // если рабоатем с сервером то пишем просто res а если с файлом из папки res.styles
        .then(res => createCards(res.styles))
        .catch(error=> console.log(error));

        this.remove();
    });

    function createCards (response) {
        response.forEach(({src, title, link})=>{
            let card = document.createElement('div');
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            card.innerHTML = `
            <div class='styles-block'>
                <img src=${src} alt="style">
                <h4>${title}</h4>
                <a href=${link}>Подробнее</a>
            </div>
            `;
            document.querySelector(wrapper).appendChild(card);
        });
    }



    // <div>
    //     <div class=styles-block>
    //         <img src=assets/img/styles-5.jpg alt>
    //         <h4>Пастелью</h4>
    //         <a href="#">Подробнее</a>
    //     </div>
    // </div>


};

export default showMoreStyles;