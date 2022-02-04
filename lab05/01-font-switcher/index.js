const makeBigger = () => {
   alert('make bigger!');
   var x = document.querySelector('.content').fontsize
   document.querySelector('.content').fontSize = (x + 20) + 'px'

   var y = document.querySelector('h1').fontsize
   document.querySelector('h1').fontSize = (x + 20) + 'px'


};

const makeSmaller = () => {
   alert('make smaller!');
   var element1 = document.getElementById('.content');
   style = window.getComputedStyle(element1, null).getPropertyValue('font-size');
   fontsize = parseFloat(style);
   element1.style.fontSize = (fontsize - 20) + 'px';

   var element2 = document.getElementById('h1');
   style = window.getComputedStyle(element1, null).getPropertyValue('font-size');
   fontsize = parseFloat(style);
   element2.style.fontSize = (fontsize - 20) + 'px';
};


document.querySelector('h1, p').addEventListener('click', makeBigger);
document.querySelector('h1, p').addEventListener('click', makeSmaller);

