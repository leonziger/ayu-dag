import $ from 'jquery';
import vex from 'vex-js';


$('.main-header__contacts-button').click(function (e) {
  e.preventDefault();

  const modal = $(`[data-modal=callback]`);

  if (!modal.length) {
    return console.error('Modal is not exist!');
  }

  vex.open({
    unsafeContent: modal.html(),
    closeClassName: 'modal__close',
    // afterOpen: function () {
    //   callback.mask();
    // }
  });
});
