const data = {
  name: 'Darshan Chopda',
  title: 'Full Stack Developer | AI Prompt Engineer Specialist',
  heroBlurb:
    'Building AI-powered products, full-stack systems, and thoughtful digital experiences with a strong focus on speed, clarity, and real-world impact.',
  location: 'Baroda, Gujarat',
  email: 'chopdadarshan133@gmail.com',
  about:
    'AI Prompt Engineer specializing in designing effective prompts for real-world AI applications. Experienced with OpenAI and Google Gemini APIs for building intelligent systems. Skilled in prompt optimization, context engineering, and improving AI accuracy. Worked on AI-driven projects like interview platforms and voice-based applications. Strong understanding of LLM behavior and scalable AI integrations. Focused on delivering efficient, production-ready AI solutions.',
  stats: {
    experience: '1+ years',
    projects: '7+'
  },
  skills: {
    frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js'],
    backend: ['Node.js', 'Express.js', 'Python (APIs - basics)'],
    languages: ['C++', 'Java', 'Data Structures & Algorithms (DSA)'],
    infra: [
      'MongoDB',
      'AWS (basic)',
      'Supabase (PostgreSQL, Authentication, Realtime, Storage)',
      'n8n (Workflow Automation, API Integrations, AI Agent Workflows)',
      'Vercel',
      'Git'
    ],
    ai: ['Python (AI/ML)', 'JavaScript (AI APIs)', 'AI API Integration', 'OpenAI API', 'Google Gemini API'],
    other: ['Video Editing', 'Photo Editing', 'Photography', 'Digital Marketing']
  },
  experiences: [
    {
      title: 'Full Stack AI Developer at Akagai',
      period: '01 March 2026 - 01 July 2026 | Part-time, Remote | Stipend: INR 25,000/month',
      desc:
        'Developed an AI-powered voice-based meal tracking system from scratch. Enabled real-time speech recognition to identify food items accurately. Engineered a calorie estimation engine for automated nutritional tracking. Built a scalable admin dashboard for managing users, payments, and AI usage. Designed and optimized database architecture for high-performance data handling.'
    },
    {
      title: 'Intern at Gharkiyade Startup',
      period: 'June 2023 - August 2023',
      desc:
        'Worked on developing web applications for the Gharkiyade platform, focusing on frontend development with React.js and backend integration with Node.js. Contributed to improving user experience and implementing new features.'
    },
    {
      title: 'Full Stack Developer - Meanjoy Dairy Product eCommerce',
      period: '7 Jul 2025 - 7 Dec 2025 | INR 700/day',
      desc:
        'Built a commercial dairy product eCommerce web app with product listings, cart, order management, and a clean user experience using React.js, Node.js, MongoDB, and Express.'
    },
    {
      title: 'Software Engineering Intern (Part-time) at Vikash Tech Solution',
      period: 'Jan 2026 - Jun 2026 | Part-time, Remote | Stipend: INR 20,000/month',
      desc:
        'Developed an AI-powered Interview Portal for automated interview generation and analysis. Experienced in building AI-integrated web applications and automation systems.'
    },
    {
      title: 'Digital Marketing Intern - Vikash Tech Solution',
      period: '1 Nov 2025 - 1 Jan 2026 | Stipend: INR 15,000/month',
      desc:
        'Managed and executed digital marketing campaigns across platforms such as social media and search engines. Assisted in content creation, including posts, ads, and promotional materials to improve engagement. Analyzed campaign performance using basic analytics tools and suggested improvements. Worked on SEO optimization to improve website visibility and traffic. Collaborated with the development and marketing team to align strategies with business goals.'
    }
  ],
  projects: [
    {
      title: 'Meanjoy - Dairy Product eCommerce Website',
      tech: 'React.js - Node.js - MongoDB - Express',
      desc:
        'Commercial dairy product eCommerce web app with product listings, cart, order management, and a clean user experience.',
      link: 'https://github.com/chopdadarshan7/meanjoy-2026',
      live: 'https://meanjoy.free.nf/index.php?i=1'
    },
    {
      title: 'Video Editor',
      tech: 'HTML - CSS - JavaScript',
      desc: 'A web-based video editing and photograph tool with a clean UI, deployed on Vercel.',
      link: 'https://github.com/chopdadarshan7/Video-Editor-',
      live: 'https://video-editor-nine-lilac.vercel.app'
    },
    {
      title: 'Study Planner',
      tech: 'TypeScript - JavaScript',
      desc: 'A smart study planning app to organize and manage your study schedule efficiently.',
      link: 'https://github.com/chopdadarshan7',
      live: 'https://study-planner-chi-eight.vercel.app'
    }
  ],
  resume: '',
  github: 'https://github.com/chopdadarshan7',
  linkedin: 'https://www.linkedin.com/in/chopda-darshan-2159942a5?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  emailLink: 'mailto:chopdadarshan133@gmail.com'
};

