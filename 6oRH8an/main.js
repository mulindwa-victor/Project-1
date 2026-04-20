

document.addEventListener('DOMContentLoaded', () => {

    if (window.lucide) {
        window.lucide.createIcons();
    }


    if (window.gsap) {
        const tl = gsap.timeline();
        tl.from("#hero-content > *", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        });
    }


    const revealElements = document.querySelectorAll('.bg-white, .grid > div, section h2, section h3');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal', 'active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });


    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.disabled = true;
            btn.innerText = 'Sending...';
            

            setTimeout(() => {
                btn.innerText = 'Sent Successfully!';
                btn.classList.remove('bg-blue-600');
                btn.classList.add('bg-green-600');
                contactForm.reset();
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.classList.remove('bg-green-600');
                    btn.classList.add('bg-blue-600');
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }


    const mobileBtn = document.getElementById('mobile-menu-btn');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            alert("Navigation functionality is active. This would typically open a full-screen drawer on a production site.");
        });
    }


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
