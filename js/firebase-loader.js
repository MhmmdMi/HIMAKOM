// Firebase Loader for HIMAKOM
document.addEventListener("DOMContentLoaded", () => {
    console.log("Firebase Loader Started...");
    loadBerita();
    loadGaleri();
    loadStruktur();
    loadInfo();
});

async function loadBerita() {
    const container = document.getElementById("berita-container");
    if (!container) return;

    db.collection("berita").orderBy("created_at", "desc").onSnapshot((snapshot) => {
        if (snapshot.empty) {
            container.innerHTML = "<p style='text-align:center; color:#888;'>Belum ada berita terbaru.</p>";
            return;
        }

        container.innerHTML = "";
        snapshot.forEach((doc) => {
            const item = doc.data();
            const article = document.createElement("article");
            article.className = "news-card";
            article.innerHTML = `
                <div class="news-image">
                    <img src="${item.gambar_url || "images/Berita1.jpeg"}" alt="${item.judul}" onerror="this.src='images/Berita1.jpeg'">
                </div>
                <div class="news-content">
                    <span class="news-date">${item.tanggal || ""}</span>
                    <h3>${item.judul}</h3>
                    <p>${item.isi || ""}</p>
                </div>
            `;
            container.appendChild(article);
        });
    }, (error) => {
        console.error("Error loading berita:", error);
        container.innerHTML = "<p>Gagal memuat berita.</p>";
    });
}

async function loadGaleri() {
    const container = document.getElementById("galeri-container");
    if (!container) return;

    db.collection("galeri").orderBy("created_at", "desc").onSnapshot((snapshot) => {
        if (snapshot.empty) {
            container.innerHTML = "<p style='text-align:center; color:#888;'>Belum ada foto galeri.</p>";
            return;
        }

        container.innerHTML = "";
        snapshot.forEach((doc) => {
            const item = doc.data();
            const div = document.createElement("div");
            div.className = "gallery-item";
            div.innerHTML = `
                <img src="${item.gambar_url || "images/Galeri1.JPG"}" alt="${item.judul}" onerror="this.src='images/Galeri1.JPG'">
                <div class="gallery-overlay">
                    <div class="gallery-info">
                        <h3>${item.judul}</h3>
                        <p>${item.keterangan || ""}</p>
                    </div>
                </div>
            `;
            div.addEventListener("click", () => {
                if (typeof openLightbox === 'function') {
                    openLightbox(item.gambar_url || "images/Galeri1.JPG", item.judul, item.keterangan || "");
                }
            });
            container.appendChild(div);
        });
    }, (error) => {
        console.error("Error loading galeri:", error);
    });
}

async function loadStruktur() {
    const orgStructure = document.querySelector(".organization-structure");
    if (!orgStructure) return;

    db.collection("pengurus").orderBy("urutan", "asc").onSnapshot((snapshot) => {
        if (snapshot.empty) return;

        orgStructure.innerHTML = "";
        snapshot.forEach((doc) => {
            const item = doc.data();
            const div = document.createElement("div");
            div.className = "org-card";
            div.innerHTML = `
                <div class="org-photo">
                    <img src="${item.foto_url || 'images/default-avatar.png'}" onerror="this.src='images/default-avatar.png'">
                </div>
                <h3>${item.nama}</h3>
                <p>${item.jabatan}</p>
            `;
            orgStructure.appendChild(div);
        });
    });
}

async function loadInfo() {
    db.collection("info").doc("main").onSnapshot((doc) => {
        if (doc.exists) {
            const data = doc.data();

            // Update Visi in Beranda
            const visionP = document.querySelector(".vision-section p");
            if (visionP && data.visi) visionP.innerText = `"${data.visi}"`;

            // Update Tentang Kami (Profil)
            const aboutTextDiv = document.querySelector(".about-text");
            if (aboutTextDiv) {
                const aboutH3 = Array.from(aboutTextDiv.querySelectorAll('h3')).find(h => h.textContent.includes('Profil'));
                if (aboutH3) {
                    const profileP = aboutH3.nextElementSibling;
                    if (profileP && data.tentang) profileP.innerText = data.tentang;
                }

                // Update Sejarah
                const historyH3 = Array.from(aboutTextDiv.querySelectorAll('h3')).find(h => h.textContent.includes('Sejarah'));
                if (historyH3) {
                    const historyP = historyH3.nextElementSibling;
                    if (historyP && data.sejarah) historyP.innerText = data.sejarah;
                }

                // Update Visi section in About
                const visiH3 = Array.from(aboutTextDiv.querySelectorAll('h3')).find(h => h.textContent.includes('Visi'));
                if (visiH3) {
                    const visiP = visiH3.nextElementSibling;
                    if (visiP && data.visi) visiP.innerText = `"${data.visi}"`;
                }
            }
        }
    });
}
