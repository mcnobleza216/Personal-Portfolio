// active nav link + reveal-on-scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#nav-links a');
  const reveals = document.querySelectorAll('.reveal');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const link = document.querySelector(`#nav-links a[data-target="${entry.target.id}"]`);
      if(!link) return;
      if(entry.isIntersecting){
        navLinks.forEach(a => a.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => navObserver.observe(s));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(r => revealObserver.observe(r));

  // ---------- project screenshot lightbox ----------
  // Image paths match the "img/<Folder Name>/<file>.png" structure in the project's img folder.
  const galleries = {
    gcg: {
      title: 'Global Comfort Group — Internal Systems',
      subtitle: 'Employment · Global Comfort Group',
      modules: {
        lmsdashboard: {
          label: 'LMS Dashboard',
          desc: 'Login screen and the Summary dashboard for the LMS Portal — occupancy, renewal overview, expiring contracts, and monthly collections across all buildings.',
          shots: [
            { src: 'img/LMS DASHBOARD/LOGIN.png', caption: 'Portal login' },
            { src: 'img/LMS DASHBOARD/dashboard.png', caption: 'Summary dashboard' }
          ]
        },
        docapproval: {
          label: 'Document Approval',
          desc: 'Document approval view — confirms a submitted Lease Approval Form and displays its lease details once validated.',
          shots: [
            { src: 'img/Document Approval/DocumentApproval.png', caption: 'Approved lease document' }
          ]
        }
      }
    },
    eurotowers: {
      title: 'Euro Towers International — Website & Data Systems',
      subtitle: 'Employment · Euro Towers International Inc.',
      modules: {
        amd: {
          label: 'AMD Data Dashboard',
          desc: 'Power BI dashboard summarizing units, collections, financing scheme mix, and payment progress bands across projects.',
          shots: [
            { src: 'img/AMD DASHBOARD/DASHBOARD.png', caption: 'Executive overview — AMD data dashboard' }
          ]
        },
        loan: {
          label: 'Loan Calculator',
          desc: 'Public-facing loan calculator on the Euro Towers website — estimates downpayment, loan amount, monthly amortization, and required income for a selected unit.',
          shots: [
            { src: 'img/LOAN CALCULATOR/page.png', caption: 'Loan calculator' }
          ]
        },
        website: {
          label: 'Official Website',
          desc: "Euro Towers International's public site — project listings on the home page and an embedded live chat assistant (EVE) for buyer inquiries.",
          shots: [
            { src: 'img/OFFICIAL WEBSITE/HOME.png', caption: 'Home page — project listings' },
            { src: 'img/OFFICIAL WEBSITE/livechat.png', caption: 'Live chat — EVE' }
          ]
        },
        sitevisit: {
          label: 'Site Visit Calendar',
          desc: 'Booking form for scheduling an on-site property visit, with date selection and required-field validation before submission.',
          shots: [
            { src: 'img/Site Visit Calendar/site_visit.png', caption: 'Site visit booking form' }
          ]
        },
        sellersportal: {
          label: 'Sellers Portal',
          desc: 'Login and dashboard for the Sellers Portal — a system for property sellers/agents to manage their listings and transactions with Euro Towers International.',
          shots: [
            { src: 'img/SELLERS PORTAL/Login.png', caption: 'Sellers Portal login' },
            { src: 'img/SELLERS PORTAL/sellersportal.png', caption: 'Sellers Portal' },
            { src: 'img/SELLERS PORTAL/Downloadable-Forms.png', caption: 'Downloadable forms' },
            { src: 'img/SELLERS PORTAL/Project-Link.png', caption: 'Project link' }
          ]
        },
        customerrating: {
          label: 'Customer Rating App',
          desc: 'A customer rating app for collecting and reviewing feedback — from the landing and rating pages to the ratee and feedback views.',
          shots: [
            { src: 'img/CUSTOMER RATING APP/Landing Page.jpg', caption: 'Landing page' },
            { src: 'img/CUSTOMER RATING APP/Rate As.jpg', caption: 'Rate as' },
            { src: 'img/CUSTOMER RATING APP/Ratee.jpg', caption: 'Ratee' },
            { src: 'img/CUSTOMER RATING APP/Rating Page.jpg', caption: 'Rating page' },
            { src: 'img/CUSTOMER RATING APP/Feedback.jpg', caption: 'Feedback' }
          ]
        }
      }
    },

    todago: {
      title: 'TODA-GO',
      subtitle: 'Personal project · Mobile / Firebase',
      modules: {
        main: {
          label: 'App Screen',
          desc: 'A ride-hailing app built for the tricycle transport community of Pililla, Rizal.',
          shots: [ { src: 'img/TODA-GO/TODAGO.png', caption: 'TODA-GO' } ]
        }
      }
    },
    zomzerg: {
      title: 'ZOMZERG',
      subtitle: 'Personal project · C# / Unity',
      modules: {
        main: {
          label: 'Gameplay',
          desc: 'A 2D endless survival shooter against a continuous horde of zombies.',
          shots: [ { src: 'img/ZOMZERG/ZOMZERG.jpg', caption: 'ZOMZERG' } ]
        }
      }
    },
    sincity: {
      title: 'SINCITY',
      subtitle: 'Personal project · C# / Unity',
      modules: {
        main: {
          label: 'Gameplay',
          desc: 'A Unity-built game project, from main menu to in-game action.',
          shots: [
            { src: 'img/SINCITY/MAINMENU.png', caption: 'Main menu' },
            { src: 'img/SINCITY/SINCITY-INGAME.png', caption: 'In-game' }
          ]
        }
      }
    },
    library: {
      title: 'URS Library Management System',
      subtitle: 'Academic project · VB.NET / MySQL',
      modules: {
        main: {
          label: 'System Screen',
          desc: 'Automates day-to-day processes and transactions inside the University of Rizal System (Binangonan) library.',
          shots: [ { src: 'img/LIBRARY MANAGEMENT SYSTEM/URSLMBS.jpg', caption: 'Library Management System' } ]
        }
      }
    },
    bank: {
      title: 'Bank Management System',
      subtitle: 'Academic project · C# / MySQL',
      modules: {
        main: {
          label: 'System Screen',
          desc: 'A desktop application focused on automating common bank transactions end to end.',
          shots: [ { src: 'img/BANK MANAGEMENT SYSTEM/BDO.jpg', caption: 'Bank Management System' } ]
        }
      }
    },
    studentms: {
      title: 'URS Web-Based Student Management System',
      subtitle: 'Academic project · C# / MySQL',
      modules: {
        main: {
          label: 'System Screen',
          desc: 'Tracks student records — name, course, and section — kept searchable across years of data.',
          shots: [ { src: 'img/URS STUDENT MANAGEMENT SYSTEM/URSSTUDENTMANAGEMENT.PNG', caption: 'Student Management System' } ]
        }
      }
    },
    cashier: {
      title: 'Simple Cashier System',
      subtitle: 'Academic project · Java / MySQL',
      modules: {
        main: {
          label: 'System Screen',
          desc: 'A lightweight point-of-sale system built to automate checkout inside a convenience store.',
          shots: [ { src: 'img/CASHIER SYSTEM/CASHIER.jpg', caption: 'Cashier System' } ]
        }
      }
    },
    quarantine: {
      title: 'Quarantine Facility Management System',
      subtitle: 'Academic project',
      modules: {
        main: {
          label: 'System Screen',
          desc: 'A system built to track and manage individuals, records, and daily operations inside a quarantine facility.',
          shots: [ { src: 'img/QUARANTINE FACILITY MANAGEMENT SYSTEM/QUARANTINE.jpg', caption: 'Quarantine Facility Management System' } ]
        }
      }
    },

    'cert-googleit': {
      title: 'Google IT Support Professional Certificate',
      subtitle: 'Certification',
      modules: { main: { label: 'Certificate', desc: 'Google Career Certificates program covering IT support fundamentals: troubleshooting, networking, operating systems, system administration, and security.', shots: [
        { src: 'img/CERTIFICATES/GOOGLE IT SUPPORT PROFESSIONAL CERT/1.png', caption: 'Google IT Support Professional Certificate' }
      ] } }
    },
    'cert-aws': {
      title: 'AWS Fundamentals',
      subtitle: 'Certification',
      modules: { main: { label: 'Certificate', desc: 'Core concepts, services, and use cases across the AWS ecosystem.', shots: [
        { src: 'img/CERTIFICATES/AWS FUNDAMENTALS.PNG', caption: 'AWS Fundamentals' },
        { src: 'img/CERTIFICATES/AWS.jpeg', caption: 'AWS Fundamentals — badge' }
      ] } }
    },
    'cert-cisco': {
      title: 'Cisco — Cybersecurity Essentials',
      subtitle: 'Certification',
      modules: { main: { label: 'Certificate', desc: 'Foundational cybersecurity knowledge: network security, encryption, and cybersecurity law.', shots: [ { src: 'img/CERTIFICATES/CISCO.PNG', caption: 'Cisco Cybersecurity Essentials' } ] } }
    },
    'cert-introcyber': {
      title: 'Introduction to Cybersecurity',
      subtitle: 'Certification',
      modules: { main: { label: 'Certificate', desc: 'Cisco Networking Academy course covering the fundamentals of cybersecurity and safe practices online.', shots: [ { src: 'img/CERTIFICATES/INTRODUCTION TO CYBERSECURITY.PNG', caption: 'Introduction to Cybersecurity' } ] } }
    },
    'cert-oop': {
      title: 'Object-Oriented Programming with Java',
      subtitle: 'Certification',
      modules: { main: { label: 'Certificate', desc: 'Coursera Project Network certification covering the four OOP principles.', shots: [ { src: 'img/CERTIFICATES/OOP WITH JAVA.PNG', caption: 'OOP with Java' } ] } }
    },
    'cert-javasoftware': {
      title: 'Java Programming: Solving Problems with Software',
      subtitle: 'Certification',
      modules: { main: { label: 'Certificate', desc: 'Duke University course on applying programming to real societal problems.', shots: [
        { src: 'img/CERTIFICATES/JAVASOLVING PROBLEMS WITH SOFTWARE.PNG', caption: 'Java Programming: Solving Problems with Software' },
        { src: 'img/CERTIFICATES/JAVASOLVINGPROBLEM.jpeg', caption: 'Java Programming — badge' }
      ] } }
    },
    'cert-programming4everybody': {
      title: 'Programming for Everybody',
      subtitle: 'Certification',
      modules: { main: { label: 'Certificate', desc: 'University of Michigan course on Coursera introducing programming fundamentals using Python.', shots: [ { src: 'img/CERTIFICATES/PROGRAMMING FOR EVERYBODY.PNG', caption: 'Programming for Everybody' } ] } }
    },
    'cert-android': {
      title: 'Smart Mobile App Development for Beginners',
      subtitle: 'Certification',
      modules: { main: { label: 'Certificate', desc: 'E-TESDA course on building mobile applications with Java.', shots: [
        { src: 'img/CERTIFICATES/SMART MOBILE APP FOR BEGINNERS.PNG', caption: 'Smart Mobile App for Beginners' },
        { src: 'img/CERTIFICATES/TESDASMART.PNG', caption: 'TESDA certificate' }
      ] } }
    },
    'cert-technopreneurship': {
      title: 'Smart Technopreneurship',
      subtitle: 'Certification',
      modules: { main: { label: 'Certificate', desc: 'E-TESDA course on applying entrepreneurial principles to technology-driven ventures.', shots: [
        { src: 'img/CERTIFICATES/SMART TECHNOPRENUERSHIP.PNG', caption: 'Smart Technopreneurship' },
        { src: 'img/CERTIFICATES/TESDATECHNO.PNG', caption: 'TESDA certificate' }
      ] } }
    },
    'cert-sql': {
      title: 'SQL for Data Science',
      subtitle: 'Certification',
      modules: { main: { label: 'Certificate', desc: 'Course covering SQL fundamentals for querying, filtering, and analyzing data.', shots: [
        { src: 'img/CERTIFICATES/SQL FOR DATA SCIENCE.PNG', caption: 'SQL for Data Science' },
        { src: 'img/CERTIFICATES/SQL.PNG', caption: 'SQL — badge' }
      ] } }
    }
  };

  const lightbox = document.getElementById('lightbox');
  const lbTitle = document.getElementById('lightbox-title');
  const lbSubtitle = document.getElementById('lightbox-subtitle');
  const lbTabs = document.getElementById('lightbox-tabs');
  const lbDesc = document.getElementById('lightbox-desc');
  const lbShots = document.getElementById('lightbox-shots');
  let lastFocused = null;

  function renderModule(galleryKey, moduleKey){
    const gallery = galleries[galleryKey];
    if(!gallery) return;
    const mod = gallery.modules[moduleKey] || Object.values(gallery.modules)[0];
    lbTitle.textContent = gallery.title;
    lbSubtitle.textContent = gallery.subtitle || '';

    lbTabs.innerHTML = '';
    const moduleEntries = Object.entries(gallery.modules);
    lbTabs.style.display = moduleEntries.length > 1 ? 'flex' : 'none';
    moduleEntries.forEach(([key, m]) => {
      const btn = document.createElement('button');
      btn.textContent = m.label;
      btn.type = 'button';
      if(key === moduleKey) btn.classList.add('active');
      btn.addEventListener('click', () => renderModule(galleryKey, key));
      lbTabs.appendChild(btn);
    });

    lbDesc.textContent = mod.desc;
    lbShots.innerHTML = '';
    mod.shots.forEach(shot => {
      const fig = document.createElement('figure');
      const img = document.createElement('img');
      img.src = shot.src;
      img.alt = shot.caption;
      img.loading = 'lazy';
      img.onerror = () => { fig.querySelector('figcaption').textContent = shot.caption + ' — image not found at ' + shot.src; };
      const cap = document.createElement('figcaption');
      cap.textContent = shot.caption;
      fig.appendChild(img);
      fig.appendChild(cap);
      lbShots.appendChild(fig);
    });
  }

  function openLightbox(galleryKey, moduleKey, triggerEl){
    lastFocused = triggerEl || document.activeElement;
    renderModule(galleryKey, moduleKey);
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.getElementById('lightbox-close').focus();
  }

  function closeLightbox(){
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    if(lastFocused) lastFocused.focus();
  }

  document.querySelectorAll('[data-gallery]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      openLightbox(el.dataset.gallery, el.dataset.module, el);
    });
    if(el.classList.contains('proj-featured') || el.classList.contains('cert-clickable')){
      el.addEventListener('keydown', (e) => {
        if(e.key === 'Enter' || e.key === ' '){
          e.preventDefault();
          openLightbox(el.dataset.gallery, el.dataset.module, el);
        }
      });
    }
  });

  // prevent links/buttons inside a clickable card from also opening the lightbox
  document.querySelectorAll('.proj a, .cert a, .module-chip').forEach(el => {
    el.addEventListener('click', (e) => { e.stopPropagation(); });
  });

  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if(e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });