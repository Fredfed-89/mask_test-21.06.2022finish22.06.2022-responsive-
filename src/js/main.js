import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';
import './components/sliders';

$(function () {
  $('.burger, .header__item-link').on('click', function () {
    $('.header__list, .burger').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
