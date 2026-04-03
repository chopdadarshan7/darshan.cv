// Data Object
console.log('Script loaded successfully');
const data = {
  name: 'Darshan Chopda',
title: 'Full Stack Developer | AI Prompt Engineer Specialist',
  location: 'Baroda, Gujarat',
  email: 'chopdadarshan133@gmail.com',
  phone: '',
  about: 'AI Prompt Engineer specializing in designing effective prompts for real-world AI applications. Experienced with OpenAI and Google Gemini APIs for building intelligent systems. Skilled in prompt optimization, context engineering, and improving AI accuracy. Worked on AI-driven projects like interview platforms and voice-based applications. Strong understanding of LLM behavior and scalable AI integrations. Focused on delivering efficient, production-ready AI solutions.',

  skills: {
    frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js'],
    backend: ['Node.js', 'Express.js', 'Python (APIs - basics)'],
    languages: ['C++', 'Java', 'Data Structures & Algorithms (DSA)'],
    infra: ['MongoDB', 'AWS (basic)', 'Supabase (PostgreSQL, Authentication, Realtime, Storage)', 'n8n (Workflow Automation, API Integrations, AI Agent Workflows)', 'Vercel', 'Git'],
    ai: ['Python (AI/ML)', 'JavaScript (AI APIs)', 'AI API Integration', 'OpenAI API', 'Google Gemini API'],
    other: ['Video Editing', 'Photo Editing', 'Photography', 'Digital Marketing']
  },
  experiences: [
    {
      title: 'Full Stack AI Developer at Akagai',
      period: '01 March 2026 – 01 July 2026 | Part-time, Remote | Stipend: ₹25,000/month',
      desc: 'Developed an AI-powered voice-based meal tracking system from scratch. Enabled real-time speech recognition to identify food items accurately. Engineered a calorie estimation engine for automated nutritional tracking. Built a scalable admin dashboard for managing users, payments, and AI usage. Designed and optimized database architecture for high-performance data handling.'
    },
    {
      title: 'Intern at Gharkiyade Startup',
      period: 'June 2023 - August 2023',
      desc: 'Worked on developing web applications for the Gharkiyade platform, focusing on frontend development with React.js and backend integration with Node.js. Contributed to improving user experience and implementing new features.'
    },
    {
      title: 'Full Stack Developer – Meanjoy Dairy Product eCommerce',
      period: '7 Jul 2025 – 7 Dec 2025 | ₹700/Day',
      desc: 'Built a commercial dairy product eCommerce web app with product listings, cart, order management, and a clean user experience using React.js, Node.js, MongoDB, and Express.'
    },
    {
      title: 'Software Engineering Intern (Part-time) at Vikash Tech Solution',
      period: 'Jan 2026 – Jun 2026 | Part-time, Remote | Stipend: ₹20,000/month',
      desc: 'Developed an AI-powered Interview Portal for automated interview generation and analysis. Experienced in building AI-integrated web applications and automation systems.'
    },
    {
      title: 'Digital Marketing Intern – Vikash Tech Solution',
      period: '1 Nov 2025 – 1 Jan 2026 | Stipend: ₹15,000/month',
      desc: 'Managed and executed digital marketing campaigns across platforms such as social media and search engines. Assisted in content creation, including posts, ads, and promotional materials to improve engagement. Analyzed campaign performance using basic analytics tools and suggested improvements. Worked on SEO optimization to improve website visibility and traffic. Collaborated with the development and marketing team to align strategies with business goals.'
    }
  ],
  projects: [
    {
      title: 'Meanjoy – Dairy Product eCommerce Website',
      tech: 'React.js • Node.js • MongoDB • Express',
      desc: 'Commercial dairy product eCommerce web app with product listings, cart, order management, and a clean user experience.',
      link: 'https://github.com/chopdadarshan7/meanjoy-2026',
      live: 'https://meanjoy.free.nf/index.php?i=1'
    },
    {
      title: 'Video Editor',
      tech: 'HTML • CSS • JavaScript',
      desc: 'A web-based video editing and photograph tool with a clean UI, deployed on Vercel.',
      link: 'https://github.com/chopdadarshan7/Video-Editor-',
      live: 'https://video-editor-nine-lilac.vercel.app'
    },
    {
      title: 'Study Planner',
      tech: 'TypeScript • JavaScript',
      desc: 'A smart study planning app to organize and manage your study schedule efficiently.',
      link: 'https://github.com/chopdadarshan7',
      live: 'https://study-planner-chi-eight.vercel.app'
    }

  ],
  resume: '', // Add path to resume if available
  github: 'https://github.com/chopdadarshan7',
  linkedin: 'https://www.linkedin.com/in/chopda-darshan-2159942a5?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
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
    setText('location', data.location);
    setText('email', data.email);
    const aboutEl = document.getElementById('aboutText');
    if (aboutEl) aboutEl.textContent = data.about;
    setText('meta', 'DOB: 26/10/2004 • University: Parul University');

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
    renderSkills('skillsAI', data.skills.ai);
    renderSkills('skillsOther', data.skills.other);

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
          ${proj.live ? `<a href="${proj.live}" target="_blank" rel="noopener" class="btn primary-btn">Live Demo <i class="fas fa-external-link-alt"></i></a>` : ''}
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

document.addEventListener('DOMContentLoaded', populateContent);

// Also try to run immediately in case DOM is already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', populateContent);
} else {
  populateContent();
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
      menuToggle.classList.toggle('active'); // Add animation to bars later if wanted
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
