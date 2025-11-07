// JavaScript for future interactivity
// You can add functionality here later

// Example: Smooth scroll for "Read More" links
document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert('This would take you to the full article!');
        // You can add actual navigation or modal functionality here
    });
});

// Example: Log when page is loaded
console.log('Blog loaded successfully!');