// script.js - Agrinho 2026 - Bernardo Daleves Bonatto

document.addEventListener('DOMContentLoaded', () => {
    
    // ====================== SCROLL SUAVE ======================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ====================== MENU MOBILE ======================
    const nav = document.querySelector('nav');
    const menuHTML = `
        <div class="mobile-menu">
            <button class="menu-btn" aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    `;
    
    // Adiciona botão de menu mobile
    nav.innerHTML += menuHTML;

    const menuBtn = document.querySelector('.menu-btn');
    const navUl = document.querySelector('nav ul');

    menuBtn.addEventListener('click', () => {
        navUl.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });

    // Fecha menu ao clicar em um link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            navUl.classList.remove('active');
            menuBtn.classList.remove('active');
        });
    });

    // ====================== ANIMAÇÃO AO SCROLL ======================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .sobre').forEach(el => {
        el.style.transition = 'all 0.8s ease';
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        observer.observe(el);
    });

    // ====================== CONTADOR DE VISITAS ======================
    function updateVisitCounter() {
        let visits = localStorage.getItem('agrinhoVisits') || 0;
        visits = parseInt(visits) + 1;
        localStorage.setItem('agrinhoVisits', visits);
        
        const counterElement = document.createElement('div');
        counterElement.style.position = 'fixed';
        counterElement.style.bottom = '20px';
        counterElement.style.right = '20px';
        counterElement.style.background = 'var(--verde)';
        counterElement.style.color = 'white';
        counterElement.style.padding = '10px 16px';
        counterElement.style.borderRadius = '30px';
        counterElement.style.fontSize = '0.9rem';
        counterElement.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
        counterElement.style.zIndex = '1000';
        counterElement.innerHTML = `👥 Visitas: <strong>${visits}</strong>`;
        document.body.appendChild(counterElement);

        setTimeout(() => {
            counterElement.style.transition = 'opacity 1s';
            counterElement.style.opacity = '0';
            setTimeout(() => counterElement.remove(), 1000);
        }, 4000);
    }

    // ====================== CONFETTI (ao clicar no botão) ======================
    function launchConfetti() {
        const colors = ['#2e7d32', '#f9c74f', '#1b5e20', '#81c784'];
        
        for (let i = 0; i < 80; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.top = '-10px';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.borderRadius = '50%';
                confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.zIndex = '9999';
                confetti.style.opacity = Math.random() + 0.5;
                document.body.appendChild(confetti);

                const animationDuration = Math.random() * 3 + 2;
                confetti.animate([
                    { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                    { transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
                ], {
                    duration: animationDuration * 1000,
                    easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
                });

                setTimeout(() => confetti.remove(), animationDuration * 1000);
            }, i * 30);
        }
    }

    // Ativa confetti no botão principal
    const mainBtn = document.querySelector('.btn');
    if (mainBtn) {
        mainBtn.addEventListener('click', (e) => {
            if (Math.random() > 0.5) launchConfetti(); // 50% de chance de soltar confetes
        });
    }

    // ====================== ATUALIZA ANO AUTOMATICAMENTE ======================
    const currentYear = new Date().getFullYear();
    document.querySelectorAll('.ano').forEach(el => {
        if (el.textContent.includes('2026')) {
            el.textContent = currentYear;
        }
    });

    // ====================== INICIALIZAÇÃO ======================
    console.log('%c🌱 Site do Agrinho 2026 - Bernardo Daleves Bonatto carregado com sucesso!', 
                'color: #2e7d32; font-weight: bold; font-size: 14px;');

    updateVisitCounter();

    // Dica para o GitHub Pages
    console.log('%c📌 Não esqueça de subir os 3 arquivos: index.html, style.css e script.js', 
                'color: #f9c74f; font-weight: 600;');
});
