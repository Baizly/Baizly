const CONFIG = {
  GARAGE_NAME: "Netlandet AS",
  LOGO: "images/logo.png",
  HERO_IMG: "Images/hero.jpg",
  FORM_URL: "https://docs.google.com/forms/d/e/1FAIpQLScOYW8aKlgbnBqQIQgu09yeuD3uF348U5ZQ7SxdsbIPY2lQZA/viewform",
  PHONE: "+47 912 34 567",
  EMAIL: "kontakt@garasje.no",
  ADDRESS: "Gate 12, 0170 Oslo",
  OPENING: "Man–Fre 08:00–17:00"
};

// Apply config
document.getElementById('siteName').textContent = CONFIG.GARAGE_NAME;
document.getElementById('copyName').textContent = CONFIG.GARAGE_NAME;
document.getElementById('copyYear').textContent = new Date().getFullYear();
document.getElementById('logo').src = CONFIG.LOGO;
document.getElementById('logo').alt = CONFIG.GARAGE_NAME + ' logo';
document.getElementById('heroBg').style.backgroundImage = `url('${CONFIG.HERO_IMG}')`;
document.getElementById('bookingForm').src = CONFIG.FORM_URL;
document.getElementById('opening').textContent = CONFIG.OPENING;
document.getElementById('addr').textContent = CONFIG.ADDRESS;
document.getElementById('phoneLink').href = 'tel:' + CONFIG.PHONE.replace(/\s/g,'');
document.getElementById('phoneLink').textContent = CONFIG.PHONE;
document.getElementById('sidePhone').href = 'tel:' + CONFIG.PHONE.replace(/\s/g,'');
document.getElementById('sidePhone').textContent = CONFIG.PHONE;
document.getElementById('contactPhone').href = 'tel:' + CONFIG.PHONE.replace(/\s/g,'');
document.getElementById('contactPhone').textContent = CONFIG.PHONE;
document.getElementById('contactEmail').href = 'mailto:' + CONFIG.EMAIL;
document.getElementById('contactEmail').textContent = CONFIG.EMAIL;

// Mobile nav toggle
const hamb = document.getElementById('hamburger');
const nav = document.getElementById('primaryNav');
hamb.addEventListener('click', ()=>{ nav.style.display = nav.style.display==='flex'?'':'flex'; });

// Reveal animation on scroll
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
}, {threshold:0.12});
reveals.forEach(r => io.observe(r));
