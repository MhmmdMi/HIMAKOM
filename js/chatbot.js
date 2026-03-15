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
<div class="name">Anda</div>
<div class="bubble">${input.value}</div>
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
• [Nama Wakil Ketua]
`
}

else if(msg.includes("sekretaris")){
reply=`
Sekretaris HIMAKOM<br>
• Sekretaris 1 : [Nama Sekretaris 1]<br>
• Sekretaris 2 : [Nama Sekretaris 2]
`
}

else if(msg.includes("bendahara")){
reply=`
Bendahara HIMAKOM<br>
• Bendahara 1 : [Nama Bendahara 1]<br>
• Bendahara 2 : [Nama Bendahara 2]
`
}

// =====================
// DIVISI
// =====================

else if(msg.includes("divisi")||msg.includes("bidang")){
reply=`
Divisi HIMAKOM terdiri dari:<br><br>

1️⃣ Divisi Pendidikan<br>
2️⃣ Divisi Riset & Teknologi<br>
3️⃣ Divisi Media & Informasi<br>
4️⃣ Divisi Humas<br>
5️⃣ Divisi Pengembangan SDM
`
}

// =====================
// DETAIL DIVISI
// =====================

else if(msg.includes("divisi pendidikan")){
reply=`
Divisi Pendidikan<br><br>

Koordinator:<br>
• [Nama Koordinator]

Anggota:<br>
• [Anggota 1]<br>
• [Anggota 2]<br>
• [Anggota 3]
`
}

else if(msg.includes("divisi riset")||msg.includes("riset teknologi")){
reply=`
Divisi Riset & Teknologi<br><br>

Koordinator:<br>
• [Nama Koordinator]

Anggota:<br>
• [Anggota 1]<br>
• [Anggota 2]<br>
• [Anggota 3]
`
}

else if(msg.includes("divisi media")){
reply=`
Divisi Media & Informasi<br><br>

Koordinator:<br>
• [Nama Koordinator]

Anggota:<br>
• [Anggota 1]<br>
• [Anggota 2]<br>
• [Anggota 3]
`
}

else if(msg.includes("divisi humas")){
reply=`
Divisi Hubungan Masyarakat (Humas)<br><br>

Koordinator:<br>
• [Nama Koordinator]

Anggota:<br>
• [Anggota 1]<br>
• [Anggota 2]
`
}

else if(msg.includes("divisi sdm")||msg.includes("pengembangan sdm")){
reply=`
Divisi Pengembangan SDM<br><br>

Koordinator:<br>
• [Nama Koordinator]

Anggota:<br>
• [Anggota 1]<br>
• [Anggota 2]
`
}

// =====================
// VISI MISI
// =====================

else if(msg.includes("visi")){
reply="Visi HIMAKOM adalah menjadi organisasi mahasiswa yang unggul dalam teknologi dan inovasi digital."
}

else if(msg.includes("misi")){
reply=`
Misi HIMAKOM:<br>
1. Mengembangkan kemampuan teknologi mahasiswa<br>
2. Mendorong inovasi digital<br>
3. Membangun kolaborasi mahasiswa<br>
4. Berkontribusi kepada masyarakat melalui teknologi
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
• Lomba IT<br>
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
<div class="name">AI HIMAKOM</div>
<div class="bubble">Mengetik...</div>
</div>
`

display.innerHTML+=typing
display.scrollTop=display.scrollHeight

setTimeout(()=>{

document.getElementById("typing").remove()

display.innerHTML+=`
<div class="chat bot">
<div class="name">AI HIMAKOM</div>
<div class="bubble">${reply}</div>
</div>
`

display.scrollTop=display.scrollHeight

},800)

input.value=""

}
