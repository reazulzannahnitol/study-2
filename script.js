document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
  





  function toggleAnswer(element) {
    const answer = element.querySelector('.faq-answer');
    const iconPlus = element.querySelector('.faq-toggle i.fas.fa-plus');
    const iconMinus = element.querySelector('.faq-toggle i.fas.fa-minus');
    const iconChevron = element.querySelector('.faq-icon:last-child');

    // Toggle display of the answer
    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block"; // Show answer
        // Change icon from plus to minus
        if (iconPlus) {
            iconPlus.classList.remove('fa-plus');
            iconPlus.classList.add('fa-minus');
        }
        // Rotate the chevron icon
        iconChevron.style.transform = "rotate(180deg)";
    } else {
        answer.style.display = "none"; // Hide answer
        // Change icon from minus to plus
        if (iconMinus) {
            iconMinus.classList.remove('fa-minus');
            iconMinus.classList.add('fa-plus');
        }
        // Reset the chevron icon rotation
        iconChevron.style.transform = "rotate(0deg)";
    }
}









