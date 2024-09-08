document.addEventListener("DOMContentLoaded", () => {
    const resumeData = JSON.parse(localStorage.getItem('resume') || '{}');
    const resumeContainer = document.querySelector('.resume-container') as HTMLDivElement;
    if (resumeData) {
        displayResume(resumeData);
    }

    if (Object.keys(resumeData).length) {
        displayResume(resumeData);
        resumeContainer.style.display = 'block'; // Show container when there is data
    } else {
        resumeContainer.style.display = 'none'; // Hide container when no data
    }
});

function displayResume(data: any) {
    const resumeDisplay = document.getElementById('resume-display');

    if (resumeDisplay && Object.keys(data).length) {
        resumeDisplay.innerHTML = `
        <h1>${data.name}</h1>
        
        <div class="section personal-info">
          <h2>Personal Information</h2>
          <p><strong>Age:</strong> ${data.age}</p>
          <p><strong>City:</strong> ${data.city}, ${data.country}</p>
          <p><strong>Occupation:</strong> ${data.occupation}</p>
        </div>
  
        <div class="section education">
          <h2>Education</h2>
          <ul class="education-list">
            <li><strong>${data.degree}</strong> (${data.from} - ${data.to})</li>
          </ul>
        </div>
  
        <div class="section skills">
          <h2>Skills</h2>
          <ul class="skills-list">
            ${data.skills.map((skill: string) => `<li>${skill}</li>`).join('')}
          </ul>
        </div>
  
        <div class="section experience">
          <h2>Experience</h2>
          <p>${data.experience}</p>
        </div>
  
        <div class="section contact">
          <h2>Contact</h2>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>GitHub:</strong> <a href="${data.github}" target="_blank">${data.github}</a></p>
          <p><strong>LinkedIn:</strong> <a href="${data.linkedin}" target="_blank">${data.linkedin}</a></p>
        </div>
      `;
    }
}

