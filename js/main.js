const links = document.querySelectorAll('.header a');

links.forEach((link) => 
link.addEventListener('click', function() {
  links.forEach((item) => item.classList.remove('active'))
  this.classList.add('active');
})
)



