document.addEventListener('DOMContentLoaded', () => {// --- Day/Night Mode Section ---
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const icon = toggleBtn.querySelector('i');
            // আইকন পাল্টানোর লজিক
            if (document.body.classList.contains('light-mode')) {
                icon.classList.replace('fa-moon', 'fa-sun');
            } else {
                icon.classList.replace('fa-sun', 'fa-moon');
            }
        });
    }
    // ------------------------------
    const chatInput = document.getElementById('chat-input');
    const chatRes = document.getElementById('chat-res');
    const sendBtn = document.getElementById('send-btn');

    // Chat Logic Function
    function getReply() {
        let val = chatInput.value.toLowerCase().trim();
        if (val === "") return;

        chatRes.innerHTML = "<i>Typing...</i>"; // ছোট একটা অ্যানিমেশন এফেক্ট

        setTimeout(() => {
            if (val.includes('hi') || val.includes('hello') || val.includes('oi')) {
                chatRes.innerText = "Hello! 👋 I am Debu's personal assistant. How can I help you today?";
            } else if (val.includes('name')) {
                chatRes.innerText = "His name is Debobroto Barkandaj, but friends call him Debu.";
            } else if (val.includes('skill') || val.includes('work')) {
                chatRes.innerText = "He is a BCA student specialized in Web Dev & Cybersecurity. He loves solving real-life problems!";
            } else if (val.includes('contact') || val.includes('social')) {
                chatRes.innerText = "You can find his social links at the bottom of this page!";
            } else if (val.includes('resume')) {
                chatRes.innerText = "Click the 'View Resume' button in the center to see his CV!";
            } else {
                chatRes.innerText = "That's cool! But I'm a simple bot. You can ask about Debu's skills, name, or just say Hi!";
            }
        }, 600); // ০.৬ সেকেন্ড পর রিপ্লাই আসবে, যা দেখতে রিয়েল লাগবে

        chatInput.value = ""; 
    }

    // Click Send Button
    sendBtn.addEventListener('click', getReply);

    // Press Enter Key
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') getReply();
    });

    // Draggable Feature (Better Version)
    const chatbot = document.getElementById('chatbot');
    const handle = document.getElementById('chat-handle');
    let isDragging = false;
    let offset = [0,0];

    handle.addEventListener('mousedown', (e) => {
        isDragging = true;
        offset = [chatbot.offsetLeft - e.clientX, chatbot.offsetTop - e.clientY];
    }, true);

    document.addEventListener('mouseup', () => { isDragging = false; }, true);

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            chatbot.style.left = (e.clientX + offset[0]) + 'px';
            chatbot.style.top  = (e.clientY + offset[1]) + 'px';
            chatbot.style.bottom = 'auto';
            chatbot.style.right = 'auto';
        }
    }, true);
});
function toggleSkill(id) {
    const element = document.getElementById(id);
    // যদি আগে থেকেই খোলা থাকে তবে বন্ধ করবে, নাহলে খুলবে
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        // সব স্কিল ডিটেইলস আগে বন্ধ করে দেওয়া ভালো
        document.querySelectorAll('.skill-details').forEach(el => el.style.display = 'none');
        element.style.display = "block";
    }
}
