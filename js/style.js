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
