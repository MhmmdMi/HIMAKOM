// Supabase Loader for Berita and Galeri
document.addEventListener("DOMContentLoaded", () => {
  muatBerita();
  muatGaleri();
});

async function muatBerita() {
  const container = document.getElementById("berita-container");
  if (!container) return;

  try {
    const { data, error } = await supabase
      .from("berita")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    if (data && data.length > 0) {
      container.innerHTML = "";
      data.forEach((item) => {
        const article = document.createElement("article");
        article.className = "news-card";
        article.style.opacity = "0";
        article.style.transform = "translateY(20px)";
        article.style.transition = "opacity 0.6s ease, transform 0.6s ease";

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

      // Trigger animation for new elements
      setTimeout(() => {
        window.dispatchEvent(new Event("scroll"));
      }, 100);
    } else {
      container.innerHTML = "<p>Tidak ada berita saat ini.</p>";
    }
  } catch (err) {
    console.error("Error loading berita:", err);
    container.innerHTML = "<p>Gagal memuat berita.</p>";
  }
}

async function muatGaleri() {
  const container = document.getElementById("galeri-container");
  if (!container) return;

  try {
    const { data, error } = await supabase
      .from("galeri")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    if (data && data.length > 0) {
      container.innerHTML = "";
      data.forEach((item) => {
        const div = document.createElement("div");
        div.className = "gallery-item";
        div.style.opacity = "0";
        div.style.transform = "translateY(20px)";
        div.style.transition = "opacity 0.6s ease, transform 0.6s ease";

        div.innerHTML = `
          <img src="${item.gambar_url || "images/Galeri1.JPG"}" alt="${item.judul}" onerror="this.src='images/Galeri1.JPG'">
          <div class="gallery-overlay">
            <div class="gallery-info">
              <h3>${item.judul}</h3>
              <p>${item.keterangan || ""}</p>
            </div>
          </div>
        `;

        // Re-attach click event for lightbox since these are dynamic
        div.addEventListener("click", () => {
            if (typeof openLightbox === 'function') {
                openLightbox(item.gambar_url || "images/Galeri1.JPG", item.judul, item.keterangan || "");
            }
        });

        container.appendChild(div);
      });

      // Trigger animation for new elements
      setTimeout(() => {
        window.dispatchEvent(new Event("scroll"));
      }, 100);
    } else {
      container.innerHTML = "<p>Tidak ada galeri saat ini.</p>";
    }
  } catch (err) {
    console.error("Error loading galeri:", err);
    container.innerHTML = "<p>Gagal memuat galeri.</p>";
  }
}