function setText(id, text) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = text;
  }
}

function setLink(id, url) {
  const element = document.getElementById(id);
  if (element) {
    element.href = url;
  }
}

function renderSkills(id, skills) {
  const container = document.getElementById(id);
  if (!container) {
    return;
  }

  container.innerHTML = '';
  skills.forEach((skill) => {
    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.textContent = skill;
    container.appendChild(chip);
  });
}

function renderExperiences() {
  const list = document.getElementById('experienceList');
  if (!list) {
    return;
  }

  list.innerHTML = '';
  data.experiences.forEach((experience) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${experience.title}</h3>
      <p class="meta">${experience.period}</p>
      <p>${experience.desc}</p>
    `;
    list.appendChild(card);
  });
}

function renderProjects() {
  const list = document.getElementById('projectsList');
  if (!list) {
    return;
  }

  list.innerHTML = '';
  data.projects.forEach((project) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p class="meta">${project.tech}</p>
      <p>${project.desc}</p>
      <div class="project-actions">
        ${project.link ? `<a href="${project.link}" target="_blank" rel="noopener" class="btn ghost">View Code <i class="fab fa-github"></i></a>` : ''}
        ${project.live ? `<a href="${project.live}" target="_blank" rel="noopener" class="btn primary-btn">Live Demo <i class="fas fa-external-link-alt"></i></a>` : ''}
      </div>
    `;
    list.appendChild(card);
  });
}

function renderFooterSocials() {
  const footerSocials = document.querySelector('.footer-socials');
  if (!footerSocials) {
    return;
  }

  footerSocials.innerHTML = `
    <a href="${data.github}" target="_blank" rel="noopener" aria-label="GitHub"><i class="fab fa-github"></i></a>
    <a href="${data.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
    <a href="${data.emailLink}" aria-label="Email"><i class="fas fa-envelope"></i></a>
  `;
}

function populateContent() {
  setText('name', data.name);
  setText('title', data.title);
  setText('about-hero', data.heroBlurb);
  setText('location', data.location);
  setText('email', data.email);
  setText('aboutText', data.about);
  setText('meta', 'DOB: 26/10/2004 - University: Parul University');
  setText('stat-exp', data.stats.experience);
  setText('stat-projects', data.stats.projects);

  renderSkills('skillsFrontend', data.skills.frontend);
  renderSkills('skillsBackend', data.skills.backend);
  renderSkills('skillsLang', data.skills.languages);
  renderSkills('skillsInfra', data.skills.infra);
  renderSkills('skillsAI', data.skills.ai);
  renderSkills('skillsOther', data.skills.other);
  renderExperiences();
  renderProjects();
  renderFooterSocials();

  setLink('githubLink', data.github);
  setLink('linkedinLink', data.linkedin);
  setLink('emailBtn', data.emailLink);

  const resumeLink = document.getElementById('resumeLink');
  if (resumeLink) {
    if (data.resume) {
      resumeLink.href = data.resume;
      resumeLink.style.display = 'inline-flex';
    } else {
      resumeLink.style.display = 'none';
    }
  }

  const contactButton = document.getElementById('contactBtn');
  if (contactButton) {
    contactButton.onclick = () => {
      window.location.href = data.emailLink;
    };
  }
}

function setupRevealElements() {
  const revealGroups = [
    ['.hero-stats .stat-item', 80],
    ['.info-item', 100],
    ['.skill-category', 110],
    ['.chip', 30],
    ['.timeline .card', 110],
    ['.projects-grid .card', 130]
  ];

  revealGroups.forEach(([selector, step]) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      element.classList.add('reveal-item');
      element.style.setProperty('--reveal-delay', `${Math.min(index * step, 700)}ms`);
    });
  });
}

