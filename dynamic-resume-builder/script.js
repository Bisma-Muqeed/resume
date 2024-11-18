// get refrences to the form and display
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
// form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // generate resume
    var resumeHTML = "\n    <h2><strong>Resume</strong></h2>\n    <h3>Personal Information</h3>\n    <p><strong>Name</strong>".concat(name, "</p>\n    <p><strong>Email</strong>").concat(email, "</p>\n    <p><strong>Phone</strong>").concat(phone, "</p>\n    \n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    \n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n    \n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>");
    //display generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The Resume Display Element is Missing");
    }
});
