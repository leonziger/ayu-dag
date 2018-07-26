import $ from 'jquery';
import vex from 'vex-js';


$('#download_present').click(function (e) {
  e.preventDefault();

  const modal = $(`[data-modal=present]`);

  if (!modal.length) {
    return console.error('Modal is not exist!');
  }

  vex.open({
    unsafeContent: modal.html(),
    closeClassName: 'modal__close',
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
  });
});
