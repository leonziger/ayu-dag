import $ from 'jquery';
import vex from 'vex-js';


$('.motivation__download-text').click(function (e) {
  e.preventDefault();

  const modal = $(`[data-modal=present]`);

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
