const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const appStoreButtons = document.querySelectorAll(".app-store-button");
const userAgent = navigator.userAgent || "";
const platform = navigator.platform || "";
const isAppleTouchDevice = navigator.maxTouchPoints > 1 && /MacIntel/.test(platform);
const isIPhoneOrIPad = /iPhone|iPad|iPod/.test(userAgent) || isAppleTouchDevice;
const isMac = !isIPhoneOrIPad && /Mac/.test(platform);

appStoreButtons.forEach((button) => {
    const kicker = button.querySelector("[data-app-store-kicker]");
    const title = button.querySelector("[data-app-store-title]");

    if (!kicker || !title) {
        return;
    }

    if (isIPhoneOrIPad) {
        kicker.textContent = "Download on the";
        title.textContent = "App Store";
        button.setAttribute("aria-label", "Download Ivory Note on the App Store");
    } else if (isMac) {
        kicker.textContent = "Open in the";
        title.textContent = "Mac App Store";
        button.setAttribute("aria-label", "Open Ivory Note in the Mac App Store");
    } else {
        kicker.textContent = "View on the";
        title.textContent = "App Store";
        button.setAttribute("aria-label", "View Ivory Note on the App Store");
    }
});

if (!reduceMotion) {
    document.documentElement.classList.add("motion-ready");

    const revealItems = document.querySelectorAll(
        [
            ".section-heading",
            ".theme-panel",
            ".phone-shot",
            ".watch-shot",
            ".step-card",
            ".platform-card",
            ".card",
            ".version-card",
            ".version-row",
            ".screen-card",
            ".install-band-inner",
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
