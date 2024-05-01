document.addEventListener("DOMContentLoaded", function () {
    let urlParams = new URLSearchParams(window.location.search);
    // Retrieve registration data from the request
    var registrationData;

    var data = urlParams.get("data");
    console.log("Data:", data);
    try {
        registrationData = JSON.parse(data);
        console.log(registrationData);
    } catch (error) {
        console.error('Error parsing registration data:', error);
    }


    // Display the list of registered users (modify as needed)
    if (registrationData) {
        // console.log("hello");
        var userListContainer = document.querySelector('.container');
        // console.log("insode ");
        var userListHTML = '<ul>'

        userListHTML += `<li>Name : ${registrationData.name}</li>`;
        userListHTML += `<li>Email: ${registrationData.email}</li>`;
        userListHTML += `<li>Address: ${registrationData.address}</li>`;
        userListHTML += `<li>Gender: ${registrationData.gender}</li>`;
        userListHTML += `<li>City: ${registrationData.city}</li>`;
        userListHTML += `<li>Pincode: ${registrationData.pincode}</li>`;
        userListHTML += `<li>State: ${registrationData.state}</li>`;

        userListHTML += '</ul>';
        userListContainer.innerHTML += userListHTML;
    }
});