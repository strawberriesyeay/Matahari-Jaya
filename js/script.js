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

// ================= GALLERY LIGHTBOX =================

document.addEventListener("DOMContentLoaded", () => {

    const galleryItems =
        document.querySelectorAll(".gallery-item");

    const lightbox =
        document.querySelector(".gallery-lightbox");

    const lightboxImage =
        document.querySelector(".gallery-lightbox img");

    const closeButton =
        document.querySelector(".lightbox-close");


    if (!lightbox || !lightboxImage) return;


    galleryItems.forEach(item => {

        const image = item.querySelector("img");

        const viewButton =
            item.querySelector(".gallery-view");


        item.addEventListener("click", () => {

            lightboxImage.src = image.src;

            lightboxImage.alt = image.alt;

            lightbox.classList.add("active");

        });

    });


    closeButton.addEventListener("click", () => {

        lightbox.classList.remove("active");

    });


    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.classList.remove("active");

        }

    });


    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            lightbox.classList.remove("active");

        }

    });

});

/* =====================================================
   CINEMATIC INTRO
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const intro = document.getElementById("cinematicIntro");
    const video = document.getElementById("introVideo");
    const skipButton = document.getElementById("skipIntro");

    if (!intro || !video) return;


    // Hide intro
    function hideIntro() {

        intro.classList.add("hide-intro");

        // Setelah fade selesai, hapus dari layar
        setTimeout(() => {
            intro.style.display = "none";
        }, 1000);

    }


    // Saat video selesai
    video.addEventListener("ended", () => {
        hideIntro();
    });


    // Tombol Skip
    if (skipButton) {

        skipButton.addEventListener("click", () => {

            video.pause();

            hideIntro();

        });

    }

});