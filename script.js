document.addEventListener("DOMContentLoaded", () => {
    const resumeData = JSON.parse(localStorage.getItem("resumeData"));

    if (resumeData) {
        // Populate contact info
        document.getElementById("address").innerText = resumeData.address;
        document.getElementById("phone-email").innerHTML = `Tel: ${resumeData.phone} <br> Email: ${resumeData.email}`;
        document.getElementById("website").innerHTML = `Website: <a href="${resumeData.website}" target="_blank">${resumeData.website}</a>`;

        // Social Links
        const socialLinks = document.getElementById("social-links");
        resumeData.social.split(",").forEach(link => {
            const li = document.createElement("li");
            li.textContent = link.trim();
            socialLinks.appendChild(li);
        });

        // Populate skills and tools
        document.getElementById("skills").innerText = resumeData.skills;
        document.getElementById("frameworks").innerText = `Frameworks: ${resumeData.frameworks}`;
        document.getElementById("tools").innerText = `Tools: ${resumeData.tools}`;

        // Populate name and title
        document.getElementById("name").innerText = resumeData.name;
        document.getElementById("title").innerText = resumeData.title;

        // Populate profile
        document.getElementById("profile-text").innerText = resumeData.profile;

        // Populate experience
        const experienceDiv = document.getElementById("experience");
        resumeData.experience.split(";").forEach(exp => {
            const p = document.createElement("p");
            p.textContent = exp.trim();
            experienceDiv.appendChild(p);
        });

        // Populate education
        const educationDiv = document.getElementById("education");
        resumeData.education.split(";").forEach(edu => {
            const p = document.createElement("p");
            p.textContent = edu.trim();
            educationDiv.appendChild(p);
        });
    } else {
        alert("No data found. Please fill out the form.");
        window.location.href = "index.html";
    }
});
