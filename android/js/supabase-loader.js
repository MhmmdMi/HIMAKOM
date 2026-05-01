// ============================================================
// supabase-loader.js
// Letakkan file ini di folder: js/supabase-loader.js
// ============================================================

// Inisialisasi Supabase
const SUPABASE_URL = 'https://apqpkdlfsqxrbpvelprv.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_kfmJ_RuYCRplSuHfNF-Y2Q_Vl1igCKH'

const { createClient } = window.supabase
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// ============================================================
// BERITA
// ============================================================
async function loadBerita() {
  const container = document.getElementById('berita-container')
  if (!container) return

  container.innerHTML = '<p style="text-align:center;color:#666">Memuat berita...</p>'

  const { data, error } = await db
    .from('berita')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error berita:', error);
    container.innerHTML = `<p style="text-align:center;color:red">Gagal memuat berita: ${error.message}</p>`;
    return;
  }

  if (!data || data.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:#666">Belum ada berita.</p>'
    return
  }

  container.innerHTML = data.map(item => `
    <div class="news-card">
      <img src="${item.gambar_url || 'images/Berita1.jpeg'}" alt="${item.judul}" onerror="this.src='images/Berita1.jpeg'">
      <div class="news-content">
        <small class="news-date">${item.tanggal || new Date(item.created_at).toLocaleDateString('id-ID', { day:'2-digit', month:'long', year:'numeric' })}</small>
        <h3>${item.judul}</h3>
        <p>${item.isi || ''}</p>
        <a href="#" class="read-more">Baca Selengkapnya →</a>
      </div>
    </div>
  `).join('')
}

// ============================================================
// GALERI
// ============================================================
async function loadGaleri() {
  const container = document.getElementById('galeri-container')
  if (!container) return

  container.innerHTML = '<p style="text-align:center;color:#666">Memuat galeri...</p>'

  const { data, error } = await db
    .from('galeri')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error galeri:', error);
    container.innerHTML = `<p style="text-align:center;color:red">Gagal memuat galeri: ${error.message}</p>`;
    return;
  }

  if (!data || data.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:#666">Belum ada foto galeri.</p>'
    return
  }

  container.innerHTML = data.map(item => `
    <div class="gallery-item">
      <img src="${item.gambar_url || 'images/Galeri1.JPG'}" alt="${item.judul}" onerror="this.src='images/Galeri1.JPG'">
      <div class="gallery-caption">
        <h3>${item.judul}</h3>
        <p>${item.keterangan || ''}</p>
      </div>
    </div>
  `).join('')
}

// ============================================================
// Jalankan saat halaman siap
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  loadBerita()
  loadGaleri()
})
