/*
** Частина коду, що зв'язана зі слайдером.
* Оголошуємо змінні, блок для якого буде застосуватися слайдер та опції, які буде приймати слайдер.
*
* І в кінці для нашого блоку викликаємо функцію,
* що містить в собі бібліотека слайдера,
* в яку передаємо опції слайдера.
 */
const barbersGallery = document.getElementById('barbersGallery');

const barbersSlider = tns({
    container: barbersGallery,
    items: 3,
    slideBy: 1,
    loop: true,
    nav: false,
});

/*
** Створюємо функції для виклику модальних вікон
*  Та функції для їх створення
 */
modalInit('priceList', 'viewPrice');
closeModal('priceList');

//Функція для визову модального вікна
function modalInit( modalID, trigger ) {
    //Оголошуємо нашу кнопку, що викликає модальне вікно
    const buttonTrigger = document.getElementById(trigger);

    //Оголошуємо наше модальне вікно
    const modal = document.getElementById(modalID);

    buttonTrigger.addEventListener('click', function() {
        //Робимо неможливим гортання основного сайту
        document.body.className = 'hidden';

        //Плавне появлення для нашої форми
       fadeIn(modal);
    });
}

//Функція для зникнення модального вікна
function closeModal ( modalID ) {
    //Оголошуємо нашу елементи, що викликають зникнення вікна
    const buttonTriggerOut = document.getElementsByClassName('button--close')[0];
    const spanTrigger = document.getElementsByClassName('close-line')[0];
    const spanTrigger2 = document.getElementsByClassName('close-line')[1];
    const wrapperOut = document.getElementById(modalID).children[0];

    //Оголошуємо наше модальне вікно
    const modal = document.getElementById(modalID);

    document.addEventListener('click', function(event) {
        console.log(event.target);
       if ( event.target === buttonTriggerOut || event.target === wrapperOut || event.target === spanTrigger || event.target === spanTrigger2 ) {
           document.body.classList.remove('hidden');
           //Плавне зникання для нашої форми
           fadeOut(modal);
       }
    });
}

//Функція для повільного зникнення
function fadeOut(el){
    el.style.opacity = 1;

    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

//Функція для повільного появлення
function fadeIn(el, display){
    el.style.opacity = 0;
    el.style.display = display || "block";

    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

/*
** Створюємо масив, що складається з об'єктів в яких міститься назва сервісу його ціна і інколи підтипи
 */
const priceList = [
    {
        name: 'Machine cutting',
        price: '250 ₴'
    },
    {
        name: 'Man cutting',
        cutType: [
            {
                type: 'Top Know',
                price: '350 ₴'
            },
            {
                type: 'Tennis',
                price: '375 ₴'
            },
            {
                type: 'Canada',
                price: '400 ₴'
            },
            {
                type: 'Boxing',
                price: '450 ₴'
            },
            {
                type: 'Undercut',
                price: '500 ₴'
            }
        ]
    },
    {
        name: 'Laying',
        price: '200 ₴'
    },
    {
        name: 'Beard mowing',
        price: '250 ₴'
    },
    {
        name: 'Royal shaving',
        price: '350 ₴'
    },
    {
        name: 'Haircut + Beard',
        price: '500 ₴'
    },
    {
        name: 'Father + Son',
        price: '800 ₴'
    }
];

// Оголошуємо зміну, яка відповідає тілу нашого модального вікна
const priceBody = document.getElementById('priceListBody');

//В циклі виводимо наші дані із нашого об'єкту цін, та вставляємо код html на сторінку
priceList.forEach( item => {
    if ( item.cutType ) {
        priceBody.innerHTML += '<div class="price__item price__item--cut">' +
            '                <span class="name">'+ item.name +'</span>' +
            '                <div class="price__sub-list" id="cutList"></div>' +
            '            </div>';

        // Оголошуємо зміну, яка відповідає тілу списку типів зачісок
        const cutBody = document.getElementById('cutList');

        item.cutType.forEach(cut => {
            cutBody.innerHTML += '<div>' +
                '<span class="type">'+ cut.type +'</span>' +
                '<span class="price">'+ cut.price +'</span>' +
                '</div>'
        });
    } else {
        priceBody.innerHTML +=
            '<div class="price__item">' +
            '   <span class="name">'+ item.name +'</span>' +
            '   <span class="price">'+ item.price +'</span>\n' +
            '</div>';
    }
});