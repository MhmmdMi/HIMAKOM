function toggleChat() {
    const chat = document.getElementById('chat-container');
    if (chat.style.display === 'flex') {
        chat.style.display = 'none';
    } else {
        chat.style.display = 'flex';
    }
}

function handleSend() {
    const input = document.getElementById('user-msg');
    const display = document.getElementById('chat-display');
    
    if (input.value.trim() === "") return;

    // Tampilkan pesan Anda
    display.innerHTML += `<div style="margin-bottom:10px; text-align:right;">
        <span style="background:#6272a4; padding:5px 10px; border-radius:10px;">${input.value}</span>
    </div>`;
    
    const userText = input.value.toLowerCase();
    input.value = ""; // Kosongkan input

    // Balasan Otomatis (Simulasi AI)
    setTimeout(() => {
        let reply = "Maaf, saya masih belajar. Bisa tanya hal lain?";
        
        if (userText.includes("halo") || userText.includes("hi")) {
            reply = "Halo! Senang bertemu Anda di website ini.";
        } else if (userText.includes("siapa")) {
            reply = "Saya adalah asisten AI sederhana di website ini.";
        } else if (userText.includes("proyek") || userText.includes("kuliah")) {
            reply = "Wah, sepertinya Anda tertarik dengan proyek saya. Silakan cek di bagian portfolio!";
        }

        display.innerHTML += `<div style="margin-bottom:10px;">
            <span style="background:#44475a; padding:5px 10px; border-radius:10px; color:#50fa7b;">${reply}</span>
        </div>`;
        display.scrollTop = display.scrollHeight; // Scroll otomatis ke bawah
    }, 600);
}
