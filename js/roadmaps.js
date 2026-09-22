// Roadmap data lives here so new roles can be added without creating new pages.
const resource = (name, url) => ({ name, url });
const skill = (id, title, what, how, practice, resources) => ({ id, title, what, how, practice, resources });

const webResources = [resource("MDN Web Docs", "https://developer.mozilla.org/"), resource("freeCodeCamp", "https://www.freecodecamp.org/")];
const gitResources = [resource("Pro Git Book", "https://git-scm.com/book/en/v2"), resource("GitHub Skills", "https://skills.github.com/")];
const reactResources = [resource("React Documentation", "https://react.dev/learn"), resource("MDN JavaScript Guide", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide")];
const backendResources = [resource("Node.js Learn", "https://nodejs.org/en/learn"), resource("Express Documentation", "https://expressjs.com/")];
const databaseResources = [resource("SQLBolt", "https://sqlbolt.com/"), resource("PostgreSQL Tutorial", "https://www.postgresql.org/docs/current/tutorial.html")];
const professionalResources = [resource("OWASP Top 10", "https://owasp.org/www-project-top-ten/"), resource("Docker Get Started", "https://docs.docker.com/get-started/")];

const roadmaps = {
  "Full-Stack Developer": {
    title: "Full-Stack Developer Roadmap",
    description: "Build the frontend, backend, database, and professional workflow skills needed to create complete web applications.",
    stages: [
      { title: "Web Foundations", mission: { title: "Build a Responsive Personal Portfolio Page", description: "Create a clear portfolio that introduces your skills and work.", why: "A polished portfolio is your first practical project and professional presence.", tasks: ["Plan the page sections", "Build a responsive layout", "Check keyboard and mobile usability"] }, skills: [
        skill("html", "HTML", "Learn how HTML gives a page meaningful structure.", "Read semantic markup examples, then write the structure yourself.", "Create an about-me page using header, main, section, and footer elements.", webResources),
        skill("css", "CSS", "Learn how CSS controls layout, spacing, colour, and typography.", "Practice one layout concept at a time before combining them.", "Style your about-me page with a simple colour system.", webResources),
        skill("responsive-design", "Responsive Design", "Learn to make layouts work across screen sizes.", "Use flexible units and test your page at phone and desktop widths.", "Add two responsive breakpoints to your portfolio.", webResources),
        skill("accessibility", "Accessibility", "Learn to make web content usable for more people.", "Use semantic elements, labels, and visible focus states.", "Navigate your page using only the keyboard.", webResources),
        skill("browser-devtools", "Browser & DevTools Basics", "Learn to inspect and debug a page in the browser.", "Use the Elements, Console, and responsive device tools.", "Find and fix one intentional CSS issue with DevTools.", webResources)
      ] },
      { title: "JavaScript", mission: { title: "Build an Interactive To-Do Application", description: "Create a browser-based app where users can add and manage tasks.", why: "It proves you can use JavaScript to turn a static interface into a useful product.", tasks: ["Add and remove tasks", "Handle user events", "Store tasks in browser storage"] }, skills: [
        skill("js-variables", "Variables & Data Types", "Learn how JavaScript stores and works with information.", "Write short examples and predict their output before running them.", "Create variables for a task title, due date, and completion state.", webResources),
        skill("js-functions", "Functions", "Learn to group reusable behaviour into functions.", "Start with small functions that do one job well.", "Write a function that formats a task name.", webResources),
        skill("js-arrays-objects", "Arrays & Objects", "Learn to organize collections and related data.", "Practice looping through arrays and reading object properties.", "Store three to-do items as objects in an array.", webResources),
        skill("dom", "DOM Manipulation", "Learn to update page content with JavaScript.", "Select elements, create elements, and change text step by step.", "Render your task array on a page.", webResources),
        skill("events", "Events", "Learn how pages respond to user actions.", "Attach one event listener at a time and test it.", "Add a click event that creates a new task.", webResources),
        skill("es6", "Modern JavaScript / ES6+", "Learn modern syntax such as arrow functions and destructuring.", "Refactor familiar code into small modern examples.", "Rewrite a previous loop using map or forEach.", webResources),
        skill("async-js", "Async JavaScript", "Learn how JavaScript handles work that finishes later.", "Practice promises and async/await with small examples.", "Show a loading message while waiting for a promise.", webResources),
        skill("fetch-api", "Fetch & API Basics", "Learn to request and use data from an API.", "Start by logging JSON, then render one field on a page.", "Fetch a public sample API and display three items.", webResources)
      ] },
      { title: "Git & Developer Workflow", mission: { title: "Publish a Project on GitHub Using a Proper Git Workflow", description: "Use Git to track your work and publish it professionally.", why: "Version control is an essential collaboration skill for developers.", tasks: ["Initialize a repository", "Create meaningful commits", "Open a practice pull request"] }, skills: [
        skill("git-basics", "Git Basics", "Learn how Git tracks changes to your code.", "Practice status, add, commit, and log in a small project.", "Make three focused commits for one project.", gitResources),
        skill("github", "GitHub", "Learn to host and share repositories online.", "Create a repository and write a clear README.", "Publish your portfolio repository.", gitResources),
        skill("commits", "Commits", "Learn to record clear, focused pieces of work.", "Write commit messages that explain the change.", "Rename one vague commit message in a practice branch.", gitResources),
        skill("branches", "Branches", "Learn to work on changes without affecting the main branch.", "Create a branch for one small feature.", "Add a contact section on a separate branch.", gitResources),
        skill("pull-requests", "Pull Requests", "Learn to review and merge changes safely.", "Open a pull request with a concise description.", "Create and merge a pull request into main.", gitResources),
        skill("command-line", "Command Line Basics", "Learn basic terminal navigation and file commands.", "Use the terminal for Git and simple file navigation.", "Navigate to a project folder and run git status.", gitResources)
      ] },
      { title: "Frontend Development", mission: { title: "Build a Frontend Application Using a Public API", description: "Create a multi-screen frontend that fetches and displays live data.", why: "It brings together modern component-based frontend development.", tasks: ["Plan reusable components", "Fetch and display API data", "Add loading and error states"] }, skills: [
        skill("react", "React", "Learn the basics of building interfaces with React.", "Follow the official tutorial and build small components first.", "Create a page with a reusable card component.", reactResources),
        skill("components", "Components", "Learn to split an interface into reusable pieces.", "Identify repeated interface patterns before coding.", "Break a page into header, card, and footer components.", reactResources),
        skill("props", "Props", "Learn to pass information between components.", "Pass simple text, then arrays and callback functions.", "Render three cards from one component using props.", reactResources),
        skill("state", "State", "Learn how components remember changing information.", "Practice one state value at a time.", "Build a counter with an editable title.", reactResources),
        skill("hooks", "Hooks", "Learn React hooks for state and side effects.", "Use useState before moving on to useEffect.", "Fetch data after a component loads.", reactResources),
        skill("forms", "Forms", "Learn to collect and validate user input in an interface.", "Use controlled fields and clear validation messages.", "Build a contact form with required fields.", reactResources),
        skill("routing", "Routing", "Learn how frontend apps navigate between views.", "Create routes for a home, list, and detail page.", "Add navigation to a three-page app.", reactResources),
        skill("api-integration", "API Integration", "Learn to connect a frontend to an external data source.", "Handle loading, success, and error states explicitly.", "Display search results from a public API.", reactResources)
      ] },
      { title: "Backend Development", mission: { title: "Build a Complete REST API", description: "Create a backend service with well-structured endpoints and validation.", why: "A REST API is the core of many full-stack applications.", tasks: ["Design resources and routes", "Validate incoming data", "Return helpful error responses"] }, skills: [
        skill("node", "Node.js", "Learn to run JavaScript outside the browser.", "Create small scripts before building a server.", "Run a script that reads a command-line argument.", backendResources), skill("express", "Express", "Learn a lightweight framework for web servers.", "Create routes one by one and test each response.", "Build a hello-world Express server.", backendResources), skill("http", "HTTP", "Learn how requests, responses, methods, and status codes work.", "Inspect requests in DevTools or an API client.", "Choose correct status codes for three API cases.", backendResources), skill("rest", "REST APIs", "Learn conventions for designing resource-based APIs.", "Start with nouns, methods, and predictable URLs.", "Design CRUD routes for tasks.", backendResources), skill("middleware", "Middleware", "Learn how servers process requests in reusable steps.", "Add logging before building custom middleware.", "Write middleware that adds a request timestamp.", backendResources), skill("authentication", "Authentication", "Learn how an app verifies user identity.", "Understand sessions and tokens before implementing them.", "Protect a practice route with a simple token check.", backendResources), skill("authorization", "Authorization", "Learn to control what authenticated users can do.", "Add roles after authentication works.", "Restrict a delete route to an admin role.", backendResources), skill("validation", "Validation", "Learn to check data before using it.", "Define rules for each input field.", "Reject a task request with an empty title.", backendResources), skill("error-handling", "Error Handling", "Learn to return safe, useful errors.", "Use one central error-handling approach.", "Create an error response for an unknown route.", backendResources)
      ] },
      { title: "Databases", mission: { title: "Build a Database-Backed Application", description: "Persist application data and connect it safely to your backend.", why: "Databases turn a demo into an application that remembers useful information.", tasks: ["Design a simple schema", "Write CRUD queries", "Connect the API to the database"] }, skills: [
        skill("sql", "SQL Fundamentals", "Learn the language used to query relational databases.", "Write small SELECT queries before joining tables.", "Select and filter tasks from a table.", databaseResources), skill("tables", "Tables & Relationships", "Learn how data is structured and connected.", "Sketch entities and their relationships before creating tables.", "Model users and tasks with a relationship.", databaseResources), skill("crud", "CRUD", "Learn to create, read, update, and delete data.", "Practice each operation with one table.", "Write CRUD queries for a notes table.", databaseResources), skill("joins", "Joins", "Learn to combine related data from multiple tables.", "Start with INNER JOIN examples.", "List tasks alongside their user names.", databaseResources), skill("database-design", "Database Design", "Learn to design data structures that stay clear as an app grows.", "Normalize simple data and define constraints.", "Draw a schema for a library app.", databaseResources), skill("database-integration", "Backend Database Integration", "Learn to connect backend routes to a database.", "Keep queries separate from route handlers.", "Save a form submission through your API.", databaseResources), skill("nosql", "NoSQL Basics", "Learn when document databases are useful.", "Compare a document model with a relational model.", "Model a profile as a document.", databaseResources)
      ] },
      { title: "Professional Development", mission: { title: "Deploy a Production-Style Application", description: "Prepare, test, secure, and deploy an application like a professional team would.", why: "Reliable delivery habits make your projects easier to trust and share.", tasks: ["Add environment configuration", "Deploy a working build", "Document setup and known limitations"] }, skills: [
        skill("testing", "Testing Basics", "Learn to check behaviour automatically.", "Start with one unit test for a pure function.", "Write a test for a task formatter.", professionalResources), skill("security", "Security Fundamentals", "Learn common web risks and safe development habits.", "Review the OWASP Top 10 at a high level.", "Identify two security concerns in a sample form.", professionalResources), skill("environment-variables", "Environment Variables", "Learn to keep configuration out of source code.", "Use a local environment file and never commit secrets.", "Move a configuration value into an environment variable.", professionalResources), skill("docker", "Docker Basics", "Learn how containers make environments consistent.", "Follow a small official getting-started example.", "Containerize a simple Node app.", professionalResources), skill("deployment", "Deployment", "Learn to make an application available online.", "Deploy a small project and test it from another device.", "Publish a production build with a README link.", professionalResources), skill("debugging", "Debugging", "Learn a systematic way to find and fix problems.", "Reproduce, isolate, inspect, then test a fix.", "Fix a deliberate bug using breakpoints or logs.", professionalResources), skill("logging", "Logging", "Learn to record useful application events.", "Log clear context without exposing sensitive information.", "Add request logging to an API route.", professionalResources), skill("code-organization", "Code Organization", "Learn to keep projects understandable as they grow.", "Group files by purpose and use meaningful names.", "Refactor a project into routes, services, and utilities.", professionalResources)
      ] },
      { title: "Final Capstone", mission: { title: "Build a Complete Full-Stack Application", description: "Combine frontend, backend, database, authentication, and deployment into one portfolio-quality product.", why: "This final project demonstrates that you can plan, build, and ship a complete application.", tasks: ["Choose a real problem to solve", "Build and connect all application layers", "Deploy it and document your decisions"], finalMilestone: "Portfolio-Ready Full-Stack Project" }, skills: [] }
    ]
  }
};

const roadmapPage = document.querySelector(".roadmap-page");

if (roadmapPage) {
  const studentProfile = JSON.parse(localStorage.getItem("studentProfile"));
  if (!studentProfile) {
    window.location.href = "onboarding.html";
  } else {
    const roadmap = roadmaps[studentProfile.targetRole];
    const title = document.querySelector("#roadmap-title");
    const description = document.querySelector("#roadmap-description");
    const stagesElement = document.querySelector("#roadmap-stages");
    const message = document.querySelector("#roadmap-message");
    const statuses = JSON.parse(localStorage.getItem("roadmapSkillStatus")) || {};
    const missionStatus = JSON.parse(localStorage.getItem("roadmapMissionStatus")) || {};

    if (!roadmap) {
      title.textContent = `${studentProfile.targetRole} roadmap coming soon`;
      description.textContent = "Your personalized roadmap is being prepared. You can return to your dashboard while we add this role.";
    } else {
      title.textContent = roadmap.title;
      description.textContent = roadmap.description;
      const allSkills = roadmap.stages.flatMap((stage) => stage.skills);
      const totalItems = allSkills.length + roadmap.stages.length;

      const saveProgress = () => {
        const completedSkills = allSkills.filter((item) => statuses[item.id] === "Completed").length;
        const completedMissions = roadmap.stages.filter((stage) => missionStatus[stage.title]).length;
        const completed = completedSkills + completedMissions;
        localStorage.setItem("roadmapSkillStatus", JSON.stringify(statuses));
        localStorage.setItem("roadmapMissionStatus", JSON.stringify(missionStatus));
        localStorage.setItem("roadmapProgress", JSON.stringify({ completed, total: totalItems }));
        document.querySelector("#roadmap-progress-value").textContent = completed ? `${Math.round((completed / totalItems) * 100)}%` : "Not started";
        document.querySelector("#roadmap-progress-count").textContent = `${completed} of ${totalItems} completed items`;
        document.querySelector("#roadmap-progress-bar").style.width = `${Math.round((completed / totalItems) * 100)}%`;
      };

      const statusClass = (stage) => {
        const stageSkills = stage.skills;
        const finished = missionStatus[stage.title] && (stageSkills.length === 0 || stageSkills.every((item) => statuses[item.id] === "Completed"));
        const started = stageSkills.some((item) => statuses[item.id] && statuses[item.id] !== "Not Started") || missionStatus[stage.title];
        return finished ? "completed" : started ? "in-progress" : "future";
      };
      const render = () => {
        const firstUnfinished = roadmap.stages.find((stage) => statusClass(stage) !== "completed");
        stagesElement.innerHTML = roadmap.stages.map((stage, index) => `<article class="roadmap-stage ${statusClass(stage)} ${firstUnfinished === stage ? "recommended" : ""}"><div class="stage-node">${String(index + 1).padStart(2, "0")}</div><div class="stage-card"><div class="stage-heading"><div><p class="eyebrow">STAGE ${String(index + 1).padStart(2, "0")}</p><h2>${stage.title}</h2></div><span>${firstUnfinished === stage ? "RECOMMENDED NEXT" : statusClass(stage).replace("-", " ")}</span></div><div class="skill-list">${stage.skills.length ? stage.skills.map((item) => `<article class="skill-item ${statuses[item.id] || "Not Started"}"><button class="skill-toggle" data-skill="${item.id}" aria-expanded="false"><span>${item.title}</span><small>${statuses[item.id] || "Not Started"}</small><b>+</b></button><div class="skill-detail" id="detail-${item.id}"><div><h3>What?</h3><p>${item.what}</p></div><div><h3>Where?</h3><ul>${item.resources.map((itemResource) => `<li><a href="${itemResource.url}" target="_blank" rel="noopener">${itemResource.name} ↗</a></li>`).join("")}</ul></div><div><h3>How?</h3><p>${item.how}</p><p><strong>Practice:</strong> ${item.practice}</p></div><button class="status-button" data-status="${item.id}">Mark as ${statuses[item.id] === "Completed" ? "Not Started" : statuses[item.id] === "In Progress" ? "Completed" : "In Progress"}</button></div></article>`).join("") : `<p class="capstone-note">Bring every layer together in a complete, portfolio-ready application.</p>`}</div><div class="mission-card"><div><p class="eyebrow">${stage.mission.finalMilestone ? "FINAL MILESTONE" : "STAGE MISSION"}</p><h3>${stage.mission.title}</h3><p>${stage.mission.description}</p><p><strong>Why it matters:</strong> ${stage.mission.why}</p><ul>${stage.mission.tasks.map((task) => `<li>${task}</li>`).join("")}</ul>${stage.mission.finalMilestone ? `<p class="milestone">◆ ${stage.mission.finalMilestone}</p>` : ""}</div><label class="mission-complete"><input type="checkbox" data-mission="${stage.title}" ${missionStatus[stage.title] ? "checked" : ""}> <span>Mission completed</span></label></div></div></article>`).join("");
        saveProgress();
      };

      stagesElement.addEventListener("click", (event) => {
        const toggle = event.target.closest(".skill-toggle");
        const statusButton = event.target.closest(".status-button");
        if (toggle) {
          const detail = document.querySelector(`#detail-${toggle.dataset.skill}`);
          const isOpen = detail.classList.toggle("open");
          toggle.setAttribute("aria-expanded", isOpen);
          toggle.querySelector("b").textContent = isOpen ? "−" : "+";
        }
        if (statusButton) {
          const id = statusButton.dataset.status;
          const current = statuses[id] || "Not Started";
          statuses[id] = current === "Not Started" ? "In Progress" : current === "In Progress" ? "Completed" : "Not Started";
          message.textContent = `Skill status updated to ${statuses[id]}.`;
          render();
        }
      });
      stagesElement.addEventListener("change", (event) => {
        if (event.target.matches("[data-mission]")) {
          missionStatus[event.target.dataset.mission] = event.target.checked;
          message.textContent = event.target.checked ? "Mission marked as completed." : "Mission marked as incomplete.";
          render();
        }
      });
      render();
    }
  }
}
