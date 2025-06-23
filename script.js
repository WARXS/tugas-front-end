document.addEventListener('DOMContentLoaded', function() {
    const profileLink = document.querySelector('nav ul li a[href="#profil"]');
    const grandProfileSection = document.getElementById('profil');

    // Function to add 'active' class when profile section is in view
    // Or when the profile link is clicked
    function toggleGoldEffect() {
        // Check if the current hash is #profil OR if it's the very first load and the section is visible
        if (window.location.hash === '#profil' || isInViewport(grandProfileSection)) {
            grandProfileSection.classList.add('active');
        } else {
            grandProfileSection.classList.remove('active');
        }
    }

    // Helper function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Add event listener for clicks on the profile navigation link
    if (profileLink) {
        profileLink.addEventListener('click', function(event) {
            // Remove active class from other sections if needed (not implemented here)
            // This will ensure the animation restarts or is visible when navigated to
            grandProfileSection.classList.remove('active'); // Remove first to allow re-animation
            setTimeout(() => { // Add a small delay for re-animation to look smoother
                grandProfileSection.classList.add('active');
            }, 50);
        });
    }

    // Add event listener for scroll to activate the effect when scrolling to #profil
    window.addEventListener('scroll', toggleGoldEffect);

    // Initial check when the page loads, in case #profil is in view or directly linked
    toggleGoldEffect();
});