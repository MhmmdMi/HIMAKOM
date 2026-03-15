function toggleChat() {
    const chat = document.getElementById("chat-container");

    if (chat.style.display === "flex") {
        chat.style.display = "none";
    } else {
        chat.style.display = "flex";
    }
}

function handleSend() {
    const input = document.getElementById("user-msg");
    const display = document.getElementById("chat-display");

    const msg = input.value.toLowerCase().trim();
    if (msg === "") return;

    // tampilkan pesan user
    display.innerHTML += `<div class="user-msg">${input.value}</div>`;

    let reply = "Maaf, saya belum mengerti pertanyaan tersebut.";

    // =========================
    // KATA KUNCI CHATBOT
    // =========================

    if (
        msg.includes("halo") ||
        msg.includes("hai") ||
        msg.includes("hello")
    ) {
        reply = "Halo! Selamat datang di website HIMAKOM 👋 Ada yang bisa saya bantu?";
    }

    else if (
        msg.includes("himakom") ||
        msg.includes("apa itu himakom")
    ) {
        reply = "HIMAKOM adalah Himpunan Mahasiswa Komputer yang menjadi wadah pengembangan akademik, teknologi, dan kreativitas mahasiswa Ilmu Komputer.";
    }

    else if (
        msg.includes("ketua") ||
        msg.includes("ketua himakom")
    ) {
        reply = "Ketua HIMAKOM saat ini adalah [NAMA_KETUA].";
    }

    else if (
        msg.includes("visi")
    ) {
        reply = "Visi HIMAKOM adalah menjadi organisasi mahasiswa yang unggul dalam pengembangan teknologi, inovasi digital, dan kontribusi bagi masyarakat.";
    }

    else if (
        msg.includes("misi")
    ) {
        reply = `
        Misi HIMAKOM:
        <br>1. Mengembangkan kemampuan teknologi mahasiswa.
        <br>2. Mendorong inovasi digital.
        <br>3. Membentuk mahasiswa yang kolaboratif.
        <br>4. Berkontribusi untuk masyarakat melalui teknologi.
        `;
    }

    else if (
        msg.includes("program kerja") ||
        msg.includes("proker")
    ) {
        reply = "Beberapa program kerja HIMAKOM antara lain: Seminar Teknologi, Workshop Programming, Lomba IT, dan Pengabdian Masyarakat.";
    }

    else if (
        msg.includes("kegiatan") ||
        msg.includes("event")
    ) {
        reply = "Kegiatan HIMAKOM meliputi seminar IT, pelatihan coding, lomba teknologi, dan kegiatan pengembangan mahasiswa.";
    }

    else if (
        msg.includes("anggota") ||
        msg.includes("gabung") ||
        msg.includes("daftar")
    ) {
        reply = "Untuk bergabung dengan HIMAKOM, silakan mengikuti Open Recruitment yang biasanya diumumkan melalui website dan media sosial HIMAKOM.";
    }

    else if (
        msg.includes("kontak") ||
        msg.includes("hubungi") ||
        msg.includes("instagram")
    ) {
        reply = "Anda dapat menghubungi HIMAKOM melalui Instagram resmi atau email organisasi yang tersedia di halaman kontak.";
    }

    else if (
        msg.includes("terima kasih") ||
        msg.includes("makasih")
    ) {
        reply = "Sama-sama 😊 Senang bisa membantu.";
    }

    // =========================
    // TAMPILKAN JAWABAN BOT
    // =========================

    display.innerHTML += `<div class="bot-msg">${reply}</div>`;

    display.scrollTop = display.scrollHeight;
    input.value = "";
}

function toggleChat() {
    const chat = document.getElementById("chat-container");

    if (chat.style.display === "flex") {
        chat.style.display = "none";
    } else {
        chat.style.display = "flex";
    }
}

function handleSend() {
    const input = document.getElementById("user-msg");
    const display = document.getElementById("chat-display");

    let msg = input.value.toLowerCase().trim();
    if (msg === "") return;

    display.innerHTML += `<div class="user-message">${input.value}</div>`;

    let reply = "Maaf, saya belum mengerti pertanyaan itu. Silakan tanyakan tentang HIMAKOM.";

    if (msg.includes("halo") || msg.includes("hai") || msg.includes("hi")) {
        reply = "Halo 👋 Selamat datang di website HIMAKOM. Ada yang bisa saya bantu?";
    }

    else if (msg.includes("himakom") || msg.includes("apa itu himakom")) {
        reply = "HIMAKOM adalah Himpunan Mahasiswa Ilmu Komputer yang menjadi wadah mahasiswa untuk berkembang dalam bidang teknologi, organisasi, dan inovasi digital.";
    }

    else if (msg.includes("ketua") || msg.includes("ketua himakom")) {
        reply = "Ketua HIMAKOM saat ini adalah [ISI NAMA KETUA].";
    }

    else if (msg.includes("visi")) {
        reply = "Visi HIMAKOM adalah menjadi organisasi mahasiswa yang inovatif, kolaboratif, dan berkontribusi dalam pengembangan teknologi untuk masyarakat.";
    }

    else if (msg.includes("misi")) {
        reply = "Misi HIMAKOM meliputi: meningkatkan kompetensi mahasiswa, mengembangkan project teknologi, serta membangun kolaborasi dengan berbagai pihak.";
    }

    else if (msg.includes("program kerja") || msg.includes("proker")) {
        reply = "Beberapa program kerja HIMAKOM antara lain: Seminar Teknologi, Workshop Programming, Lomba IT, dan Pengabdian Masyarakat berbasis teknologi.";
    }

    else if (msg.includes("divisi") || msg.includes("bidang")) {
        reply = "HIMAKOM memiliki beberapa divisi seperti: Divisi Pendidikan, Divisi Media & Informasi, Divisi Riset & Teknologi, serta Divisi Humas.";
    }

    else if (msg.includes("anggota") || msg.includes("gabung") || msg.includes("daftar")) {
        reply = "Untuk bergabung dengan HIMAKOM, mahasiswa Ilmu Komputer dapat mengikuti Open Recruitment yang biasanya dibuka setiap awal semester.";
    }

    else if (msg.includes("kegiatan") || msg.includes("event")) {
        reply = "HIMAKOM sering mengadakan kegiatan seperti workshop coding, seminar IT, lomba teknologi, dan kegiatan sosial.";
    }

    else if (msg.includes("kontak") || msg.includes("hubungi")) {
        reply = "Anda dapat menghubungi HIMAKOM melalui Instagram atau email resmi yang tersedia di halaman kontak website.";
    }

    else if (msg.includes("terima kasih") || msg.includes("thanks")) {
        reply = "Sama-sama 😊 Senang bisa membantu.";
    }

    display.innerHTML += `<div class="bot-message">${reply}</div>`;

    display.scrollTop = display.scrollHeight;
    input.value = "";
}
