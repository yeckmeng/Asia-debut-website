document.addEventListener('DOMContentLoaded', function () {
    // Get all FAQ questions
    var faqQuestions = document.querySelectorAll('.faq-question');

    // Add click event listener to each FAQ question
    faqQuestions.forEach(function (question) {
        question.addEventListener('click', function () {
            // Toggle the 'expanded' class on the clicked FAQ question
            this.classList.toggle('expanded');

            // Get the toggle icon within the clicked FAQ question
            var toggleIcon = this.querySelector('.toggle-icon');

            // Toggle the text of the toggle icon between '+' and '-'
            toggleIcon.textContent = (toggleIcon.textContent === '+') ? '-' : '+';
        });
    });
});
