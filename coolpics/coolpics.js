const menuButton = document.getElementById("menu-button");
const menuLinks = document.querySelector('#menu-links')

menuButton.addEventListener("click", () =>{
  menuLinks.classList.toggle('hide')
});

const modal = document.createElement('dialog');
modal.innerHTML = `
<img src="..." alt="...">
<button class="close-viewer">X</button>
`;
document.body.appendChild(modal);

const gallery = document.querySelector('.gallery');
const modalImg = modal.querySelector('img');
const closeBtn = modal.querySelector('.close-viewer');

gallery.addEventListener('click', (e) => {
    const img = e.target.closest('img');
    if (!img) return;

    const src = img.getAttribute('src');
    const base = src.split('.')[0]; 
    const fullImgSrc = base + '-full.jpeg';

    modalImg.src = 'cool1.jpeg';
    modalImg.alt = img.alt;
    modal.showModal();
  });

  closeBtn.addEventListener('click', () => {
    modal.close();
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.close();
    }
  });