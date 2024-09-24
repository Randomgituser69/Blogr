const toggleBtn = document.querySelector('.hamburg')
const navLinks = document.getElementById('mobile')

toggleBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active')
})