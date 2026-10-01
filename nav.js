(function () {
    const toggle = document.querySelector('.header__toggle');
    const nav    = document.querySelector('.header__nav');
    if (!toggle || !nav) return;

    const closeMenu = () => {
        nav.classList.remove('is-open');
        toggle.classList.remove('is-active');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menú');
        document.body.style.overflow = '';
    };

    toggle.addEventListener('click', () => {
        const willOpen = !nav.classList.contains('is-open');
        nav.classList.toggle('is-open', willOpen);
        toggle.classList.toggle('is-active', willOpen);
        toggle.setAttribute('aria-expanded', String(willOpen));
        toggle.setAttribute('aria-label', willOpen ? 'Cerrar menú' : 'Abrir menú');
        document.body.style.overflow = willOpen ? 'hidden' : '';
    });

    /* Cierra al pulsar un enlace */
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    /* Cierra con tecla ESC */
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });

    /* Cierra si se pasa a desktop estando abierto */
    const mq = window.matchMedia('(min-width: 769px)');
    mq.addEventListener('change', (e) => {
        if (e.matches) closeMenu();
    });
})();
