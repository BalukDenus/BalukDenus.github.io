document.addEventListener('DOMContentLoaded', () => {
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

  mybutton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

    document.addEventListener('DOMContentLoaded', function() {
    const mybutton = document.getElementById("scrollToTopBtn");

    if (mybutton) {

        mybutton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    function scrollFunction() {

        if (mybutton) { 
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }
    }

    window.onscroll = scrollFunction;



    const modal = document.getElementById('instructorModal');
    const openBtn = document.getElementById('openInstructorModal'); 

    if (modal && openBtn) {
        
        const closeBtn = document.querySelector('.close-btn');
        const validateBtn = document.getElementById('validateIdeaBtn');
        const validationResultDiv = document.getElementById('validationResult');
        const courseIdeaInput = document.getElementById('courseIdea');
        const resumeUploadInput = document.getElementById('resumeUpload');
        const fileNameDisplay = document.getElementById('fileNameDisplay');
        const instructorForm = document.getElementById('instructorForm');

        openBtn.onclick = function(e) {
            e.preventDefault(); 
            modal.style.display = 'block';
        }

        closeBtn.onclick = function() {
            modal.style.display = 'none';
        }

        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        }
        

        validateBtn.onclick = function() {
            const idea = courseIdeaInput.value.trim().toLowerCase();
            validationResultDiv.className = 'validation-result';
            validationResultDiv.innerHTML = 'Analyzing...';

            setTimeout(() => {
                if (idea.includes('ai') || idea.includes('javascript') || idea.includes('marketing')) {
                    validationResultDiv.className = 'validation-result result-warning';
                    validationResultDiv.innerHTML = `
                        ✅ <strong>High Demand:</strong> This topic has high demand among our users.<br>
                        ⚠️ <strong>Medium Competition:</strong> 5 similar courses exist. Focus on a niche subtopic.<br>
                        💰 <strong>Suggested Price:</strong> $29 - $59.
                    `;
                } else if (idea.length > 5) {
                    validationResultDiv.className = 'validation-result result-success';
                    validationResultDiv.innerHTML = `
                        ✅ <strong>Good Potential:</strong> Demand is solid, and competition is low.<br>
                        💰 <strong>Suggested Price:</strong> $19 - $39.
                    `;
                } else {
                    validationResultDiv.className = 'validation-result';
                    validationResultDiv.innerHTML = `
                        ❌ Please provide a more detailed course idea to run the validator.
                    `;
                }
            }, 1500);
        }


        resumeUploadInput.addEventListener('change', function() {
            fileNameDisplay.textContent = this.files.length > 0 ? this.files[0].name : 'No file selected.';
        });

        instructorForm.onsubmit = function(event) {
            event.preventDefault();
            alert("Thank you! Your application for the course '" + courseIdeaInput.value + "' is under review. We will contact you within 5-7 business days.");
            
            // Скидання
            instructorForm.reset();
            fileNameDisplay.textContent = 'No file selected.';
            validationResultDiv.className = 'validation-result';
            validationResultDiv.innerHTML = '';
            modal.style.display = 'none';
        }
    }
});