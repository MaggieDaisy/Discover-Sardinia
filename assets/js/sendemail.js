// Function borrowed from Course Project Walkthrough about Rosie - Putting it all together, Sending Emails Using EmailJS
function sendMail(responsiveForm) {
    emailjs
        .send("service_4f9lyhb", "sardinia", {
            from_name: responsiveForm.name.value,
            from_email: responsiveForm.email.value,
            message: responsiveForm.textarea.value,
        })
        .then(
            function (response) {
                console.log("Your email has been sent with success", response);
            },
            function (error) {
                console.log("Sending the email has failed", error);
            }
        );
    // Clear form from inputs after subbmision
    document.getElementById("responsiveForm").reset();

    //Prevents the page from refreshing when submiting form
    return false;
}
