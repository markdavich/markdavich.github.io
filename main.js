window.addEventListener('scroll', function (e) {

  // This is the only line needed for parallax
  document.getElementById('p-background').style.top = `-${window.scrollY}px`;

  return;

  // The information section
  let scrollY = window.scrollY;
  let scrollHeight = document.body.scrollHeight;
  let innerHeight = window.innerHeight;
  let pageYOffset = window.pageYOffset;
  let bodyH = document.body.clientHeight;
  let bodySH = document.body.scrollHeight;

  // This was a bit weird...
  let body = document.body;
  let html = document.documentElement;
  let height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

  document.getElementById('p-content').innerText = `Just some info:
    window.scrollY = ${Math.round(scrollY)}
    window.innerHeight = ${innerHeight}
    window.pageYOffset = ${Math.round(pageYOffset)}
    body.scrollHeight = ${scrollHeight}
    body.clientHeight = ${bodyH}
    body.scrollHeight = ${bodySH}

    after a while...
    Page Content Height = ${height}
    Scroll = ${Math.round(scrollY / (height - innerHeight) * 100)}%
  `;
});