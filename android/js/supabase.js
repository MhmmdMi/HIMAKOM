// Inisialisasi Supabase
const SUPABASE_URL = 'https://apqpkdlfsqxrbpvelprv.supabase.co'
const SUPABASE_ANON_KEY = 'isi_anon_key_kamu_disini'

const { createClient } = window.supabase
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// ============ BERITA ============
async function loadBerita() {
  const { data, error } = await db.from('berita').select('*').order('created_at', { ascending: false })
  if (error) { console.error('Error berita:', error); return }
  
  const container = document.getElementById('berita-container')
  if (!container) return
  
  container.innerHTML = data.map(item => `
    <div class="news-card">
      <img src="${item.gambar_url || 'images/default.jpg'}" alt="${item.judul}">
      <div class="news-content">
        <h3>${item.judul}</h3>
        <p>${item.keterangan}</p>
        <small>${new Date(item.created_at).toLocaleDateString('id-ID')}</small>
      </div>
    </div>
  `).join('')
}

// ============ GALERI ============
async function loadGaleri() {
  const { data, error } = await db.from('galeri').select('*').order('created_at', { ascending: false })
  if (error) { console.error('Error galeri:', error); return }
  
  const container = document.getElementById('galeri-container')
  if (!container) return
  
  container.innerHTML = data.map(item => `
    <div class="gallery-item">
      <img src="${item.gambar_url || 'images/default.jpg'}" alt="${item.judul}">
      <h3>${item.judul}</h3>
      <p>${item.keterangan}</p>
    </div>
  `).join('')
}

// Jalankan saat halaman load
document.addEventListener('DOMContentLoaded', () => {
  loadBerita()
  loadGaleri()
})
