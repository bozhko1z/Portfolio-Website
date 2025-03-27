fetch("data.json")
  .then(response => response.json())
  .then(data => {
    document.querySelector("h1").innerText = `Hi, I'm ${data.name}`;
    document.querySelector(".hero p").innerText = data.description;

    // Projects
    let projectsContainer = document.getElementById("projects-container");
    data.projects.forEach(project => {
      let projectCard = document.createElement("div");
      projectCard.classList.add("project-card");
      projectCard.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Project</a>`;
      projectsContainer.appendChild(projectCard);
    });

    // Contact Info
    let contactSection = document.getElementById("contact");
    contactSection.innerHTML += `<p>Email: <a href="mailto:${data.contact.email}">${data.contact.email}</a></p>`;
    
    let socialIcons = document.querySelector(".social-icons");
    Object.keys(data.contact.socials).forEach(platform => {
      let link = data.contact.socials[platform];
      let iconClass = platform === "github" ? "fab fa-github" :
                      platform === "linkedin" ? "fab fa-linkedin" :
                      "fab fa-twitter";
      socialIcons.innerHTML += `<a href="${link}" target="_blank"><i class="${iconClass}"></i></a>`;
    });
  })
  .catch(error => console.error("Error loading JSON:", error));
