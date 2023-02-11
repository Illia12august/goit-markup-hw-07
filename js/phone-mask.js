const selector = document.querySelector('.modal-input[type="tel"]');
console.log(selector);
const im = new Inputmask("+(389)-99-999-99-99");
im.mask(selector);