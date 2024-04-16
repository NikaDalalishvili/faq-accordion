const buttons = document.querySelectorAll('.faq-btn');

buttons.forEach((button) => {
    button.addEventListener('click', function () {
        const faqGroup = this.parentElement;
        const faqAnswer = faqGroup.querySelector('.faq-answer');
        const faqAnswers = document.querySelectorAll('.faq-answer');
        const btnIcon = this.querySelector('.faq-icon');
        const btnIcons = document.querySelectorAll('.faq-icon');
        console.log(btnIcons);

        // Close all accordion items
        faqAnswers.forEach((content) => {
            if (content !== faqAnswer) {
                content.classList.remove('active');
            }
        });

        btnIcons.forEach((icon) => {
            icon.src = './images/icon-plus.svg';
        });

        // Toggle the clicked accordion item
        faqAnswer.classList.toggle('active');

        if (faqAnswer.classList.contains('active')) {
            btnIcon.src = './images/icon-minus.svg';

        } else {
            btnIcon.src = './images/icon-plus.svg';
        }
    })
})