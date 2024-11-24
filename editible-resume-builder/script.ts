// Get references to the form and display elements
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;

// Function to initialize dynamic updates
function initializeDynamicResume() {
   
    if (!form || !resumeDisplayElement) {
        console.error("Form or Resume Display Element is missing.");
        return;
    }

    
    const inputs = form.querySelectorAll("input, textarea");

    inputs.forEach((input) => {
        const field = input.getAttribute("id"); 
        if (field) {
            input.addEventListener("input", () => {
                const targetElement = resumeDisplayElement.querySelector(`[data-field="${field}"]`);
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
    const initialHTML = `
    <h2><strong>Editable Resume</strong></h2>
    <h3>Personal Information</h3>
    <p><strong>Name</strong>: <span data-field="name"></span></p>
    <p><strong>Email</strong>: <span data-field="email"></span></p>
    <p><strong>Contact</strong>: <span data-field="contact"></span></p>
    
    <h3>Education</h3>
    <p data-field="education"></p>
    
    <h3>Experience</h3>
    <p data-field="experience"></p>
    
    <h3>Skills</h3>
    <p data-field="skills"></p>`;

   
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = initialHTML;
    }
}

// Initialize dynamic updates
initializeDynamicResume();

