document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('resume-form');
    const generateButton = document.getElementById('generate-button');
    const resumeOutput = document.getElementById('resume-output');

    generateButton.addEventListener('click', function () {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const eduDegree = document.getElementById('edu-degree').value;
        const eduCollege = document.getElementById('edu-college').value;
        const eduYear = document.getElementById('edu-year').value;
        const eduCgpa = document.getElementById('cgpa').value;
        const expPosition = document.getElementById('exp-position').value;
        const expCompany = document.getElementById('exp-company').value;
        const expYear = document.getElementById('exp-year').value;

        // Generate the resume HTML
        const resumeHTML = `
            <h2>${name}</h2>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <h2>Education</h2>
            <p>Degree: ${eduDegree}</p>
            <p>College: ${eduCollege}</p>
            <p>Year: ${eduYear}</p>
            <p>Cgpa: ${eduCgpa}</p>
            <h2>Experience</h2>
            <p>Position: ${expPosition}</p>
            <p>Company: ${expCompany}</p>
            <p>Year: ${expYear}</p>
        `;

        // Display the generated resume
        resumeOutput.innerHTML = resumeHTML;
    });
});
