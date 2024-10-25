// Wait until the DOM content is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", ()=> {
    // Get references to the dropdown, details section, and image elements
    const hikeDropDown = document.getElementById("hikes");
    const hikeDetails = document.getElementById("hike-details");
    const hikeDescription = document.getElementById("hike-description");
    const hikeImage = document.getElementById("hike-image");
    const trailMap = document.getElementById("trail-map");

    // Populate the dropdown with hike options
    hikes.forEach(hike => {
        // Create a new option element for each hike
        const option = document.createElement("option");
        option.value = hike.id; // Set the value to the hike's ID
        option.textContent = hike.name; // Set the displayed text to the hike's name
        hikeDropDown.appendChild(option); // Add the option to the dropdown
    });

    // Add an event listener to handle changes in the dropdown selection
    hikeDropDown.addEventListener("change", ()=> {
        // Find the selected hike based on the dropdown's value
        const selectedHike = hikes.find(hike => hike.id === hikeDropDown.value);

        // If a valid hike is selected, display its details
        if (selectedHike) {
            hikeDescription.textContent = selectedHike.description; // Update description
            hikeImage.src = selectedHike.scenicImage; // Set the scenic image
            trailMap.src = selectedHike.trailMapImage; // Set the trail map image
            hikeDetails.style.display = "block"; // Make the details section visible
        } else {
            // If no valid hike is selected, hide the details section
            hikeDetails.style.display = "none";
        }
    });
});
