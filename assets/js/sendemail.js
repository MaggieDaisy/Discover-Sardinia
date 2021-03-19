// Credit - code inspiration borrowed from Course Project Walkthrough about Rosie 
//- Putting it all together, Sending Emails Using EmailJS

// Create function send email, add send method which contains three arguments
// (service ID, template ID, and an object with four parameters which matches template EmailJS)
function sendMail(responsiveForm) {
    emailjs
        .send("gmail", "sardinia", {
            from_name: responsiveForm.name.value,
            from_email: responsiveForm.email.value,
            message: responsiveForm.textarea.value,
            newsletter: responsiveForm.newsletter.value,
        })
        // Add then method and insert two functions, first will return a response that sending email was a success, 
        // second instead shows an error
        .then(
            function (success) {
                alert("Thank you for contacting us, your email has been sent with success", success);
            },
            function (error) {
                alert("We are sorry, but sending the email has failed", error);
            }
        );
    // Add event listener to clear form from inputs after subbmision
    document.getElementById("responsiveForm").reset();

    //Add return statement which prevents the page from refreshing when submitting form
    return false;
}