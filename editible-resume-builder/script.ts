const form = document .getElementById('resume-form') as HTMLFormElement;

const resumeDisplayElement = document .getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit',(event :Event) =>  {
    event?.preventDefault();


    // Collect input values
    const name =(document.getElementById('name') as HTMLInputElement).value
    const email =(document.getElementById('email') as HTMLInputElement).value
    const contact =(document.getElementById('contact') as HTMLInputElement).value
    const education =(document.getElementById('education') as HTMLInputElement).value
    const experience =(document.getElementById('experience') as HTMLInputElement).value
    const skills =(document.getElementById('skills') as HTMLInputElement).value




    // Generate resume
    const resumeHTML = `
    <h2><strong>Resume</strong></h2>
    <h3>Personal Information</h3>
    <p><strong>Name</strong><span contenteditable = "true">${name}</span></p>
    <p><strong>Email</strong><span contenteditable = "true">${email}</span></p>
    <p><strong>Contact</strong><span contenteditable = "true">${contact}</span></p>


    <h3>Education</h3>
    <p><span contenteditable = "true">${education}</span></p>

    <h3>Experience</h3>
    <p><span contenteditable = "true">${experience}</span></p>


    <h3>Skills</h3>
    <p><span contenteditable = "true">${skills}</span></p>
    `;
    
    // Display the generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else{
        console.error(`The resume display element is missing.`)
    }
    

})
