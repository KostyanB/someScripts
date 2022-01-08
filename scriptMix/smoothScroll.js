// scroll smooth
const smoothScroll = id => {
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};
// scrolls listener
(function () {
  const scrollLinks = document.querySelectorAll('.scroll-link');
  for (const scrollLink of scrollLinks) {
    scrollLink.addEventListener('click', e => {
      e.preventDefault();
      const id = scrollLink.getAttribute('href');
      smoothScroll(id);
    });
  }
})();
