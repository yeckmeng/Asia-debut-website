document.addEventListener('DOMContentLoaded', function () {
    // Get all FAQ questions
    var faqQuestions = document.querySelectorAll('.faq-question');

    // Add click event listener to each FAQ question
    faqQuestions.forEach(function (question) {
        question.addEventListener('click', function () {
            faqQuestions.forEach(function(quest) {
                var dataTargetList = document.querySelector(quest.getAttribute('data-target'));
                if (quest !== question && dataTargetList.classList.contains('show')) {
                    dataTargetList.classList.remove('show');
                    quest.classList.add('collapsed')
                }
              });

     
        });
    });
});

