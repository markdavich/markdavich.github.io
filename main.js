window.addEventListener('scroll', function (e) {
  // This is the only line needed for parallax
  document.getElementById('p-background').style.top = `-${window.scrollY}px`;
});