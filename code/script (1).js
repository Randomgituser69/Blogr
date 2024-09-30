const toggleBtn = document.querySelector('.hamburg')
const btn = document.querySelectorAll('.mobiles')
const navLinkies = document.querySelector('ul')

btn.addEventListener('click', function() {
   navLinkies.classList.toggle('show')
})
