document.addEventListener("DOMContentLoaded", function() {
    const plantTypesContent = document.getElementById("plant-types-content");
    const searchInput = document.getElementById("search-input");

    // Plant data array
    const plantData = [
        {
            name: "Rose",
            image: "rose.jpg",
            description: "Roses are beautiful flowering plants..."
        },
        {
            name: "Fern",
            image: "fern.jpg",
            description: "Ferns are non-flowering vascular plants..."
        },
        // Add more plant objects as needed
    ];

    // Function to create a plant card
    function createPlantCard(plant) {
        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("img");
        image.src = plant.image;
        image.alt = plant.name;

        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        const title = document.createElement("h3");
        title.textContent = plant.name;

        const description = document.createElement("p");
        description.textContent = plant.description;

        cardContent.appendChild(title);
        cardContent.appendChild(description);

        card.appendChild(image);
        card.appendChild(cardContent);

        // Add event listener for expanding/collapsing description
        card.addEventListener("click", function() {
            description.classList.toggle("expanded");
        });

        return card;
    }

    // Function to render plant cards based on search query
    function renderPlantCards(query) {
        plantTypesContent.innerHTML = ""; // Clear existing content
        const filteredPlants = plantData.filter(plant => plant.name.toLowerCase().includes(query.toLowerCase()));
        filteredPlants.forEach(function(plant) {
            const card = createPlantCard(plant);
            plantTypesContent.appendChild(card);
        });
    }

    // Initial rendering of plant cards
    renderPlantCards("");

    // Event listener for search input
    searchInput.addEventListener("input", function(event) {
        renderPlantCards(event.target.value);
    });

    // Function to fetch additional plant data from an external API
    async function fetchPlantData() {
        try {
            // Simulating API request with a delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            const data = [
                {
                    name: "Lily",
                    image: "lily.jpg",
                    description: "Lilies are beautiful and fragrant flowering plants..."
                },
                {
                    name: "Orchid",
                    image: "orchid.jpg",
                    description: "Orchids are exotic and diverse flowering plants..."
                }
                // Add more plant objects as needed
            ];
            // Process and add fetched data to plantData array
            data.forEach(function(plant) {
                plantData.push(plant);
            });
            // Re-render plant cards with updated data
            renderPlantCards(searchInput.value);
        } catch (error) {
            console.error("Error fetching plant data:", error);
        }
    }

    // Fetch additional plant data when the page loads
    fetchPlantData();
});
