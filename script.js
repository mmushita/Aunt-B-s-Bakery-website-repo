document.addEventListener("DOMContentLoaded", function() {
    
    // --- Smooth Scrolling for Navigation Links ---
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerOffset = 120;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- Modal (Popup) Logic ---
    const modal = document.getElementById("orderModal");
    const openBtns = document.querySelectorAll(".open-modal-btn");
    const closeBtn = document.querySelector(".close-btn");

    // Open modal when any "Order" button is clicked
    openBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            modal.classList.add("active");
            document.body.style.overflow = "hidden"; // Prevents background scrolling
        });
    });

    // Close modal when the "X" is clicked
    closeBtn.addEventListener("click", function() {
        modal.classList.remove("active");
        document.body.style.overflow = "auto"; // Restores background scrolling
    });

    // Close modal when clicking outside the white box
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    });

});
