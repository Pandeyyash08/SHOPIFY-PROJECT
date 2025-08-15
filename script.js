document.querySelectorAll('.thumb').forEach(btn => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img');
    const main = document.getElementById('mainImg');
    main.src = img.src.replace('w=600', 'w=1400');
  });
});


document.querySelectorAll('.size-btn').forEach(b => b.addEventListener('click', e => {
  document.querySelectorAll('.size-btn').forEach(x => {
    x.classList.remove('active');
    x.setAttribute('aria-checked', 'false');
  });
  e.currentTarget.classList.add('active');
  e.currentTarget.setAttribute('aria-checked', 'true');
}));


const sizeChartBtn = document.getElementById("sizeChartBtn");
const sizeChartModal = document.getElementById("sizeChartModal");
const closeBtn = sizeChartModal?.querySelector(".close-btn");

if (sizeChartBtn && sizeChartModal && closeBtn) {
  sizeChartBtn.addEventListener("click", () => {
    sizeChartModal.classList.add("show");
    sizeChartModal.style.display = "flex"; 
  });

  closeBtn.addEventListener("click", () => {
    sizeChartModal.classList.remove("show");
    sizeChartModal.style.display = "none"; 
  });

  sizeChartModal.addEventListener("click", (e) => {
    if (e.target === sizeChartModal) {
      sizeChartModal.classList.remove("show");
      sizeChartModal.style.display = "none";
    }
  });
}


const carousel = document.getElementById('carousel');
if (carousel) {
  carousel.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') carousel.scrollBy({ left: 200, behavior: 'smooth' });
    if (e.key === 'ArrowLeft') carousel.scrollBy({ left: -200, behavior: 'smooth' });
  });

  carousel.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
      carousel.scrollBy({ left: e.deltaY, behavior: 'auto' });
      e.preventDefault();
    }
  }, { passive: false });
}


const addToCart = document.getElementById('addToCart');
if (addToCart) {
  addToCart.addEventListener('click', () => {
    const orig = addToCart.textContent;
    addToCart.textContent = 'Added ✓';
    setTimeout(() => addToCart.textContent = orig, 1200);
  });
}
