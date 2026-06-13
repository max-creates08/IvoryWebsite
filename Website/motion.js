const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
    document.documentElement.classList.add("motion-ready");

    const revealItems = document.querySelectorAll(
        ".section, .page-header, .card, .step-card, .screen-card, .faq details, .contact-note, .contact-box"
    );

    revealItems.forEach((item, index) => {
        item.classList.add("reveal-pending");
        item.style.setProperty("--reveal-delay", `${Math.min(index * 45, 260)}ms`);
    });

    const showItem = (item) => {
        item.classList.remove("reveal-pending");
        item.classList.add("is-visible");
    };

    if (!("IntersectionObserver" in window)) {
        revealItems.forEach(showItem);
    } else {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        showItem(entry.target);
                        observer.unobserve(entry.target);
                    }
                }
            },
            {
                rootMargin: "0px 0px -12% 0px",
                threshold: 0.12
            }
        );

        revealItems.forEach((item) => observer.observe(item));

        window.setTimeout(() => {
            revealItems.forEach((item) => {
                if (!item.classList.contains("is-visible")) {
                    showItem(item);
                    observer.unobserve(item);
                }
            });
        }, 900);
    }
}
