(() => {
  var index = 0;
  var photos = document.getElementById('photos');
  var captions = document.getElementById('captions');

  photos.addEventListener('click', (event) => {
    if (event.x > photos.offsetLeft + photos.clientWidth / 2) {
      rotate(1);
    } else {
      rotate(-1);
    }
  });

  function rotate(skip) {
    photos.children[index].lastElementChild.style.display = 'none';
    captions.children[index].style.display = 'none';

    index = (index + skip) % photos.childElementCount;
    if (index == -1) {
      index = photos.childElementCount - 1;
    }

    photos.children[index].lastElementChild.style.display = 'block';
    captions.children[index].style.display = 'block';
  }
})()
