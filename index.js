$(document).ready(function(){
  $(".fa-solid").click(function(){
      // Toggle the Bootstrap collapse on the navbar
      $("#navbarNav").collapse('toggle');
      
      // Ensure the open icon is always shown
      $(".open-icon").show();
  });
});
// for  hover effec 
$(document).ready(function () {
  // Hover effect on navbar links
  $('.nav-link').hover(
      function () {
          $(this).css('color', 'blue');
      },
      function () {
          $(this).css('color', ''); // Reset color when hover ends
      }
  );
});
// section check
$(window).on('scroll', function () {
  let scrollPosition = $(window).scrollTop();

  // Check each section
  $('section').each(function () {
      let sectionTop = $(this).offset().top - 100; // Adjust offset as needed
      let sectionBottom = sectionTop + $(this).outerHeight();
      let sectionId = $(this).attr('id');

      if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          $('.nav-link').css('color', ''); // Reset all links
          $('.nav-link[href="#' + sectionId + '"]').css('color', 'blue');
      }
  });
});

// animating progression
$(document).ready(function () {
  // Hover effect on navbar links
  $('.nav-link').hover(
      function () {
          $(this).css('color', 'blue');
      },
      function () {
          $(this).css('color', ''); // reset color when not hovering
      }
  );

  // Scroll-based active link color
  $(window).on('scroll', function () {
      let scrollPosition = $(window).scrollTop();

      // Check each section
      $('section').each(function () {
          let sectionTop = $(this).offset().top - 100; // Adjust offset as needed
          let sectionBottom = sectionTop + $(this).outerHeight();
          let sectionId = $(this).attr('id');

          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
              $('.nav-link').css('color', ''); // reset all links
              $('.nav-link[href="#' + sectionId + '"]').css('color', 'blue');
          }
      });
  });

  // Create an intersection observer to trigger when the #skills section comes into view
  const skillsSection = document.querySelector('#skills');
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Only animate once when the skills section enters the viewport
              $('.progress-bar').each(function () {
                  let progressValue = $(this).attr('aria-valuenow');
                  $(this).css('width', progressValue + '%');
              });

              // Stop observing once animation has triggered
              observer.unobserve(skillsSection);
          }
      });
  }, { threshold: 0.5 }); // Trigger when 50% of the skills section is visible

  // Start observing the #skills section
  observer.observe(skillsSection);
});




//For smooth scrolling
$('a[href*="#"]').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'linear');
});



  
const scriptURL = 'https://script.google.com/macros/s/AKfycbxxckb9TKkCYysyNOO-T3s0bLKcdHYUZza6bbWX9DaMKItcLVgvmUKePtkAVDHV_ERi/exec'
const form = document.forms['submit-to-google-sheet']
const msg= document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML ="Message sent successfully"
      setTimeout(function(){
        msg.innerHTML =""
      },3000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})