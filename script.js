function calculateWaste() {
    const plastic = parseFloat(document.getElementById('plastic').value) || 0;
    const organic = parseFloat(document.getElementById('organic').value) || 0;

    const totalWaste = plastic + organic;

    document.getElementById('result').innerText = `Total Waste: ${totalWaste} kg`;
}

function showPollutionLevel() {
    const stateAQI = {
        "Delhi": "Severe (AQI: 450)",
        "Uttar Pradesh": "Moderate (AQI: 120)",
        "Maharashtra": "Good (AQI: 75)",
        "Karnataka": "Fair (AQI: 90)",
        "Tamil Nadu": "Moderate (AQI: 110)",
        "West Bengal": "Poor (AQI: 200)",
        "Rajasthan": "Fair (AQI: 95)",
        "Gujarat": "Good (AQI: 70)",
        "Kerala": "Good (AQI: 65)",
        "Punjab": "Severe (AQI: 400)",

    };

    const selectedState = document.getElementById('state').value;
    const pollutionLevelText = document.getElementById('pollution-text');
    const pollutionLevelDiv = document.getElementById('pollution-level');

    if (selectedState === "none") {
        pollutionLevelDiv.style.display = 'none'; 
        alert("Please select a state.");
        return;
    }

    const pollutionLevel = stateAQI[selectedState] || "Data not available for this state.";
    pollutionLevelText.textContent = `Pollution Level in ${selectedState}: ${pollutionLevel}`;
    pollutionLevelDiv.style.display = 'block';
}



document.addEventListener('DOMContentLoaded', () => { console.log("Recycle Sea Waste Page Loaded");
                                                     })
                                                     document.addEventListener("DOMContentLoaded", function () {
                                                         const fadeSections = document.querySelectorAll(".fade-section");

                                                         function fadeInOnScroll() {
                                                             fadeSections.forEach(section => {
                                                                 const sectionTop = section.getBoundingClientRect().top;
                                                                 const windowHeight = window.innerHeight;


                                                                 if (sectionTop < windowHeight - 100) {
                                                                     section.classList.add("fade-in"); 
                                                                 } else {
                                                                     section.classList.remove("fade-in"); 
                                                                 }
                                                             });
                                                         }

                                                         window.addEventListener("scroll", fadeInOnScroll);
                                                         fadeInOnScroll(); 
                                                     });



