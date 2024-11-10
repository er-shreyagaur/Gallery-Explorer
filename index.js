document.addEventListener("DOMContentLoaded", () => {
    const btnEl = document.getElementById("btn");
    const errorMessageEl = document.getElementById("errorMessage");
    const galleryEl = document.getElementById("gallery");
    const inputEl = document.getElementById("input");

    // Ensure the required elements are found
    if (!btnEl || !errorMessageEl || !inputEl || !galleryEl) {
        console.error("Error: One or more required elements not found!");
        return;
    }

    // Function to fetch images
    async function fetchImage() {
        const inputValue = parseInt(inputEl.value, 10);

        // Validate input value
        if (isNaN(inputValue) || inputValue < 1 || inputValue > 10) {
            errorMessageEl.style.display = "block";
            errorMessageEl.innerText = "Please enter a number between 1 and 10.";
            galleryEl.style.display = "none";
            return;
        }

        // Clear error message and reset UI
        errorMessageEl.style.display = "none";
        galleryEl.innerHTML = "";
        galleryEl.style.display = "block";
        btnEl.disabled = true;

        try {
            // Display loading indicator
            const loadingIndicator = `<img src="spinner.svg" alt="Loading..."/>`;
            galleryEl.innerHTML = loadingIndicator;

            // Generate a random page number for fetching random photos
            const page = Math.floor(Math.random() * 1000) + 1;

            // Fetch photos from Unsplash API
            const response = await fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${page}&client_id=wDAkDNu7bd5Gdc06NmApqamZv4-LRNmrlXpq_75eSeQ`);

            // Check if the response is ok
            if (!response.ok) {
                throw new Error(`API Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            // Validate and process the API data
            if (Array.isArray(data) && data.length > 0) {
                let imgs = "";
                data.forEach((pic) => {
                    // Ensure the required property exists before accessing it
                    if (pic.urls && pic.urls.small) {
                        imgs += `
                            <img src="${pic.urls.small}" alt="Image from Unsplash" class="gallery-img"/>
                        `;
                    }
                });

                // Display the fetched images
                galleryEl.innerHTML = imgs || `<p>No images found. Try again.</p>`;
            } else {
                throw new Error("Unexpected API response format or no images available.");
            }
        } catch (error) {
            // Handle any errors that occur during fetch
            console.error(error);
            errorMessageEl.style.display = "block";
            errorMessageEl.innerText = "An error occurred while fetching images. Please try again later.";
        } finally {
            // Re-enable the button
            btnEl.disabled = false;
        }
    }

    // Attach the click event listener to the button
    btnEl.addEventListener("click", fetchImage);
});