function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) {
    return;
  }

  const context = canvas.getContext('2d');
  const styles = getComputedStyle(document.documentElement);
  const particleColors = [
    styles.getPropertyValue('--canvas-dot-1').trim() || 'rgba(97, 220, 193, 0.42)',
    styles.getPropertyValue('--canvas-dot-2').trim() || 'rgba(124, 184, 255, 0.32)'
  ];
  const linkColor = styles.getPropertyValue('--canvas-link').trim() || 'rgba(124, 184, 255, 0.4)';

  let width = 0;
  let height = 0;
  let particles = [];

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.38;
      this.vy = (Math.random() - 0.5) * 0.38;
      this.size = Math.random() * 2.4 + 0.8;
      this.color = particleColors[Math.floor(Math.random() * particleColors.length)];
      this.alpha = Math.random() * 0.4 + 0.45;
      this.drift = Math.random() * Math.PI * 2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.drift += 0.02;

      if (this.x < -10 || this.x > width + 10) {
        this.vx *= -1;
      }

      if (this.y < -10 || this.y > height + 10) {
        this.vy *= -1;
      }
    }

    draw() {
      context.save();
      context.globalAlpha = this.alpha + Math.sin(this.drift) * 0.08;
      context.fillStyle = this.color;
      context.beginPath();
      context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      context.fill();
      context.restore();
    }
  }

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function createParticles() {
    const total = Math.min(Math.floor(window.innerWidth / 16), 95);
    particles = Array.from({ length: total }, () => new Particle());
  }

  function drawConnections() {
    for (let index = 0; index < particles.length; index += 1) {
      const first = particles[index];

      for (let inner = index + 1; inner < particles.length; inner += 1) {
        const second = particles[inner];
        const dx = first.x - second.x;
        const dy = first.y - second.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          context.save();
          context.globalAlpha = Math.max(0, 0.18 - distance / 900);
          context.strokeStyle = linkColor;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(first.x, first.y);
          context.lineTo(second.x, second.y);
          context.stroke();
          context.restore();
        }
      }
    }
  }

  function animate() {
    context.clearRect(0, 0, width, height);

    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });

    drawConnections();
    window.requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => {
    resizeCanvas();
    createParticles();
  });

  resizeCanvas();
  createParticles();
  animate();
}

function initMobileMenu() {
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  if (!menuToggle || !navLinks) {
    return;
  }

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

function initObserver() {
  const elements = document.querySelectorAll('.fade-in, .reveal-item');
  if (!elements.length) {
    return;
  }

  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px'
    }
  );

  elements.forEach((element) => observer.observe(element));
}

function initNavbarState() {
  const navbar = document.querySelector('.navbar');
  const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));

  if (!navbar || !navLinks.length) {
    return;
  }

  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  function updateNavigation() {
    navbar.classList.toggle('scrolled', window.scrollY > 14);

    const currentSection = sections.find((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= window.innerHeight * 0.35 && rect.bottom >= window.innerHeight * 0.35;
    });

    navLinks.forEach((link) => {
      const target = link.getAttribute('href');
      const isActive = currentSection ? `#${currentSection.id}` === target : false;
      link.classList.toggle('active', isActive);
    });
  }

  updateNavigation();
  window.addEventListener('scroll', updateNavigation, { passive: true });
}

function initProfileTilt() {
  const container = document.querySelector('.profile-container');
  if (!container || window.matchMedia('(pointer: coarse)').matches) {
    return;
  }

  function resetTilt() {
    container.style.setProperty('--tilt-x', '0deg');
    container.style.setProperty('--tilt-y', '0deg');
  }

  container.addEventListener('mousemove', (event) => {
    const rect = container.getBoundingClientRect();
    const offsetX = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const offsetY = ((event.clientY - rect.top) / rect.height - 0.5) * -10;

    container.style.setProperty('--tilt-x', `${offsetY.toFixed(2)}deg`);
    container.style.setProperty('--tilt-y', `${offsetX.toFixed(2)}deg`);
  });

  container.addEventListener('mouseleave', resetTilt);
  resetTilt();
}

function initSite() {
  populateContent();
  setupRevealElements();
  initCanvas();
  initMobileMenu();
  initNavbarState();
  initObserver();
  initProfileTilt();
}

document.addEventListener('DOMContentLoaded', initSite);
