function initializeFormValidation(){
    const form=document.getElementById("registration-form");
    const feedbackDiv=document.getElementById("form-feedback");

    form.addEventListener('submit', (event)=>{
        event.preventDefault ();  // Prevents the form from submitting
    
//retrieve and trim
    const username=document.getElementById("username").value.trim();
    const email=document.getElementById("email").value.trim();
    const password=document.getElementById("password").value.trim();

//initialize validation variables
    let isValid=true;
    let message=[ ];

    if (username.length<3){
        isValid=false;
        message.push("User Name must be greater than 2 characters.") ;
     }

     if (!email.includes ("@")|| !email.includes (".")) {
        isValid=false;
        message.push("Please enter a valid email adress.")
     }

     if (password.length<8) {
        isValid=false;
        message.push("Please enter a password atleast 8 characters long.")
     }

     feedbackDiv.style.display="block";

     if (isValid){
        feedbackDiv.textContent="Registration Successful.";
        feedbackDiv.style.color="#28a745";

     }else{
        feedbackDiv.innerHTML = message.join ("<br>");
        feedbackDiv.style.color="#dc3545";
     }

    });


}
document.addEventListener("DOMContentLoaded", initializeFormValidation);


