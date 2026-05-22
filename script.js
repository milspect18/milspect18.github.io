(function () {
    const heroLogo = document.getElementById('heroLogo');
    const header = document.getElementById('siteHeader');

    let ticking = false;

    function update() {
        const vh = window.innerHeight;
        const progress = Math.min(Math.max(window.scrollY / vh, 0), 1);

        const logoOpacity = 1 - progress;
        heroLogo.style.opacity = logoOpacity.toFixed(3);
        heroLogo.style.transform = `scale(${(1 - progress * 0.08).toFixed(3)})`;

        header.style.opacity = progress.toFixed(3);
        header.classList.toggle('is-visible', progress > 0.5);

        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(update);
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
})();
