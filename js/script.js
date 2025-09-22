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

// Smooth scroll untuk link navbar yang menuju anchor (#...) dan auto-close menu mobile
const navLinks = document.querySelectorAll('.menu a');
if (navLinks && navLinks.length) {
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            // Jangan auto-close saat klik tombol pembuka submenu
            if (link.classList.contains('submenu-toggle')) {
                return;
            }
            const href = link.getAttribute('href');
            // Tutup menu mobile jika terbuka
            if (menu) menu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');

            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// Dropdown Materi (submenu)
const submenuToggle = document.querySelector('.submenu-toggle');
const menuItem = submenuToggle ? submenuToggle.parentElement : null;
if (submenuToggle && menuItem) {
    submenuToggle.addEventListener('click', function (e) {
        // Toggle submenu di mobile/desktop
        e.preventDefault();
        menuItem.classList.toggle('open');
    });
    // Tutup submenu ketika klik di luar
    document.addEventListener('click', function (e) {
        if (!menuItem.contains(e.target)) {
            menuItem.classList.remove('open');
        }
    });
}