// Supabase Loader - Sinkron dengan index.html
document.addEventListener("DOMContentLoaded", () => {
  console.log("Supabase Loader Started...");
  muatBerita();
  muatGaleri();
});

async function muatBerita() {
  const container = document.getElementById("berita-container"); // Pastikan ID ini sama dengan di index.html
  if (!container) {
    console.error("Container berita-container tidak ditemukan!");
    return;
  }

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
      console.log("Berita berhasil dimuat:", data.length);
    } else {
      container.innerHTML = "<p style='text-align:center; color:#888;'>Belum ada berita terbaru.</p>";
    }
  } catch (err) {
    console.error("Error loading berita:", err);
    container.innerHTML = "<p>Gagal memuat berita.</p>";
  }
}

async function muatGaleri() {
  const container = document.getElementById("galeri-container"); // Pastikan ID ini sama dengan di index.html
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
        div.innerHTML = `
          <img src="${item.gambar_url || "images/Galeri1.JPG"}" alt="${item.judul}" onerror="this.src='images/Galeri1.JPG'">
          <div class="gallery-overlay">
            <div class="gallery-info">
              <h3>${item.judul}</h3>
              <p>${item.keterangan || ""}</p>
            </div>
          </div>
        `;
        // Re-attach lightbox
        div.addEventListener("click", () => {
            if (typeof openLightbox === 'function') {
                openLightbox(item.gambar_url || "images/Galeri1.JPG", item.judul, item.keterangan || "");
            }
        });
        container.appendChild(div);
      });
    } else {
      container.innerHTML = "<p style='text-align:center; color:#888;'>Belum ada foto galeri.</p>";
    }
  } catch (err) {
    console.error("Error loading galeri:", err);
  }
}
