function sendMail(responsiveForm) {
emailjs.send("service_4f9lyhb", "sardinia", {
    "from_name": responsiveForm.name.value,
    "from_email": responsiveForm.email.value,
    "message": responsiveForm.textarea.value
})

.then (
    function(response) {
console.log("SUCCESS", response);
    },
    function(error) {
        console.log("FAILED", error);
    });
return false;
}