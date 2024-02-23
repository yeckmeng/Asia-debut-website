var allTechnology = document.querySelectorAll('.alltechnology');

allTechnology.forEach(function (element) {
    element.addEventListener('mouseover', function () {
        // Hide all paragraphs initially
        var allHiddenText = document.querySelectorAll('.hidden-text');
        allHiddenText.forEach(function (textElement) {
            textElement.style.display = 'none';
        });

        // Get the data-target attribute value from the hovered logo
        var dataTarget = element.getAttribute('data-target');

        // Show the paragraph for the hovered logo
        var targetParagraph = document.querySelector(dataTarget);
        if (targetParagraph) {
            targetParagraph.style.display = 'block';
        }
    });
});
