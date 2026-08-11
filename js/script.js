// ===== PAGE TRANSITION =====

document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll(
        'a[href$=".html"], a[href^="index.html"]'
    );

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const href = this.getAttribute("href");

            // Abaikan link yang buka tab baru
            if (this.target === "_blank") return;

            // Abaikan link kosong
            if (!href || href === "#") return;

            e.preventDefault();

            document.body.classList.add("page-exit");

            setTimeout(() => {
                window.location.href = href;
            }, 350);

        });

    });

});

/* ================= PRODUCT IMAGE CAROUSEL ================= */

document.querySelectorAll(".product-gallery").forEach(gallery => {

    const track = gallery.querySelector(".gallery-track");
    const images = gallery.querySelectorAll(".gallery-track img");

    const prevBtn = gallery.querySelector(".gallery-prev");
    const nextBtn = gallery.querySelector(".gallery-next");

    const dots = gallery.querySelectorAll(".gallery-dots span");

    let currentIndex = 0;

    function showImage(index) {

        currentIndex = index;

        track.style.transform =
            `translateX(-${currentIndex * 100}%)`;

        dots.forEach((dot, i) => {
            dot.classList.toggle(
                "active",
                i === currentIndex
            );
        });

    }

    nextBtn.addEventListener("click", () => {

        currentIndex++;

        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        showImage(currentIndex);

    });

    prevBtn.addEventListener("click", () => {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }

        showImage(currentIndex);

    });

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {
            showImage(index);
        });

    });

});