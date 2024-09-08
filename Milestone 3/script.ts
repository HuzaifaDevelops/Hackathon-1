// Function to display the resume


document.getElementById('previewBtn')?.addEventListener('click', previewResume);

function previewResume() {
    const resumeData = JSON.parse(localStorage.getItem('resume') || '{}');

    // Create a new window and pass the resume data
    const previewWindow = window.open('', '_blank', 'width=800,height=900');

    if (previewWindow) {
        // Prepare the HTML content for the new window
        previewWindow.document.write(`
        <html>
            <head>
                <title>Resume Preview</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 20px;
                    }
                    .section {
                        margin-bottom: 20px;
                    }
                    h1 {
                        font-size: 24px;
                        color: #333;
                    }
                    h2 {
                        font-size: 20px;
                        margin-bottom: 10px;
                        color: #666;
                    }
                    p {
                        font-size: 16px;
                        margin-bottom: 8px;
                    }
                    ul {
                        list-style: none;
                        padding: 0;
                    }
                    ul li {
                        background: #f0f0f0;
                        padding: 8px;
                        margin-bottom: 5px;
                        border-radius: 5px;
                    }
                </style>
            </head>
            <body>
                <div id="resume-display">
                    <h1>${resumeData.name}</h1>
                    
                    <div class="section personal-info">
                        <h2>Personal Information</h2>
                        <p><strong>Age:</strong> ${resumeData.age}</p>
                        <p><strong>City:</strong> ${resumeData.city}, ${resumeData.country}</p>
                        <p><strong>Occupation:</strong> ${resumeData.occupation}</p>
                    </div>
              
                    <div class="section education">
                        <h2>Education</h2>
                        <ul class="education-list">
                            <li><strong>${resumeData.degree}</strong> (${resumeData.from} - ${resumeData.to})</li>
                        </ul>
                    </div>
              
                    <div class="section skills">
                        <h2>Skills</h2>
                        <ul class="skills-list">
                            ${resumeData.skills.map((skill: string) => `<li>${skill}</li>`).join('')}
                        </ul>
                    </div>
              
                    <div class="section experience">
                        <h2>Experience</h2>
                        <p>${resumeData.experience}</p>
                    </div>
              
                    <div class="section contact">
                        <h2>Contact</h2>
                        <p><strong>Email:</strong> ${resumeData.email}</p>
                        <p><strong>GitHub:</strong> <a href="${resumeData.github}" target="_blank">${resumeData.github}</a></p>
                        <p><strong>LinkedIn:</strong> <a href="${resumeData.linkedin}" target="_blank">${resumeData.linkedin}</a></p>
                    </div>
                </div>
            </body>
        </html>
        `);

        previewWindow.document.close();  // Close the document writing process
    }
}


document.getElementById('previewBtn')?.addEventListener('click', previewResume);
function generateRandomId() {
    return 'id-' + Math.random().toString(36).substr(2, 9); // Generates a random ID like 'id-xyz123abc'
}


function display(data: any) {

    const resumeDisplay = document.getElementById('resume-display');

    if (resumeDisplay && Object.keys(data).length) {
        resumeDisplay.innerHTML = `
        <h1>${data.name || 'N/A'}</h1>
        
        <div class="section personal-info">
          <h2>Personal Information</h2>
          <p><strong>Age:</strong> ${data.age || 'N/A'}</p>
          <p><strong>City:</strong> ${data.city || 'N/A'}, ${data.country || 'N/A'}</p>
          <p><strong>Occupation:</strong> ${data.occupation || 'N/A'}</p>
        </div>
  
        <div class="section education">
          <h2>Education</h2>
          <ul class="education-list">
            <li><strong>${data.degree || 'N/A'}</strong> (${data.from || 'N/A'} - ${data.to || 'N/A'})</li>
          </ul>
        </div>
  
        <div class="section skills">
          <h2>Skills</h2>
          <ul class="skills-list">
            ${data.skills.length > 0 ? data.skills.map((skill: string) => `<li>${skill}</li>`).join('') : '<li>No skills provided</li>'}
          </ul>
        </div>
  
        <div class="section experience">
          <h2>Experience</h2>
          <p>${data.experience || 'N/A'}</p>
        </div>
  
        <div class="section contact">
          <h2>Contact</h2>
          <p><strong>Email:</strong> ${data.email || 'N/A'}</p>
          <p><strong>GitHub:</strong> ${data.github ? `<a href="${data.github}" target="_blank">${data.github}</a>` : 'N/A'}</p>
          <p><strong>LinkedIn:</strong> ${data.linkedin ? `<a href="${data.linkedin}" target="_blank">${data.linkedin}</a>` : 'N/A'}</p>
        </div>
      `;
    } else {
        resumeDisplay.innerHTML = '<p>No resume data available.</p>'; // In case of no data
    }
}

// Event listener for the Save button
document.getElementById('saveBtn')?.addEventListener('click', saveResume);

// Function to save the resume
function saveResume() {
    const skills = [
        (document.getElementById('skill1') as HTMLInputElement).value.trim(),
        (document.getElementById('skill2') as HTMLInputElement).value.trim(),
        (document.getElementById('skill3') as HTMLInputElement).value.trim(),
        (document.getElementById('skill4') as HTMLInputElement).value.trim(),
        (document.getElementById('skill5') as HTMLInputElement).value.trim()
    ].filter(skill => skill !== ''); // Filter out empty skills

    const resumeData = {
        name: (document.getElementById('name') as HTMLInputElement).value.trim(),
        age: (document.getElementById('age') as HTMLInputElement).value.trim(),
        city: (document.getElementById('city') as HTMLInputElement).value.trim(),
        country: (document.getElementById('country') as HTMLInputElement).value.trim(),
        occupation: (document.getElementById('occupation') as HTMLInputElement).value.trim(),
        degree: (document.getElementById('degree') as HTMLInputElement).value.trim(),
        from: (document.getElementById('from') as HTMLInputElement).value.trim(),
        to: (document.getElementById('to') as HTMLInputElement).value.trim(),
        skills: skills, // Include only non-empty skills
        experience: (document.getElementById('experience') as HTMLTextAreaElement).value.trim(),
        email: (document.getElementById('email') as HTMLInputElement).value.trim(),
        github: (document.getElementById('github') as HTMLInputElement).value.trim(),
        linkedin: (document.getElementById('linkedin') as HTMLInputElement).value.trim(),
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
document.addEventListener("DOMContentLoaded", () => {
    const savedData = JSON.parse(localStorage.getItem('resume') || '{}');
    display(savedData);
});
