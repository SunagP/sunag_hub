// Modal Data
const modalData = {
    portfolio: {
        icon: '<i class="fas fa-rocket"></i>',
        title: 'Portfolio',
        desc: 'Explore my complete body of work — software projects, design experiments, and technical builds. From full-stack applications to creative tools, each project represents a unique challenge solved with thoughtful engineering.',
        link: 'https://sunagp.github.io/portfolio/index.html'
    },
    dsa: {
        icon: '<i class="fas fa-code"></i>',
        title: 'DSA Roadmap',
        desc: 'A comprehensive, battle-tested roadmap for mastering Data Structures & Algorithms. Covers arrays, trees, graphs, dynamic programming, and advanced patterns — organized for systematic interview preparation.',
        link: 'https://drive.google.com/drive/folders/1CGA2bmr52DB5JafXbklV1UwKhKsLVwUP'
    },
    research: {
        icon: '<i class="fas fa-shield-halved"></i>',
        title: 'Research Paper',
        desc: 'IEEE-published research exploring advanced cryptographic methodologies. This work contributes to the domain of secure communication and data protection, addressing modern challenges in information security.',
        link: 'https://ieeexplore.ieee.org/abstract/document/10127657'
    },
    ebook: {
        icon: '<i class="fas fa-book"></i>',
        title: 'E-Book — OOPs Concepts',
        desc: 'BrushStrokes of OOP Wisdom — a thoughtfully crafted e-book that breaks down Object-Oriented Programming into digestible, intuitive concepts. Covers the four pillars (Encapsulation, Inheritance, Polymorphism, Abstraction) with real-world examples and clean illustrations.',
        link: 'https://sunagpis19.gumroad.com/l/xvqplkn'
    },
    ravana: {
        icon: '<i class="fas fa-fire"></i>',
        title: 'Ravana Files',
        desc: 'A YouTube channel that dives deep into the untold stories of Indian mythology. From philosophical explorations to historical analysis — connecting ancient wisdom with contemporary understanding.',
        link: 'https://www.youtube.com/@TheRavanafiles/'
    },
    tatva: {
        icon: '<i class="fas fa-film"></i>',
        title: 'TATVA',
        desc: 'A philosophical short film that explores the fundamental essence of human existence. TATVA delves into what gives life meaning, through poetic visuals and introspective storytelling.',
        link: 'https://www.youtube.com/watch?v=p5mfVBpgZD0'
    },
    aarohi: {
        icon: '<i class="fas fa-film"></i>',
        title: 'AAROHI',
        desc: 'An emotional narrative that traces the arc of human feelings — from joy to despair and back again. AAROHI captures the beauty of vulnerability and the strength found in acceptance.',
        link: 'https://www.youtube.com/watch?v=qBbY3yFbKbQ'
    },
    wtf: {
        icon: '<i class="fas fa-film"></i>',
        title: 'WTF',
        desc: 'A suspense-driven story that plays with perception and reality. With unexpected twists and a tight narrative, WTF delivers an experience that keeps viewers questioning everything until the very end.',
        link: 'https://www.youtube.com/watch?v=wr-a6qxc0do'
    },
    drakker: {
        icon: '<i class="fas fa-film"></i>',
        title: 'DRAKKER',
        desc: 'A dark, cinematic exploration of the human psyche. DRAKKER uses stark visuals and bold storytelling to venture into themes that mainstream cinema often avoids — raw, unfiltered, and deeply impactful.',
        link: 'https://www.youtube.com/watch?v=IhhJHxDi-Kg'
    },
    harag: {
        icon: '<i class="fas fa-film"></i>',
        title: 'HARAG',
        desc: 'A Kannada-language short film that channels raw emotion through culturally rooted storytelling. HARAG explores anger, pain, and the path to emotional liberation within a regional narrative framework.',
        link: 'https://www.youtube.com/watch?v=Krb4SZniTZY'
    }
};

// Modal Functions
function openModal(key) {
    const data = modalData[key];
    if (!data) return;

    document.getElementById('modalIcon').innerHTML = data.icon;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDesc').textContent = data.desc;
    document.getElementById('modalLink').href = data.link;
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(event) {
    if (event.target === event.currentTarget) {
        closeModalDirect();
    }
}

function closeModalDirect() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModalDirect();
        closeContactPanel();
    }
});

// Contact Panel
function toggleContactPanel() {
    const panel = document.getElementById('contactPanel');
    panel.classList.toggle('active');
}

function closeContactPanel() {
    const panel = document.getElementById('contactPanel');
    panel.classList.remove('active');
}

document.addEventListener('click', (e) => {
    const panel = document.getElementById('contactPanel');
    const status = document.getElementById('navStatus');
    if (panel && !panel.contains(e.target) && !status.contains(e.target)) {
        panel.classList.remove('active');
    }
});

// Films Dropdown
function toggleFilmsDropdown(event) {
    event.stopPropagation();
    const dropdown = document.getElementById('filmsDropdown');
    const arrow = document.getElementById('filmsArrow');
    const isOpen = dropdown.classList.contains('open');

    if (isOpen) {
        dropdown.style.maxHeight = '0';
        dropdown.classList.remove('open');
        arrow.classList.remove('rotated');
    } else {
        dropdown.classList.add('open');
        dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
        arrow.classList.add('rotated');

        setTimeout(() => {
            dropdown.querySelectorAll('.film-card').forEach((card, i) => {
                setTimeout(() => card.classList.add('visible'), i * 80);
            });
        }, 100);
    }
}

// Particle System
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: 0, y: 0 };
        this.resize();
        this.init();
        this.animate();

        window.addEventListener('resize', () => this.resize());
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        const count = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 15000));
        this.particles = [];
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                radius: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.4 + 0.1
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
            this.ctx.fill();

            // Connect nearby particles
            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = `rgba(0, 212, 255, ${0.06 * (1 - dist / 120)})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            }

            // Mouse interaction
            const dx = this.mouse.x - p.x;
            const dy = this.mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
                const force = (150 - dist) / 150;
                p.vx -= (dx / dist) * force * 0.02;
                p.vy -= (dy / dist) * force * 0.02;
            }
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Typing Animation
class TypingAnimation {
    constructor(element, words) {
        this.element = element;
        this.words = words;
        this.wordIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.type();
    }

    type() {
        const currentWord = this.words[this.wordIndex];
        let displayText;

        if (this.isDeleting) {
            displayText = currentWord.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            displayText = currentWord.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        this.element.textContent = displayText;

        let typeSpeed = this.isDeleting ? 40 : 80;

        if (!this.isDeleting && this.charIndex === currentWord.length) {
            typeSpeed = 2000;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.wordIndex = (this.wordIndex + 1) % this.words.length;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const update = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(update);
            } else {
                counter.textContent = target;
            }
        };

        update();
    });
}

// Scroll Animations
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.links-grid > .link-card').forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.08}s`;
        observer.observe(el);
    });
}

// Navbar scroll effect
function handleNavScroll() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Card glow effect (follows mouse)
function initCardGlow() {
    document.querySelectorAll('.link-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new ParticleSystem(document.getElementById('particles'));

    new TypingAnimation(
        document.getElementById('rotatingText'),
        ['Code & Creativity', 'Tech & Cinema', 'Research & Art', 'Logic & Emotion']
    );

    animateCounters();
    observeElements();
    handleNavScroll();
    initCardGlow();
});
