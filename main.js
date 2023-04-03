// mobile-menu
(() => {
    const menuContainer = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
    const updateicon = document.querySelector(".img-header-update");

  
    const toggleMenu = () => menuContainer.classList.toggle('is-open');
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
    
  
    // Закрываем мобильное меню на более широких экранах
    // в случае изменения ориентации устройства.
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener(
        'change',
        e => e.matches && menuContainer.classList.remove('is-open'),
      );
})();
//   
// price section

window.addEventListener('load', function() {
  // Получаем все заголовки
  var titles = document.querySelectorAll('.service-title');

  // Добавляем обработчик клика для каждого заголовка
  for (var i = 0; i < titles.length; i++) {
    titles[i].addEventListener('click', function() {
      // Находим следующий элемент после заголовка
      var description = this.nextElementSibling;

      // Переключаем класс "show" для элемента с описанием услуги
      description.classList.toggle('show');
    });
  }
});