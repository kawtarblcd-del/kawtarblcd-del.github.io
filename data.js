/* =========================
   data.js — Portfolio KB 
   - Fix Home: ajoute `sections`
   - Passions: catégories + tags
   ========================= */

window.KB_DATA = {
  i18n: {
    fr: {
      nav_home: "Accueil",
      nav_diplomes: "Diplômes",
      nav_projects: "Projets",
      nav_experiences: "Expériences",
      nav_skills: "Compétences",
      nav_passions: "Passions",
      nav_contact: "Contact",
      nav_cv: "Télécharger CV",

      home_explore: "Explorer",
      home_hint: "Cliquez sur une carte",
      hero_projects: "Voir mes projets",
      hero_cv: "Télécharger mon CV",
      hero_contact: "Me contacter",

      modal_primary: "Voir la section",

      projects_title: "Projets",
      projects_subtitle:
        "Découvrez une sélection de projets académiques et associatifs qui illustrent mon intérêt pour le développement, la data et la création de solutions logicielles.",

      experiences_title: "Expériences",
      experiences_subtitle:
        "Un parcours mêlant expériences professionnelles, sportives et associatives, qui met en lumière mes soft skills et mon sens des responsabilités.",

      diplomes_title: "Diplômes",
      diplomes_subtitle: "Mon parcours académique en informatique et sciences.",

      skills_title: "Compétences",
      skills_subtitle:
        "Un ensemble de compétences techniques et méthodologiques construites grâce à ma formation et à mes projets.",

      passions_title: "Passions",
      passions_subtitle:
        "Des activités personnelles et des centres d’intérêt qui stimulent ma créativité et ouvrent ma curiosité.",

      contact_title: "Contact",
      contact_subtitle:
        "Je serais ravie d’échanger avec vous à propos d’une opportunité de stage ou d’alternance.",

      contact_email: "Email",
      contact_linkedin: "LinkedIn",
      contact_github: "GitHub",
      contact_languages: "Langues",
      contact_sendmail: "M’envoyer un email",

      back_home: "Retour Accueil",
    },

    en: {
      nav_home: "Home",
      nav_diplomes: "Education",
      nav_projects: "Projects",
      nav_experiences: "Experience",
      nav_skills: "Skills",
      nav_passions: "Interests",
      nav_contact: "Contact",
      nav_cv: "Download CV",

      home_explore: "Browse",
      home_hint: "Click a card",
      hero_projects: "View my projects",
      hero_cv: "Download my CV",
      hero_contact: "Contact me",

      modal_primary: "Open section",

      projects_title: "Projects",
      projects_subtitle:
        "Discover a selection of academic and volunteer projects that reflect my interest in software development, data, and building software solutions.",

      experiences_title: "Experience",
      experiences_subtitle:
        "A journey combining professional, sports, and volunteer experiences that highlights my soft skills and sense of responsibility.",

      diplomes_title: "Education",
      diplomes_subtitle: "My academic background in computer science and mathematics.",

      skills_title: "Skills",
      skills_subtitle:
        "A set of technical and methodological skills developed through my education and projects.",

      passions_title: "Interests",
      passions_subtitle:
        "Personal activities and interests that stimulate my creativity and spark my curiosity.",

      contact_title: "Contact",
      contact_subtitle:
        "I would be happy to discuss a potential internship or work-study opportunity with you.",

      contact_email: "Email",
      contact_linkedin: "LinkedIn",
      contact_github: "GitHub",
      contact_languages: "Languages",
      contact_sendmail: "Send me an email",

      back_home: "Back to Home",
    },
  },

  profile: {
    fullName: "Kawtar BELCAID",
    target: "Stage en développement web et data",
    location: "Île-de-France",

    heroText: {
     fr:
       "Étudiante en 2ᵉ année de BUT Informatique à l’Université Paris-Saclay, je recherche une alternance en développement web pour ma 3ᵉ année, à partir de septembre 2026, au rythme de 3 jours en entreprise et 2 jours à l’IUT. Je souhaite contribuer au développement, à la maintenance et à l’exploitation d’applications orientées données en mobilisant mes compétences en Python, SQL, conception et traitement de bases de données ainsi qu’en développement backend, tout en apportant mon sérieux, mon autonomie et mon sens de l’organisation au sein d’une équipe technique.",
     en:
       "As a second-year Computer Science student at Université Paris-Saclay, I am seeking a work-study position in web development for my third year starting in September 2026, with a schedule of three days in a company and two days at university. I aim to contribute to the development, maintenance, and operation of data-oriented applications by leveraging my skills in Python, SQL, database design and processing, as well as backend development, while bringing reliability, autonomy, and strong organizational skills to a technical team.",
   },


    links: {
      github: "https://github.com/kawtarblcd-del",
      linkedin: "https://www.linkedin.com/in/kawtar-belcaid/",
      email: "kawtar.blcd@gmail.com",
      cv: "./assets/cv_alternance.pdf",
    },
  },

  sections: [
    {
      key: "diplomes",
      title: { fr: "Diplômes", en: "Education" },
      desc: { fr: "Parcours et formations", en: "Academic background" },
      route: "#/diplomes",
      details: {
        fr: "Présentation de mon parcours académique et des compétences clés acquises tout au long de ma formation.",
        en: "An overview of my academic background and the key skills acquired throughout my education.",
      },
    },
    {
      key: "projets",
      title: { fr: "Projets", en: "Projects" },
      desc: { fr: "Web, data, C++…", en: "Web, data, C++…" },
      route: "#/projets",
      details: {
        fr: "Découvrez quelques projets qui illustrent mon travail et mon parcours.",
        en: "Discover a selection of projects that showcase my work and my journey.",
      },
    },
    {
      key: "experiences",
      title: { fr: "Expériences", en: "Experience" },
      desc: { fr: "Intérim, sport, bénévolat", en: "Work, sports, volunteering" },
      route: "#/experiences",
      details: {
        fr: "Découvrez des expériences qui mettent en avant mes soft skills ",
        en: "Discover experiences that highlight my soft skills.",
      },
    },
    {
      key: "competences",
      title: { fr: "Compétences", en: "Skills" },
      desc: { fr: "Tech & outils", en: "Tech & tools" },
      route: "#/competences",
      details: {
        fr: "Découvrez mes compétences techniques et les outils associés.",
        en: "Discover my technical skills and the associated tools.",
      },
    },
    {
      key: "passions",
      title: { fr: "Passions", en: "Interests" },
      desc: { fr: "Sport, activités, voyages", en: "Sports, hobbies, travel" },
      route: "#/passions",
      details: {
        fr: "Découvrez les sources de motivation qui m’accompagnent en dehors de mes études.",
        en: "Discover what motivates me outside of my studies.",
      },
    },
    {
      key: "contact",
      title: { fr: "Contact", en: "Contact" },
      desc: { fr: "Me joindre rapidement", en: "Reach me quickly" },
      route: "#/contact",
      details: {
        fr: "Email, LinkedIn, GitHub, et CV téléchargeable.",
        en: "Email, LinkedIn, GitHub, and downloadable CV.",
      },
    },
  ],

  diplomas: [
    {
      title: { fr: "Bachelor Universitaire de Technologie en Informatique", en: "Bachelor of Technology in Computer Science" },
      period: { fr: "2025 – 2027", en: "2025 – 2027" },
      institution: { fr: "Université Paris-Saclay – IUT d’Orsay (Bures-sur-Yvette)", en: "Université Paris-Saclay – IUT of Orsay" },
      details: { fr: "Parcours A : Réalisation d’applications — conception, développement et validation.", en: "Track A: Application development — design, implementation, and validation." },
    },
    {
      title: { fr: "Licence Portail Mathématiques – Informatique (L1)", en: "Bachelor Year 1 in Mathematics and Computer Science" },
      period: { fr: "2024 – 2025", en: "2024 – 2025" },
      institution: { fr: "Université Paris-Saclay (Bures-sur-Yvette)", en: "Université Paris-Saclay" },
      details: { fr: "Fondements en mathématiques et informatique, algorithmique et logique.", en: "Foundations in mathematics and computer science, algorithms and logic." },
    },
    {
      title: { fr: "Baccalauréat général", en: "French General Baccalaureate" },
      period: { fr: "2021 – 2024", en: "2021 – 2024" },
      institution: { fr: "Lycée Paul Langevin, Suresnes", en: "Paul Langevin High School, Suresnes" },
      details: { fr: "Spécialités Mathématiques et SES — Mention Bien.", en: "Majors in Mathematics and Economics & Social Sciences — Honors." },
    },
  ],

  projects: [
    {
      title: { fr: "Apprentissage automatique et traitement d’images", en: "Machine Learning and Image Processing" },
      tech: ["Python", "Pandas", "NumPy", "OpenCV", "Scikit-learn"],
      description: {
        fr: "Conception d’un système de classification : préparation des données, traitement d’images, extraction de caractéristiques, entraînement et évaluation de modèles supervisés.",
        en: "Design of a classification system: data preparation, image processing, feature extraction, training and evaluation of supervised models.",
      },
      role: { fr: "Travail en binôme", en: "Team of two" },
      highlights: { fr: ["Data preprocessing", "Computer Vision", "Évaluation de modèles"], en: ["Data preprocessing", "Computer vision", "Model evaluation"] },
      links: { github: "", demo: "" },
      images: [
        "assets/projects/data1.png",
        "assets/projects/data2.png",
        "assets/projects/data3.png",
        "assets/projects/data4.png",
      ],
    },
    {
      title: { fr: "Application web — Gestion d’une plateforme universitaire", en: "Web App — University Platform Management" },
      tech: ["PHP (PDO)", "MySQL", "HTML", "CSS", "JavaScript"],
      description: {
        fr: "Analyse des besoins, modélisation SQL, développement d’une application PHP avec CRUD complet et authentification sécurisée (sessions, hash des mots de passe).",
        en: "Requirements analysis, SQL modeling, PHP app with full CRUD and secure authentication (sessions, password hashing).",
      },
      role: { fr: "Équipe de 3", en: "Team of 3" },
      highlights: { fr: ["CRUD complet", "Authentification", "Modélisation BD"], en: ["Full CRUD", "Authentication", "DB modeling"] },
      links: { github: "", demo: "" },
      images: [
        "assets/projects/web1.png",
        "assets/projects/web2.png",
        "assets/projects/web3.png",
      ],
    },
    {
      title: { fr: "Gestion de données volumineuses en C++", en: "Large-Scale Data Processing in C++" },
      tech: ["C++", "Algorithmique", "Open Data"],
      description: {
        fr: "Conception et développement d’algorithmes optimisés pour manipuler et traiter des données réelles issues de l’open data (opendata.paris.fr).",
        en: "Design and development of optimized algorithms to process real-world open data (opendata.paris.fr).",
      },
      role: { fr: "Projet individuel", en: "Solo project" },
      highlights: { fr: ["Optimisation", "Traitement de données", "C++"], en: ["Optimization", "Data processing", "C++"] },
      links: { github: "", demo: "" },
      images: [],
    },
    {
      title: { fr: "Site web pour une association humanitaire (CELIJE)", en: "Website for a Humanitarian Association (CELIJE)" },
      tech: ["HTML", "CSS", "Communication"],
      description: {
        fr: "Conception d’un site vitrine (structure + mise en page) et création de supports visuels (flyers, vidéos) pour la communication digitale de l’association.",
        en: "Showcase website design (structure + layout) and creation of visuals (flyers, videos) for the association’s digital communication.",
      },
      role: { fr: "Équipe ~10 personnes", en: "Team of ~10 people" },
      highlights: { fr: ["Design web", "Travail d’équipe", "Communication"], en: ["Web design", "Teamwork", "Communication"] },
      links: { github: "", demo: "" },
      images: [],
    },
  ],

  experiences: [
    {
      title: { fr: "Équipière polyvalente (intérim)", en: "Versatile Team Member (Temporary Work)" },
      organization: { fr: "TOPIVO", en: "TOPIVO" },
      period: { fr: "2024 – aujourd’hui", en: "2024 – present" },
      location: { fr: "Île-de-France", en: "Île-de-France" },
      description: {
        fr: [
            "Accueil et service en buvette lors d’événements (concerts, matchs)",
            "Développement de la relation client dans un environnement dynamique",
            "Travail en équipe avec une forte exigence d’organisation et de respect des procédures"
        ],
        en: [
            "Customer service at refreshment stands during events (concerts, matches)",
            "Development of customer relationship skills in a dynamic environment",
            "Teamwork with strong organizational skills and strict adherence to procedures"
        ]
        },
      highlights: { fr: ["Relation client", "Travail d’équipe", "Adaptabilité"], en: ["Customer service", "Teamwork", "Adaptability"] },
    },
    {
      title: { fr: "Arbitre régional diplômée de Taekwondo", en: "Certified Regional Taekwondo Referee" },
      organization: { fr: "Fédération Française de Taekwondo", en: "French Taekwondo Federation" },
      period: { fr: "2022 – 2024", en: "2022 – 2024" },
      location: { fr: "Île-de-France", en: "Île-de-France" },
      description: {
        fr: [
            "Arbitrage avec systèmes électroniques : précision, prise de décision et respect strict des règles.",
            "Formations continues démontrant une capacité d’apprentissage rapide et une bonne maîtrise d’outils."
        ],
        en: [
            "Officiating with electronic systems: accuracy, decision-making, strict rule compliance.",
            "Continuous training showing fast learning and tool mastery."
        ]
        },
      highlights: { fr: ["Rigueur", "Prise de décision", "Responsabilité"], en: ["Rigor", "Decision-making", "Responsibility"] },
    },
    {
      title: { fr: "Bénévole", en: "Volunteer" },
      organization: { fr: "Croix-Rouge française", en: "French Red Cross" },
      period: { fr: "2020 – 2024", en: "2020 – 2024" },
      location: { fr: "Île-de-France", en: "Île-de-France" },
      description: {
        fr: "Participation à des actions solidaires : emballage de cadeaux pour des collectes de Noël, collecte et tri de denrées alimentaires en supermarché, et organisation d’un Noël solidaire pour des familles.",
        en: "Volunteering actions: gift wrapping for Christmas fundraisers, food collection and sorting, and organizing a solidarity Christmas event for families.",
      },
      highlights: { fr: ["Engagement", "Organisation", "Esprit d’équipe"], en: ["Commitment", "Organization", "Team spirit"] },
    },
  ],

  skills: [
    { category: { fr: "Frontend", en: "Frontend" }, tags: ["HTML", "CSS", "JavaScript"] },
    { category: { fr: "Backend", en: "Backend" }, tags: ["PHP", "Python", "Java", "C++"] },
    { category: { fr: "Bases de données", en: "Databases" }, tags: ["SQL", "MySQL", "Oracle", "Modélisation"] },
    { category: { fr: "Réseaux & Systèmes", en: "Networks & Systems" }, tags: ["Linux", "TCP/IP", "DNS", "DHCP", "Sécurité réseau", "Diagnostic réseau"] },
    { category: { fr: "Outils", en: "Tools" }, tags: ["Git", "GitHub", "VS Code", "Visual Paradigm", "Pack Office"] },
    { category: { fr: "Méthodes", en: "Methods" }, tags: ["SCRUM", "Agile"] },
  ],

  /* ✅ Passions en catégories + tags (comme skills) */
  passionsCategories: [
    {
      category: { fr: "Sport", en: "Sports" },
      tags: { fr: ["Course à pied", "Vélo"], en: ["Running", "Cycling"] },
    },
    {
      category: { fr: "Activités manuelles", en: "Handcrafts" },
      tags: { fr: ["Photographie", "Couture"], en: ["Photography", "Sewing"] },
    },
    {
      category: { fr: "Voyage", en: "Travel" },
      tags: { fr: ["Angleterre", "Portugal", "Maroc"], en: ["United Kingdom", "Portugal", "Morocco"] },
    },
  ],

  languages: [
    { name: { fr: "Français", en: "French" }, level: { fr: "Langue maternelle", en: "Native" } },
    { name: { fr: "Anglais", en: "English" }, level: { fr: "Niveau courant", en: "Fluent" } },
    { name: { fr: "Espagnol", en: "Spanish" }, level: { fr: "Niveau scolaire", en: "Basic" } },
    { name: { fr: "Arabe", en: "Arabic" }, level: { fr: "Langue maternelle", en: "Native" } },
  ],
};
