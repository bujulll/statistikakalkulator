// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
if (hamburger) {
    hamburger.onclick = function () {
        menu.classList.toggle('active');
        hamburger.classList.toggle('active');
    }
}

// Scroll ke materi saat tombol diklik
const ctaBtn = document.querySelector('.cta-btn');
if (ctaBtn) {
    ctaBtn.onclick = function (e) {
        e.preventDefault();
        document.getElementById('materi').scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Transisi fade out ke pemusatan-data.html
const toPemusatan = document.getElementById('to-pemusatan');
if (toPemusatan) {
    toPemusatan.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = this.href;
        }, 500); // waktu sesuai durasi transition
    });
}