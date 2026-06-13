const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
    document.documentElement.classList.add("motion-ready");

    const revealItems = document.querySelectorAll(
        [
            ".section-heading",
            ".theme-panel",
            ".phone-shot",
            ".watch-shot",
            ".step-card",
            ".card",
            ".screen-card",
            ".privacy-proof span",
            ".page-header",
            ".document section",
            ".faq details",
            ".contact-note",
            ".contact-box"
        ].join(", ")
    );

    revealItems.forEach((item) => {
        item.classList.add("reveal-pending");
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
                entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
                    .forEach((entry, index) => {
                        entry.target.style.setProperty(
                            "--reveal-delay",
                            `${Math.min(index * 85, 340)}ms`
                        );
                        showItem(entry.target);
                        observer.unobserve(entry.target);
                    });
            },
            {
                rootMargin: "0px 0px -8% 0px",
                threshold: 0.16
            }
        );

        revealItems.forEach((item) => observer.observe(item));
    }
}
