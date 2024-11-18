// get refrences to the form and display

const form =document.getElementById("resume-form") as HTMLFormElement


const resumeDisplayElement =document.getElementById("resume-display") as HTMLDivElement

// form submission
form.addEventListener("submit", (event:Event) => {
    event.preventDefault(); 
    
    // input values
    const name =(document.getElementById("name") as HTMLInputElement).value
    
    const email =(document.getElementById("email") as HTMLInputElement).value
    
    const contact =(document.getElementById("contact") as HTMLInputElement).value
    
    const education =(document.getElementById("education") as HTMLInputElement).value
    
    const experience =(document.getElementById("experience") as HTMLInputElement).value
    
    const skills =(document.getElementById("skills") as HTMLInputElement).value


    // generate resume
    const resumeHTML = `
    <h2><strong>Resume</strong></h2>
    <h3>Personal Information</h3>
    <p><strong>Name</strong>  ${ name}</p>
    <p><strong>Email</strong>  ${ email}</p>
    <p><strong>Contact</strong>  ${ contact}</p>
    
    <h3>Education</h3>
    <p>${education}</p>
    
    <h3>Experience</h3>
    <p>${experience}</p>
    
    <h3>Skills</h3>
    <p>${skills}</p>`

//display generated resume
 if(resumeDisplayElement){
    resumeDisplayElement.innerHTML= resumeHTML;
 }
else{
    console.error("The Resume Display Element is Missing");
}

});