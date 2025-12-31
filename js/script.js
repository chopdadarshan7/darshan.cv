// Darshan Chopda - Portfolio Data
const data = {
  name: 'Darshan Chopda',
  title: 'B.Tech (IT) — 3rd year, 5th semester',
  location: 'Baroda, Gujarat',
  email: 'chopdadarshan133@gmail.com',
  phone: '',
  about: 'I am a 3rd-year B.Tech (IT) student at Parul University. I enjoy building web applications with a focus on frontend development and modern JavaScript frameworks. I also know C++ and Java and practice Data Structures & Algorithms (DSA).',
  heroAbout: 'Building digital experiences with code and creativity.',
  skills: {
    frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js'],
    backend: ['Node.js', 'Express.js', 'Python (APIs - basics)'],
    languages: ['C++', 'Java', 'Data Structures & Algorithms (DSA)'],
    infra: ['MongoDB', 'AWS (basic)']
  },
  experiences: [
    {
      title: 'Intern at Vikash Tech Solution',
      period: '1 November - 1 January',
      desc: 'Worked as an intern at Vikash Tech Solution, gaining practical experience in software development and project management.'
    },
    {
      title: 'Intern at Gharkiyade Startup',
      period: 'June 2023 - August 2023',
      desc: 'Worked on developing web applications for the Gharkiyade platform, focusing on frontend development with React.js and backend integration with Node.js. Contributed to improving user experience and implementing new features.'
    }
  ],
  projects: [
    {
      title: 'Simple REST API',
      tech: 'Node.js • Express • MongoDB',
      desc: 'REST API for managing sample data; includes CRUD routes and basic auth.',
      link: 'https://github.com/chopdadarshan7'
    },
    {
      title: 'E-Commerce Platform',
      tech: 'React.js • Node.js • MongoDB • Stripe',
      desc: 'Full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.',
      link: 'https://github.com/chopdadarshan7/ecommerce-platform'
    },
    {
      title: 'Task Management App',
      tech: 'Next.js • TypeScript • Prisma • PostgreSQL',
      desc: 'Modern task management application with real-time updates, team collaboration features, and advanced filtering.',
      link: 'https://github.com/chopdadarshan7/task-manager'
    }
  ],
  stats: {
    experience: '6 months',
    projects: '10+'
  },
  resume: '', // Add path to resume if available
  github: 'https://github.com/chopdadarshan7',
  linkedin: 'https://www.linkedin.com/in/chopda-darshan-2159942a5/',
  emailLink: 'mailto:chopdadarshan133@gmail.com'
}

console.log('Script loaded, data:', data);

function populateContent() {
  console.log('populateContent called');
  try {
    // Basic Info
    const setText = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };

    setText('name', data.name);
    setText('title', data.title);
    setText('about-hero', data.heroAbout);
    setText('location', data.location);
    setText('email', data.email);
    setText('aboutText', data.about);
    setText('meta', 'DOB: 26/10/2004 • University: Parul University');
    
    // Stats
    setText('stat-exp', data.stats.experience);
    setText('stat-projects', data.stats.projects);

    // Skills
    const renderSkills = (id, skills) => {
      console.log(`Rendering skills for ${id}:`, skills);
      const el = document.getElementById(id);
      if (!el) {
        console.log(`Element with id ${id} not found`);
        return;
      }
      el.innerHTML = '';
      skills.forEach(skill => {
        const chip = document.createElement('div');
        chip.className = 'chip';
        chip.textContent = skill;
        el.appendChild(chip);
      });
      console.log(`Rendered ${skills.length} skills for ${id}`);
    };

    renderSkills('skillsFrontend', data.skills.frontend);
    renderSkills('skillsBackend', data.skills.backend);
    renderSkills('skillsLang', data.skills.languages);
    renderSkills('skillsInfra', data.skills.infra);

    // Experience
    const expList = document.getElementById('experienceList');
    if (expList) {
      expList.innerHTML = '';
      data.experiences.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <h3>${exp.title}</h3>
          <p class="meta">${exp.period}</p>
          <p>${exp.desc}</p>
        `;
        expList.appendChild(card);
      });
    }

    // Projects
    const projList = document.getElementById('projectsList');
    if (projList) {
      projList.innerHTML = '';
      data.projects.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <h3>${proj.title}</h3>
          <p class="meta">${proj.tech}</p>
          <p>${proj.desc}</p>
          ${proj.link ? `<a href="${proj.link}" target="_blank" rel="noopener" class="btn ghost">View Code <i class="fab fa-github"></i></a>` : ''}
        `;
        projList.appendChild(card);
      });
    }

    // Links
    const setLink = (id, url) => {
      const el = document.getElementById(id);
      if (el) el.href = url;
    };

    setLink('githubLink', data.github);
    setLink('linkedinLink', data.linkedin);
    setLink('emailBtn', data.emailLink);

    // Resume
    const resumeLink = document.getElementById('resumeLink');
    if (resumeLink) {
        if (data.resume) resumeLink.href = data.resume;
        else resumeLink.style.display = 'none';
    }

    // Contact Button
    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) {
      contactBtn.addEventListener('click', () => {
        window.location.href = data.emailLink;
      });
    }

  } catch (error) {
    console.error('Error populating content:', error);
  }
}

// Background Animation (Constellation Effect)
function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  const resize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.size = Math.random() * 2 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.fillStyle = 'rgba(0, 243, 255, 0.3)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const initParticles = () => {
    particles = [];
    const count = Math.min(Math.floor(window.innerWidth / 15), 100); // Responsive count
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  };

  const animate = () => {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p, index) => {
      p.update();
      p.draw();

      // Draw connections
      for (let j = index + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          ctx.strokeStyle = `rgba(0, 243, 255, ${0.1 - dist / 1500})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(animate);
  };

  window.addEventListener('resize', () => {
    resize();
    initParticles();
  });

  resize();
  initParticles();
  animate();
}

// Mobile Menu
function initMobileMenu() {
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });
  }
}

// Intersection Observer for Fade-in Animations
function initObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
  populateContent();
  initCanvas();
  initMobileMenu();
  initObserver();
});

