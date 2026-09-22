// Opens and closes the navigation menu on smaller screens.
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", isOpen);
  });

  // Close the mobile menu after a visitor selects a link.
  navLinks.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

// Onboarding form: roles change based on the selected career domain.
const onboardingForm = document.querySelector("#onboarding-form");

if (onboardingForm) {
  const domainSelect = document.querySelector("#domain");
  const trackSelect = document.querySelector("#career-track");
  const roleSelect = document.querySelector("#target-role");
  const trackField = document.querySelector("#track-field");
  const roleField = document.querySelector("#role-field");
  const message = document.querySelector("#form-message");
  const careersByDomain = {
    Technology: {
      "Software & Web Development": ["Frontend Developer", "Backend Developer", "Full-Stack Developer", "Software Engineer", "Web Developer", "Application Developer", "API Developer"],
      "Mobile App Development": ["Android Developer", "iOS Developer", "Flutter Developer", "React Native Developer", "Mobile App Developer"],
      "AI & Machine Learning": ["AI Engineer", "Machine Learning Engineer", "AI/ML Engineer", "Deep Learning Engineer", "Generative AI Engineer", "NLP Engineer", "Computer Vision Engineer", "AI Research Engineer"],
      "Data Engineering & Analytics": ["Data Analyst", "Data Scientist", "Data Engineer", "Analytics Engineer", "BI Analyst", "BI Developer", "Data Architect"],
      Cybersecurity: ["Cybersecurity Analyst", "Security Analyst", "Security Engineer", "SOC Analyst", "Penetration Tester", "Ethical Hacker", "Application Security Engineer", "Cloud Security Engineer", "Security Architect", "Digital Forensics Analyst"],
      "Cloud & DevOps": ["Cloud Engineer", "Cloud Architect", "Cloud Developer", "DevOps Engineer", "DevSecOps Engineer", "Site Reliability Engineer", "Platform Engineer", "Infrastructure Engineer"],
      "Networking & Infrastructure": ["Network Engineer", "Network Administrator", "Network Architect", "Systems Administrator", "Systems Engineer", "IT Support Engineer"],
      "Blockchain & Web3": ["Blockchain Developer", "Blockchain Engineer", "Smart Contract Developer", "Web3 Developer", "Solidity Developer"],
      "Game Development": ["Game Developer", "Game Programmer", "Unity Developer", "Unreal Engine Developer", "Gameplay Programmer"],
      "Testing & Quality Engineering": ["QA Engineer", "QA Analyst", "Software Test Engineer", "Automation Test Engineer", "SDET", "Performance Test Engineer"],
      "Embedded & IoT": ["Embedded Systems Engineer", "Embedded Software Engineer", "IoT Engineer", "IoT Developer", "Firmware Engineer", "Robotics Software Engineer"],
      "Emerging Technologies": ["AR/VR Developer", "XR Developer", "Robotics Engineer", "Computer Vision Engineer", "Quantum Computing Researcher"]
    },
    Data: { "Data Analytics": ["Data Analyst"], "Data Science": ["Data Scientist"], "Data Engineering": ["Data Engineer"], "Business Intelligence": ["BI Analyst", "BI Developer"] },
    Design: { "UI/UX Design": ["UI Designer", "UX Designer", "UX Researcher"], "Visual Design": ["Visual Designer"], "Product Design": ["Product Designer"] },
    Product: { "Product Management": ["Product Manager", "Associate Product Manager", "Product Analyst"], "Product Operations": ["Product Operations Associate"] },
    Marketing: { "Digital Marketing": ["Digital Marketing Specialist", "SEO Specialist"], "Content Marketing": ["Content Strategist"], "Growth Marketing": ["Growth Marketer", "Social Media Manager"], "Brand Marketing": ["Brand Manager"] },
    Business: { "Business Analysis": ["Business Analyst"], Consulting: ["Business Consultant"], Operations: ["Operations Analyst"], Sales: ["Sales Executive", "Business Development Executive"] }
  };

  function resetRoles() {
    roleSelect.innerHTML = '<option value="">Select a career track first</option>';
    roleSelect.disabled = true;
    roleField.hidden = true;
  }

  domainSelect.addEventListener("change", () => {
    const tracks = careersByDomain[domainSelect.value] || {};
    trackSelect.innerHTML = '<option value="">Select your career track</option>';
    Object.keys(tracks).forEach((track) => {
      const option = document.createElement("option");
      option.value = track;
      option.textContent = track;
      trackSelect.appendChild(option);
    });
    trackSelect.disabled = Object.keys(tracks).length === 0;
    trackField.hidden = Object.keys(tracks).length === 0;
    resetRoles();
  });

  trackSelect.addEventListener("change", () => {
    const roles = careersByDomain[domainSelect.value]?.[trackSelect.value] || [];
    roleSelect.innerHTML = '<option value="">Select your target role</option>';
    roles.forEach((role) => {
      const option = document.createElement("option");
      option.value = role;
      option.textContent = role;
      roleSelect.appendChild(option);
    });
    roleSelect.disabled = roles.length === 0;
    roleField.hidden = roles.length === 0;
  });

  onboardingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(onboardingForm);
    const profile = Object.fromEntries(formData.entries());

    if (!profile.name.trim() || !profile.education || !profile.experienceLevel || !profile.domain || !profile.careerTrack || !profile.targetRole) {
      message.textContent = "Please complete all fields so we can prepare your career journey.";
      message.classList.add("show");
      return;
    }

    localStorage.setItem("studentProfile", JSON.stringify(profile));
    window.location.href = "dashboard.html";
  });
}

