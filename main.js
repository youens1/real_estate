// menu
const button = document.querySelector('#menubtn');
const list = document.getElementById('navbar');


button.addEventListener('click', function() {
  if (list.classList.contains('hidden')) {
    list.classList.remove('hidden');
    
  } else {
    list.classList.add('hidden');
  }
})


// slider
const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('.slide-image');
const nextBtn = slider.querySelector('.forward');
const prevBtn = slider.querySelector('.backward');
let currentImage = 0;

nextBtn.addEventListener('click', () => {
  currentImage++;
  if (currentImage > images.length - 1) {
    currentImage = 0;
  }
  showImage(currentImage);
});

prevBtn.addEventListener('click', () => {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  showImage(currentImage);
});

function showImage(index) {
  images.forEach((image) => {
    image.style.display = 'none';
  });
  images[index].style.display = 'block';
}
//  form
const form = document.getElementById('myform');
const input = document.getElementById('fisrt_input')
const btnsubmit = document.getElementById('submit')

btnsubmit.addEventListener('click', function(event){
  if (input.value === '') {
    event.preventDefault();
    input.style.color = 'red'
  }
  if (input.value !== '') {
    input.style.color = 'black'
  }
  
})