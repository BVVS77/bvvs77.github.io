// Particles.js Konfiguracja
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 120, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#00bcd4" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": true },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#00bcd4", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 2 }
    },
    "interactivity": {
        "events": {
            "onhover": { "enable": true, "mode": "repulse" },
            "onclick": { "enable": true, "mode": "push" }
        },
        "modes": {
            "repulse": { "distance": 100 },
            "push": { "particles_nb": 4 }
        }
    },
    "retina_detect": true
});

// Scroll Reveal Animacje
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
});


// Discord Webhook
const webhookURL = 'https://discord.com/api/webhooks/YOUR_WEBHOOK_URL';

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const payload = {
        content: `📩 Nowa wiadomość z formularza kontaktowego:\n**Imię:** ${name}\n**Email:** ${email}\n**Wiadomość:** ${message}`
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('formResponse').innerHTML = '<p class="success">✅ Wiadomość wysłana!</p>';
            document.getElementById('contactForm').reset();
        } else {
            document.getElementById('formResponse').innerHTML = '<p class="error">❌ Błąd podczas wysyłania.</p>';
        }
    })
    .catch(() => {
        document.getElementById('formResponse').innerHTML = '<p class="error">❌ Nie udało się połączyć z serwerem.</p>';
    });
});
