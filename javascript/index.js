(() => {
  var index = 0;
  var photos = document.getElementById('photos');
  var captions = document.getElementById('captions');

  photos.addEventListener('click', () => {
    rotate();
  });

  function rotate() {
    photos.children[index].lastElementChild.style.display = 'none';
    captions.children[index].style.display = 'none';

    index = (index + 1) % photos.childElementCount;

    photos.children[index].lastElementChild.style.display = 'block';
    captions.children[index].style.display = 'block';
  }
})()
