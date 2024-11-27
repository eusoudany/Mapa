const cells = document.querySelectorAll('#nosso-acervo .carousel-cell');
const carouselLinks = document.querySelectorAll('.btn-carousel-acervo');

const handleCarouselFocus = () =>
  cells.forEach((cell, index) => {
    if (cell.matches('.carousel-cell:focus-within')) {
      if (!cell.classList.contains('is-selected')) {
        if (
          cells[index - 1] &&
          cells[index - 1]?.classList.contains('is-selected')
        ) {
          document.querySelector('.flickity-button.next').click();
        } else {
          document.querySelector('.flickity-button.previous').click();
        }
      }
    }
  });

carouselLinks.forEach((link) =>
  link.addEventListener('focus', handleCarouselFocus)
);
