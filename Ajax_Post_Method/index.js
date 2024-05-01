document.addEventListener("DOMContentLoaded", function () {
    let submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function () {
        let isValid = true;

        // Validations for the form fields
        let password = document.getElementById('passwordInput').value;
        if (password.length < 4) {
            isValid = false;
            alert("Password should be at least 4 characters");
        }

        let email = document.getElementById('emailInput').value;
        if (!email.includes('@')) {
            isValid = false;
            alert("Please enter a valid email address");
        }

        if (isValid) {
            let formData = {
                name: document.getElementById('nameInput').value,
                email: document.getElementById('emailInput').value,
                password: document.getElementById('passwordInput').value,
                address: document.getElementById('address').value,
                gender: document.querySelector('input[name="gender"]:checked').value,
                city: document.getElementById('city').value,
                pincode: document.getElementById('PinCodeInput').value,
                state: document.getElementById('state').value,
            };
            console.log(formData);
            
            // Assuming you're using jQuery for the AJAX request
            $.ajax({
                type: 'POST',
                url: 'https://jsonplaceholder.typicode.com/users',
                data: JSON.stringify(formData),
                contentType: 'application/json',
                success: function (response) {
                    // Encode the JSON data and redirect to the new page
                    let encodedData = encodeURIComponent(JSON.stringify(response));
                    window.location.href = 'users.html?data=' + encodeURIComponent(JSON.stringify(response));
                },
                error: function (error) {
                    console.log('Error:', error);
                }
            });
        }
    });
});
