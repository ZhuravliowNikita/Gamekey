// const icon = document.querySelector(".logo-search");
// const search = document.querySelector(".search");

// icon.onclick = function () {
//   search.classList.toggle("active");
// };

let i = 1;
      for(let li of gallery.querySelectorAll('li')) {
        li.style.position = 'relative';
        li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
        i++;
      }
  
      let width = 600; 
      let count = 1; 
  
      let list = gallery.querySelector('ul');
      let listElems = gallery.querySelectorAll('li');
  
      let position = 0; 
  
      arrow.querySelector('.prev').onclick = function() {
        // сдвиг влево
        position += width * count;
        // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
        position = Math.min(position, 0)
        list.style.marginLeft = position + 'px';
      };
  
      arrow.querySelector('.next').onclick = function() {
        // сдвиг вправо
        position -= width * count;
        // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
        position = Math.max(position, -width * (listElems.length - count));
        list.style.marginLeft = position + 'px';
      };