// Dashboard: read saved profile and progress data from localStorage.
const dashboardPage = document.querySelector(".dashboard-page");

if (dashboardPage) {
  const studentProfile = JSON.parse(localStorage.getItem("studentProfile"));

  // A dashboard needs a completed onboarding profile to display useful information.
  if (!studentProfile) {
    window.location.href = "onboarding.html";
  } else {
    const defaultCareerProgress = { technical: null, softSkills: null, networking: null };
    const defaultRoadmapProgress = { completed: 0, total: 10 };
    const storedCareerProgress = JSON.parse(localStorage.getItem("careerProgress"));
    const isOldPlaceholderData = storedCareerProgress && storedCareerProgress.technical === 35 && storedCareerProgress.softSkills === 25 && storedCareerProgress.networking === 20;
    const careerProgress = isOldPlaceholderData ? defaultCareerProgress : { ...defaultCareerProgress, ...storedCareerProgress };
    const roadmapProgress = JSON.parse(localStorage.getItem("roadmapProgress")) || defaultRoadmapProgress;

    // Save defaults once, so future pages can update the same progress values.
    localStorage.setItem("careerProgress", JSON.stringify(careerProgress));
    localStorage.setItem("roadmapProgress", JSON.stringify(roadmapProgress));

    const getPercentage = (value) => {
      if (value === null || value === undefined || value === "") return null;
      return Math.max(0, Math.min(100, Number(value) || 0));
    };
    const technical = getPercentage(careerProgress.technical);
    const softSkills = getPercentage(careerProgress.softSkills);
    const networking = getPercentage(careerProgress.networking);
    const assessedAreas = [technical, softSkills, networking].filter((value) => value !== null);
    const overall = assessedAreas.length ? Math.round(assessedAreas.reduce((total, value) => total + value, 0) / assessedAreas.length) : null;
    const roadmapTotal = Math.max(1, Number(roadmapProgress.total) || 10);
    const roadmapCompleted = Math.max(0, Math.min(roadmapTotal, Number(roadmapProgress.completed) || 0));
    const roadmapPercent = Math.round((roadmapCompleted / roadmapTotal) * 100);

    const setText = (id, value) => { document.querySelector(id).textContent = value || "—"; };
    const setReadinessArea = (barId, valueId, hintId, value, emptyLabel, emptyHint) => {
      document.querySelector(barId).style.width = `${value === null ? 0 : value}%`;
      setText(valueId, value === null ? emptyLabel : `${value}%`);
      setText(hintId, value === null ? emptyHint : "Assessment complete");
    };
    const hour = new Date().getHours();
    const timeOfDay = hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";
    const firstName = (studentProfile.name || "there").trim().split(" ")[0];

    setText("#greeting", `Good ${timeOfDay}, ${firstName} 👋`);
    setText("#hero-domain", studentProfile.domain);
    setText("#hero-track", studentProfile.careerTrack);
    setText("#hero-role", studentProfile.targetRole);
    setText("#profile-name", studentProfile.name);
    setText("#profile-initial", firstName.charAt(0).toUpperCase());
    setText("#profile-education", studentProfile.education);
    setText("#profile-experience", studentProfile.experienceLevel);
    setText("#profile-domain", studentProfile.domain);
    setText("#profile-track", studentProfile.careerTrack);
    setText("#profile-role", studentProfile.targetRole);
    setText("#overall-progress", overall === null ? "—" : `${overall}%`);
    setText("#overall-label", overall === null ? "not assessed" : "overall");
    document.querySelector("#overall-ring").style.borderTopColor = overall === null ? "#dfe8ff" : "var(--blue)";
    document.querySelector("#overall-ring").style.borderRightColor = overall === null ? "#dfe8ff" : "var(--blue)";
    setReadinessArea("#technical-bar", "#technical-value", "#technical-hint", technical, "Not assessed", "Complete your technical assessment");
    setReadinessArea("#soft-skills-bar", "#soft-skills-value", "#soft-skills-hint", softSkills, "Not assessed", "Complete your soft skills assessment");
    setReadinessArea("#networking-bar", "#networking-value", "#networking-hint", networking, "Getting started", "Begin your networking journey");
    setText("#roadmap-role", studentProfile.targetRole || "Your");
    setText("#roadmap-count", `${roadmapCompleted} of ${roadmapTotal} skills completed`);
    setText("#roadmap-percent", `${roadmapPercent}%`);
    document.querySelector("#roadmap-bar").style.width = `${roadmapPercent}%`;
  }
}
