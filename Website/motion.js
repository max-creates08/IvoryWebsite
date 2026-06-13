const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
    document.documentElement.classList.add("motion-ready");

    const revealItems = document.querySelectorAll(
        ".section, .page-header, .card, .step-card, .screen-card, .faq details, .contact-note, .contact-box"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            }
        },
        {
            rootMargin: "0px 0px -12% 0px",
            threshold: 0.12
        }
    );

    revealItems.forEach((item, index) => {
        item.style.setProperty("--reveal-delay", `${Math.min(index * 45, 260)}ms`);
        observer.observe(item);
    });
}
