document.getElementById("resumeForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const title = (document.getElementById("title") as HTMLInputElement).value;
    const profile = (document.getElementById("profile") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;

    // Update Resume Content
    (document.getElementById("display-name") as HTMLElement).innerText = name;
    (document.getElementById("display-title") as HTMLElement).innerText = title;
    (document.getElementById("display-profile") as HTMLElement).innerText = profile;
    (document.getElementById("display-experience") as HTMLElement).innerText = experience;
    (document.getElementById("display-education") as HTMLElement).innerText = education;

    // Show Resume and Hide Form
    (document.getElementById("form-container") as HTMLElement).style.display = "none";
    (document.getElementById("resume-container") as HTMLElement).style.display = "flex";
});
