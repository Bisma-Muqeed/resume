// Get references to the form and display elements
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
// Function to initialize dynamic updates
function initializeDynamicResume() {
    if (!form || !resumeDisplayElement) {
        console.error("Form or Resume Display Element is missing.");
        return;
    }
    var inputs = form.querySelectorAll("input, textarea");
    inputs.forEach(function (input) {
        var field = input.getAttribute("id");
        if (field) {
            input.addEventListener("input", function () {
                var targetElement = resumeDisplayElement.querySelector("[data-field=\"".concat(field, "\"]"));
                if (targetElement) {
                    if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) {
                        targetElement.textContent = input.value.trim();
                    }
                }
            });
        }
    });
    generateInitialResume();
}
function generateInitialResume() {
    var initialHTML = "\n    <h2><strong>Editable Resume</strong></h2>\n    <h3>Personal Information</h3>\n    <p><strong>Name</strong>: <span data-field=\"name\"></span></p>\n    <p><strong>Email</strong>: <span data-field=\"email\"></span></p>\n    <p><strong>Contact</strong>: <span data-field=\"contact\"></span></p>\n    \n    <h3>Education</h3>\n    <p data-field=\"education\"></p>\n    \n    <h3>Experience</h3>\n    <p data-field=\"experience\"></p>\n    \n    <h3>Skills</h3>\n    <p data-field=\"skills\"></p>";
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = initialHTML;
    }
}
// Initialize dynamic updates
initializeDynamicResume();
