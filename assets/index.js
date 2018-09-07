var PHOTO_URLS = [
  'https://s3-us-west-2.amazonaws.com/kzbao/_DSC5169.jpg',
  'https://s3-us-west-2.amazonaws.com/kzbao/DSC_0391.jpg',
  'https://s3-us-west-2.amazonaws.com/kzbao/_DSC1483.jpg',
  'https://s3-us-west-2.amazonaws.com/kzbao/DSC_0363.jpg'
];

(() => {
  var index = 0;
  var loaded = false;
  var photos = document.getElementById('photos');
  var captions = document.getElementById('captions');

  photos.addEventListener('click', () => {
    rotate();
  });

  function rotate() {
    photos.children[index].classList.remove('displayed');
    captions.children[index].classList.remove('displayed');

    index = (index + 1) % PHOTO_URLS.length;
    if (!loaded) {
      load(PHOTO_URLS[index]);
      if (index == PHOTO_URLS.length - 1) {
        loaded = true;
      }
    }

    photos.children[index].classList.add('displayed');
    captions.children[index].classList.add('displayed');
  }

  function load(photo) {
    img = document.createElement('img');
    img.src = photo;
    photos.appendChild(img);
  }
})()
