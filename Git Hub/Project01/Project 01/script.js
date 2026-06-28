// Listen for Contact Form submissions
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("event-form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Stop standard page refreshing
            
            const clientName = document.getElementById("name").value;
            const chosenService = document.getElementById("service").value;
            
            // Pop up an interactive sweet confirmation notification!
            alert(`✨ Sweet news, ${clientName}! Your inquiry for "${chosenService}" has been safely received. Our head event designer will email you tailored ideas within 24 hours! ✨`);
            
            contactForm.reset(); // Clear the form fields
        });
    }
});