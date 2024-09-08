// Function to display the resume
var _a, _b, _c;
(_a = document.getElementById('previewBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', previewResume);
function previewResume() {
    var resumeData = JSON.parse(localStorage.getItem('resume') || '{}');
    // Create a new window and pass the resume data
    var previewWindow = window.open('', '_blank', 'width=800,height=900');
    if (previewWindow) {
        // Prepare the HTML content for the new window
        previewWindow.document.write("\n        <html>\n            <head>\n                <title>Resume Preview</title>\n                <style>\n                    body {\n                        font-family: Arial, sans-serif;\n                        margin: 20px;\n                    }\n                    .section {\n                        margin-bottom: 20px;\n                    }\n                    h1 {\n                        font-size: 24px;\n                        color: #333;\n                    }\n                    h2 {\n                        font-size: 20px;\n                        margin-bottom: 10px;\n                        color: #666;\n                    }\n                    p {\n                        font-size: 16px;\n                        margin-bottom: 8px;\n                    }\n                    ul {\n                        list-style: none;\n                        padding: 0;\n                    }\n                    ul li {\n                        background: #f0f0f0;\n                        padding: 8px;\n                        margin-bottom: 5px;\n                        border-radius: 5px;\n                    }\n                </style>\n            </head>\n            <body>\n                <div id=\"resume-display\">\n                    <h1>".concat(resumeData.name, "</h1>\n                    \n                    <div class=\"section personal-info\">\n                        <h2>Personal Information</h2>\n                        <p><strong>Age:</strong> ").concat(resumeData.age, "</p>\n                        <p><strong>City:</strong> ").concat(resumeData.city, ", ").concat(resumeData.country, "</p>\n                        <p><strong>Occupation:</strong> ").concat(resumeData.occupation, "</p>\n                    </div>\n              \n                    <div class=\"section education\">\n                        <h2>Education</h2>\n                        <ul class=\"education-list\">\n                            <li><strong>").concat(resumeData.degree, "</strong> (").concat(resumeData.from, " - ").concat(resumeData.to, ")</li>\n                        </ul>\n                    </div>\n              \n                    <div class=\"section skills\">\n                        <h2>Skills</h2>\n                        <ul class=\"skills-list\">\n                            ").concat(resumeData.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n                        </ul>\n                    </div>\n              \n                    <div class=\"section experience\">\n                        <h2>Experience</h2>\n                        <p>").concat(resumeData.experience, "</p>\n                    </div>\n              \n                    <div class=\"section contact\">\n                        <h2>Contact</h2>\n                        <p><strong>Email:</strong> ").concat(resumeData.email, "</p>\n                        <p><strong>GitHub:</strong> <a href=\"").concat(resumeData.github, "\" target=\"_blank\">").concat(resumeData.github, "</a></p>\n                        <p><strong>LinkedIn:</strong> <a href=\"").concat(resumeData.linkedin, "\" target=\"_blank\">").concat(resumeData.linkedin, "</a></p>\n                    </div>\n                </div>\n            </body>\n        </html>\n        "));
        previewWindow.document.close(); // Close the document writing process
    }
}
(_b = document.getElementById('previewBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', previewResume);
function generateRandomId() {
    return 'id-' + Math.random().toString(36).substr(2, 9); // Generates a random ID like 'id-xyz123abc'
}
function display(data) {
    var resumeDisplay = document.getElementById('resume-display');
    if (resumeDisplay && Object.keys(data).length) {
        resumeDisplay.innerHTML = "\n        <h1>".concat(data.name || 'N/A', "</h1>\n        \n        <div class=\"section personal-info\">\n          <h2>Personal Information</h2>\n          <p><strong>Age:</strong> ").concat(data.age || 'N/A', "</p>\n          <p><strong>City:</strong> ").concat(data.city || 'N/A', ", ").concat(data.country || 'N/A', "</p>\n          <p><strong>Occupation:</strong> ").concat(data.occupation || 'N/A', "</p>\n        </div>\n  \n        <div class=\"section education\">\n          <h2>Education</h2>\n          <ul class=\"education-list\">\n            <li><strong>").concat(data.degree || 'N/A', "</strong> (").concat(data.from || 'N/A', " - ").concat(data.to || 'N/A', ")</li>\n          </ul>\n        </div>\n  \n        <div class=\"section skills\">\n          <h2>Skills</h2>\n          <ul class=\"skills-list\">\n            ").concat(data.skills.length > 0 ? data.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join('') : '<li>No skills provided</li>', "\n          </ul>\n        </div>\n  \n        <div class=\"section experience\">\n          <h2>Experience</h2>\n          <p>").concat(data.experience || 'N/A', "</p>\n        </div>\n  \n        <div class=\"section contact\">\n          <h2>Contact</h2>\n          <p><strong>Email:</strong> ").concat(data.email || 'N/A', "</p>\n          <p><strong>GitHub:</strong> ").concat(data.github ? "<a href=\"".concat(data.github, "\" target=\"_blank\">").concat(data.github, "</a>") : 'N/A', "</p>\n          <p><strong>LinkedIn:</strong> ").concat(data.linkedin ? "<a href=\"".concat(data.linkedin, "\" target=\"_blank\">").concat(data.linkedin, "</a>") : 'N/A', "</p>\n        </div>\n      ");
    }
    else {
        resumeDisplay.innerHTML = '<p>No resume data available.</p>'; // In case of no data
    }
}
// Event listener for the Save button
(_c = document.getElementById('saveBtn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', saveResume);
// Function to save the resume
function saveResume() {
    var skills = [
        document.getElementById('skill1').value.trim(),
        document.getElementById('skill2').value.trim(),
        document.getElementById('skill3').value.trim(),
        document.getElementById('skill4').value.trim(),
        document.getElementById('skill5').value.trim()
    ].filter(function (skill) { return skill !== ''; }); // Filter out empty skills
    var resumeData = {
        name: document.getElementById('name').value.trim(),
        age: document.getElementById('age').value.trim(),
        city: document.getElementById('city').value.trim(),
        country: document.getElementById('country').value.trim(),
        occupation: document.getElementById('occupation').value.trim(),
        degree: document.getElementById('degree').value.trim(),
        from: document.getElementById('from').value.trim(),
        to: document.getElementById('to').value.trim(),
        skills: skills, // Include only non-empty skills
        experience: document.getElementById('experience').value.trim(),
        email: document.getElementById('email').value.trim(),
        github: document.getElementById('github').value.trim(),
        linkedin: document.getElementById('linkedin').value.trim(),
        id: generateRandomId()
    };
    // Save the resume data in localStorage
    localStorage.setItem('resume', JSON.stringify(resumeData));
    // Show alert and update the preview immediately
    alert('Resume saved successfully!');
    // Render the updated resume immediately after saving
    display(resumeData);
}
// Optional: Load and display saved resume data on page load
document.addEventListener("DOMContentLoaded", function () {
    var savedData = JSON.parse(localStorage.getItem('resume') || '{}');
    display(savedData);
});
