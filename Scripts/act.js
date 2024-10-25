document.addEventListener("DOMContentLoaded", ()=> {

    // Get references to important elements in the HTML
    const itemsDrop = document.getElementById("items"); // Dropdown for activities
    const actDes = document.getElementById("activity-description"); // Area for activity details
    const purchaseForm = document.getElementById("purchase-form"); // Purchase form
    const confirmationMessage = document.getElementById("confirmation-message"); // Confirmation message area
    const cats = document.getElementById("cats");

    // Function that runs when a category is selected
    function onCatChange(e) {
        itemsDrop.innerHTML = "<option value=''>Select an Activity</option>"; // Reset activity dropdown
        const value = e.target.value; // Get the selected category

        if (!value) { // If no category is selected, exit the function
            return;
        }

        // Filter the activities based on the selected category
        const filteredActivities = activities.filter(activity => activity.category === value);

        // Add each filtered activity to the activity dropdown
        filteredActivities.forEach(activity => {
            const option = document.createElement("option"); // Create a new option element
            option.innerText = activity.name; // Set the text to the activity name
            option.value = activity.id; // Set the value to the activity ID
            itemsDrop.appendChild(option); // Add the option to the dropdown
        });
    };

    // Function that runs when an activity is selected
    function onActChange(e) {
        const actId = e.target.value; // Get the selected activity ID

        if (!actId) { // If no activity is selected, show the default message
            actDes.innerText = "Please select an activity to see the details.";
            purchaseForm.style.display = "none";
            return;
        }

        // Find the selected activity in the activities array
        const selectedActivity = activities.find(activity => activity.id === actId);
        if (selectedActivity) {
            // Display the details of the selected activity
            actDes.innerHTML = `
            <strong>${selectedActivity.name}</strong><br>
            <em>Location:</em> ${selectedActivity.location}<br>
            <em>Price:</em> $${selectedActivity.price.toFixed(2)}<br>
            <p>${selectedActivity.description}</p>
        `;
        }

        // Show the purchase form if the activity price is more than $0.00
        if (selectedActivity.price > 0) {
            purchaseForm.style.display = "block"; // Show the form
        } else {
            purchaseForm.style.display = "none"; // Hide the form
        }
    };

    // Handle the submission of the purchase form
    document.getElementById("ticket-form").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting normally

        // Get the values from the form fields
        const numTickets = document.getElementById("num-tickets").value; // Number of tickets
        const creditCard = document.getElementById("credit-card").value; // Credit card number (should be validated in a real app)
        const email = document.getElementById("email").value; // User's email
        const selectedActivity = activities.find(activity => activity.id === itemsDrop.value); // Get the selected activity

        if (selectedActivity) {
            // Calculate the total amount for the tickets
            const totalAmount = (selectedActivity.price * numTickets).toFixed(2);
            // Display the confirmation message
            confirmationMessage.innerText = `Your credit card has been charged $${totalAmount} for ${numTickets} tickets to ${selectedActivity.name}. A confirmation email has been sent to ${email}.`;
        }
    });

    // Add event listeners to the dropdowns
     // Reference to category dropdown
    cats.addEventListener("change", onCatChange); // Run onCatChange when the category changes
    itemsDrop.addEventListener("change", onActChange); // Run onActChange when the activity changes
});