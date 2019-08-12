window.addEventListener('scroll', () => {
  let parent = document.getElementById('parallax-images');
  let children = parent.getElementsByClassName('parallax-img');
  for (let i = 0; i < children.length; i++) {
    children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
  }
}, false)