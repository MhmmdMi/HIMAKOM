function toggleChat(){

const chat=document.getElementById("chat-container")

if(chat.style.display==="none"){
chat.style.display="flex"
}else{
chat.style.display="none"
}

}

function quickAsk(text){
document.getElementById("user-msg").value=text
handleSend()
}

function handleSend(){

const input=document.getElementById("user-msg")
const display=document.getElementById("chat-display")

const msg=input.value.toLowerCase().trim()
if(msg==="") return

display.innerHTML+=`
<div class="chat user">
<div class="bubble">
${input.value}
<div class="meta">${getChatTime()} ✓✓</div>
</div>
</div>
`

let reply="Maaf saya belum memahami pertanyaan tersebut."

// =====================
// PERTANYAAN UMUM
// =====================

if(msg.includes("halo")||msg.includes("hai")){
reply="Halo 👋 Saya AI HIMAKOM. Silakan tanyakan tentang organisasi HIMAKOM."
}

else if(msg.includes("siapa kamu")){
reply="Saya adalah AI HIMAKOM, asisten virtual website HIMAKOM."
}

else if(msg.includes("apa itu himakom")||msg.includes("himakom")){
reply="HIMAKOM adalah Himpunan Mahasiswa Ilmu Komputer yang menjadi wadah pengembangan akademik, teknologi, dan kreativitas mahasiswa."
}

// =====================
// STRUKTUR ORGANISASI
// =====================

else if(msg.includes("ketua")){
reply=`
Ketua HIMAKOM<br>
• Muhammad Halim Ihsan
`
}

else if(msg.includes("wakil ketua")){
reply=`
Wakil Ketua HIMAKOM<br>
• Andriani
`
}

else if(msg.includes("sekretaris")){
reply=`
Sekretaris HIMAKOM<br>
• Sekretaris 1 : [Riska Maulida 1]<br>
• Sekretaris 2 : [Siti Hasanah 2]
`
}

else if(msg.includes("bendahara")){
reply=`
Bendahara HIMAKOM<br>
• Bendahara 1 : [Siti Munirah 1]<br>
• Bendahara 2 : [Rahmida Ariani 2]
`
}

// =====================
// DIVISI
// =====================

else if(msg.includes("divisi")||msg.includes("bidang")){
reply=`
Divisi HIMAKOM terdiri dari:<br><br>

1️⃣ Divisi Pendidikan dan Keilmuan<br>
2️⃣ Divisi Riset dan Teknologi<br>
3️⃣ Divisi Minat dan Bakat<br>
4️⃣ Divisi Humas<br>
5️⃣ Anggota HIMAKOM
`
}

// =====================
// DETAIL DIVISI
// =====================

else if(msg.includes("divisi pendidikan")){
reply=`
Divisi Pendidikan<br><br>

Koordinator:<br>
• Riantama Saputra

Anggota:<br>
• Hayatun Nisa<br>
• Husniyaturridha<br>
• Ediy Winata<br>
• Radiati<br>
`
}

else if(msg.includes("divisi penelitian")||msg.includes("penelitian teknologi")){
reply=`
Divisi Riset & Teknologi<br><br>

Koordinator:<br>
• Muhammad Akbar

Anggota:<br>
• Abdul Hakim<br>
• Hadi Rusadi<br>
• Arbaniah Heliany<br>
• Muhammad Randu<br>
`
}

else if(msg.includes("anggota HIMAKOM")){
reply=`
Anggota HIMAKOM<br><br>


Anggota:<br>
• Marlina<br>
• Irwin Mujahidin<br>
• Emelia Hartati <br>
• Sayyid Akhmad Husain<br>
• M. Riduan Safutra<br>
`
}

else if(msg.includes("divisi humas")){
reply=`
Divisi Hubungan Masyarakat (Humas)<br><br>

Koordinator:<br>
• Delima Rahmawati

Anggota:<br>
• Hanisa<br>
• Muhammad Farhan<br>
• M. Nafiz Artana<br>
• Siti Al Munawarah<br>
`
}

else if(msg.includes("divisi minat dan bakat")){
reply=`
Divisi Minat dan Bakat<br><br>

Koordinator:<br>
• Tiara

Anggota:<br>
•  Riski Amelia<br>
•  Aulia Rahmah<br>
•  Fanisa Widya <br>
•  M. Irza Arisandi<br>
`
}

// =====================
// VISI MISI
// =====================

else if(msg.includes("visi")){
reply="Menciptakan ekosistem daerah cerdas (Smart Region) yang terhubung, transparan, dan berkeadilan demi meningkatkan kualitas hidup masyarakat."
}

else if(msg.includes("misi")){
reply=`
Misi HIMAKOM:<br>
1. Infrastruktur Digital: Mengadvokasi dan berpartisipasi dalam pembangunan infrastruktur digital yang merata hingga ke pelosok daerah.<br>
2. Data-Driven Decision: Mendorong penggunaan data dan analitik dalam setiap pengambilan keputusan kebijakan pembangunan daerah.<br>
3. Partisipasi Publik: Mengembangkan platform digital yang mempermudah partisipasi masyarakat dalam pengawasan dan pembangunan daerah (e-governance).<br>
4. Keberlanjutan: Memanfaatkan teknologi hijau (green tech) untuk memastikan kemajuan daerah tidak merusak lingkungan.<br>
`
}

// =====================
// PROGRAM KERJA
// =====================

else if(msg.includes("proker")||msg.includes("program kerja")){
reply=`
Program kerja HIMAKOM:<br><br>

• Seminar Teknologi<br>
• Workshop Programming<br>
• Pelatihan Coding<br>
• Pengabdian Masyarakat
`
}

// =====================
// KEGIATAN
// =====================

else if(msg.includes("kegiatan")||msg.includes("event")){
reply="HIMAKOM sering mengadakan seminar IT, workshop coding, lomba teknologi, dan kegiatan pengembangan mahasiswa."
}

// =====================
// PENDAFTARAN
// =====================

else if(msg.includes("gabung")||msg.includes("anggota")){
reply="Untuk bergabung dengan HIMAKOM silakan mengikuti Open Recruitment yang diumumkan melalui media sosial HIMAKOM."
}

// =====================
// KONTAK
// =====================

else if(msg.includes("kontak")||msg.includes("instagram")){
reply="Anda dapat menghubungi HIMAKOM melalui Instagram resmi organisasi."
}

else if(msg.includes("terima kasih")){
reply="Sama-sama 😊 Senang membantu."
}

// =====================
// EFEK MENGETIK
// =====================

const typing=`
<div class="chat bot" id="typing">
<img src="images/ai.png" class="avatar">
<div class="bubble typing">
<span></span>
<span></span>
<span></span>
</div>
</div>
`

display.innerHTML+=typing
display.scrollTop=display.scrollHeight

setTimeout(()=>{

document.getElementById("typing").remove()

display.innerHTML+=`
<div class="chat bot">
<img src="images/ai.png" class="avatar">
<div class="bubble">
${reply}
<div class="meta">${getChatTime()}</div>
</div>
</div>
`

display.scrollTop=display.scrollHeight

},800)

input.value=""

}
