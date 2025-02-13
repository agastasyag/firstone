// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Fade-in effect for sections
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // Flashcards interactive flip effect
  const flashcards = document.querySelectorAll('.flashcard');
  flashcards.forEach(card => {
    card.addEventListener('click', function() {
      card.classList.toggle('flipped');
    });
  });
});
