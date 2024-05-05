let slideIndex = 0;
showSlide(slideIndex);

// Función para cambiar a la siguiente diapositiva automáticamente
function autoSlide() {
  showSlide(slideIndex += 1);
}

// Establecer un temporizador para llamar a la función autoSlide cada 3 segundos (3000 milisegundos)
setInterval(autoSlide, 3000);

// Función para mostrar una diapositiva específica
function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {slideIndex = 0}    
  if (n < 0) {slideIndex = slides.length - 1}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex].style.display = "block";  
}
