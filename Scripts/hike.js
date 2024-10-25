document.addEventListener("DOMContentLoaded", function() {
    const hikeDropDown = document.getElementById("hikes");
    const hikeDetails = document.getElementById("hike-details");
    const hikeDescription = document.getElementById("hike-description");
    const hikeImage = document.getElementById("hike-image");
    const trailMap = document.getElementById("trail-map");



    hikes.forEach(hike => {
        const option = document.createElement("option")
        option.value = hike.id;
        option.textContent = hike.name;
        hikeDropDown.appendChild(option)
    });

    hikeDropDown.addEventListener("change", function() {
        const selectedHike = hikes.find(hike => hike.id === hikeDropDown.value);

        if (selectedHike) {
            hikeDescription.textContent = selectedHike.description;
            hikeImage.src = selectedHike.scenicImage;
            trailMap.src = selectedHike.trailMapImage;
            hikeDetails.style.display = "block"
        } else {
            hikeDetails.style.display = "none"
        }
    })

})

