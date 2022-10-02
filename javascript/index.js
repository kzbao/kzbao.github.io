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

  function rotate(direction) {
    photos.children[index].lastElementChild.style.display = 'none';
    captions.children[index].style.display = 'none';

    index = (index + direction) % photos.childElementCount;

    if (direction == -1) {
      if (index == -1) {
        index = photos.childElementCount - 1;
      }
      gtag('event', 'image_rotation', {
        'direction': 'left'
      });
    } else {
      gtag('event', 'image_rotation', {
        'direction': 'right'
      });
    }

    photos.children[index].lastElementChild.style.display = 'block';
    captions.children[index].style.display = 'block';
  }
})()
