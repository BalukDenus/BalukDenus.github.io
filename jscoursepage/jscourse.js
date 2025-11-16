document.addEventListener('DOMContentLoaded', () => {
    // Використовуємо селектор в межах унікальної секції для кращої ізоляції
    const courseSection = document.getElementById('course-player-section');
    if (courseSection) {
        const chapterHeaders = courseSection.querySelectorAll('.chapter-header');

        chapterHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const chapter = header.parentElement;
                chapter.classList.toggle('open');
            });
        });
    }
});

  let mybutton = document.getElementById("scrollToTopBtn");

  // Коли користувач прокручує сторінку на 200px від верху, показати кнопку
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // Коли користувач клікає на кнопку, прокрутити сторінку до верху
  mybutton.addEventListener('click', function() {
    // Використовуємо 'smooth' для плавної анімації прокрутки
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });