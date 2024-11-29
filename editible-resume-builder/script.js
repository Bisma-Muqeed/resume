var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate resume
    var resumeHTML = "\n    <h2><strong>Resume</strong></h2>\n    <h3>Personal Information</h3>\n    <p><strong>Name</strong><span contenteditable = \"true\">".concat(name, "</span></p>\n    <p><strong>Email</strong><span contenteditable = \"true\">").concat(email, "</span></p>\n    <p><strong>Contact</strong><span contenteditable = \"true\">").concat(contact, "</span></p>\n\n\n    <h3>Education</h3>\n    <p><span contenteditable = \"true\">").concat(education, "</span></p>\n\n    <h3>Experience</h3>\n    <p><span contenteditable = \"true\">").concat(experience, "</span></p>\n\n\n    <h3>Skills</h3>\n    <p><span contenteditable = \"true\">").concat(skills, "</span></p>\n    ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing.");
    }
});
