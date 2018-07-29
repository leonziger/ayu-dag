import { maskInput } from 'vanilla-text-mask';


const phoneMask = ['+','7', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

export default {
  mask() {
    return maskInput({
      inputElement: document.querySelector('[type=tel]'),
      mask: phoneMask,
      showMask: true,
      keepCharPositions: true
    });
  }
};
