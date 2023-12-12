document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', function () {
      var navList = document.querySelector('.nav-list');
      navList.classList.toggle('show');
    });
  }); 