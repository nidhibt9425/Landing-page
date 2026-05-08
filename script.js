document.getElementById('track-btn').addEventListener('click', function() {
    // Basic USA check using timezone strings
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    // Check if the timezone belongs to common US zones
    const isUSA = tz.includes("America/New_York") || 
                  tz.includes("America/Chicago") || 
                  tz.includes("America/Denver") || 
                  tz.includes("America/Los_Angeles") ||
                  tz.includes("America/Phoenix");

    if (isUSA) {
        console.log("USA User Detected. Redirecting to tracking...");
        // Replace with your actual tracking/affiliate link
        window.location.href = "https://your-tracking-link.com/usa-special?utm_source=web&utm_region=usa";
    } else {
        alert("This specific offer is only available for residents in the USA.");
    }
});

// Handle County Selection
document.getElementById('county-selector').addEventListener('change', function(e) {
    if(e.target.value) {
        alert("Welcome! Browsing menu for: " + e.target.options[e.target.selectedIndex].text);
        // Here you could filter menu items based on the county
    }
});
