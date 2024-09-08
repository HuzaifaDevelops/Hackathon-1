document.addEventListener("DOMContentLoaded", function () {
    var resumeData = JSON.parse(localStorage.getItem('resume') || '{}');
    var resumeContainer = document.querySelector('.resume-container');
    if (resumeData) {
        displayResume(resumeData);
    }
    if (Object.keys(resumeData).length) {
        displayResume(resumeData);
        resumeContainer.style.display = 'block'; // Show container when there is data
    }
    else {
        resumeContainer.style.display = 'none'; // Hide container when no data
    }
});
function displayResume(data) {
    var resumeDisplay = document.getElementById('resume-display');
    if (resumeDisplay && Object.keys(data).length) {
        resumeDisplay.innerHTML = "\n        <h1>".concat(data.name, "</h1>\n        \n        <div class=\"section personal-info\">\n          <h2>Personal Information</h2>\n          <p><strong>Age:</strong> ").concat(data.age, "</p>\n          <p><strong>City:</strong> ").concat(data.city, ", ").concat(data.country, "</p>\n          <p><strong>Occupation:</strong> ").concat(data.occupation, "</p>\n        </div>\n  \n        <div class=\"section education\">\n          <h2>Education</h2>\n          <ul class=\"education-list\">\n            <li><strong>").concat(data.degree, "</strong> (").concat(data.from, " - ").concat(data.to, ")</li>\n          </ul>\n        </div>\n  \n        <div class=\"section skills\">\n          <h2>Skills</h2>\n          <ul class=\"skills-list\">\n            ").concat(data.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n          </ul>\n        </div>\n  \n        <div class=\"section experience\">\n          <h2>Experience</h2>\n          <p>").concat(data.experience, "</p>\n        </div>\n  \n        <div class=\"section contact\">\n          <h2>Contact</h2>\n          <p><strong>Email:</strong> ").concat(data.email, "</p>\n          <p><strong>GitHub:</strong> <a href=\"").concat(data.github, "\" target=\"_blank\">").concat(data.github, "</a></p>\n          <p><strong>LinkedIn:</strong> <a href=\"").concat(data.linkedin, "\" target=\"_blank\">").concat(data.linkedin, "</a></p>\n        </div>\n      ");
    }
}
