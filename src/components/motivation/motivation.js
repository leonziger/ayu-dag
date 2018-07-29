import $ from 'jquery';
import vex from 'vex-js';
import phone from '../form/phone';


$('#download_present').click(function (e) {
  e.preventDefault();

  const modal = $(`[data-modal=present]`);

  if (!modal.length) {
    return console.error('Modal is not exist!');
  }

  vex.open({
    unsafeContent: modal.html(),
    closeClassName: 'modal__close',
    afterOpen: function () {
      phone.mask();
    }
  });
});

$('#download_price').click(function (e) {
  e.preventDefault();

  const modal = $(`[data-modal=price]`);

  if (!modal.length) {
    return console.error('Modal is not exist!');
  }

  vex.open({
    unsafeContent: modal.html(),
    closeClassName: 'modal__close',
    afterOpen: function () {
      phone.mask();
    }
  });
});


$('.motivation__button').click(function (e) {
  e.preventDefault();

  const modal = $(`[data-modal=thanks]`);

  if (!modal.length) {
    return console.error('Modal is not exist!');
  }

  vex.open({
    unsafeContent: modal.html(),
    closeClassName: 'modal__close',
  });
});
