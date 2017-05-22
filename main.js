function page() {
  var windowWidth = $(window).width();
  $('.js-nav-link').off('click').removeClass('link-selected js-selected');
  $('.js-section').show();
  $('.js-welcome').addClass('js-selected');

  // Change selected navbar item on touch
  if (windowWidth < 1100) {
    $('.js-about').on('click', function() {
      $('html, body').animate({
        scrollTop: $('.about').offset().top
      });
    });
    $('.js-experience').on('click', function() {
      $('html, body').animate({
        scrollTop: $('.experience').offset().top
      });
    });
    $('.js-projects').on('click', function() {
      $('html, body').animate({
        scrollTop: $('.projects').offset().top
      });
    });
    $('.js-contact').on('click', function() {
      $('html, body').animate({
        scrollTop: $('.contact').offset().top
      });
    });
  }

  // Force hover on project tiles to show their descriptions and buttons
  $('.project-tile figcaption').addClass('mobile-overlay');
  // $('.project-tile figure').css('width', '3000px');

  // Change highlighted navbar item on scroll
  $(window).scroll(function() {
    var navHeight = $('.navbar').height(),
        scroll = $(window).scrollTop(),
        welcome = $('.welcome').offset().top,
        about = $('.about').offset().top,
        experience = $('.experience').offset().top,
        projects = $('.projects').offset().top,
        contact = $('.contact').offset().top,
        documentHeight = $(document).height(),
        windowHeight = $(window).height();

    if (scroll >= welcome) {
      $('.js-nav-link').removeClass('link-selected');
    }
    if (scroll >= about - navHeight) {
      $('.js-about').addClass('link-selected');
    }
    if (scroll >= experience - navHeight) {
      $('.js-experience').addClass('link-selected');
      $('.js-about').removeClass('link-selected');
    }
    if (scroll >= projects - navHeight) {
      $('.js-projects').addClass('link-selected');
      $('.js-experience').removeClass('link-selected');
    }
    if (scroll >= contact - navHeight) {
      $('.js-contact').addClass('link-selected');
      $('.js-projects').removeClass('link-selected');
    }
    if (scroll === documentHeight - windowHeight) {
      $('.js-contact').addClass('link-selected');
      $('.js-projects').removeClass('link-selected');
    }
  });

  // Slide panels up/down when navbar links are clicked
  if (windowWidth >= 1100) {
    // Hide all sections except welcome on page load
    $('.js-section').hide();
    $('.welcome').show();
    // When a navbar link is clicked, slide to correct panel
    $('.js-nav-link').on('click', function() {

      $('.js-nav-link').removeClass('js-selected');
      $(this).addClass('js-selected');
      if ($(this).hasClass('js-welcome')) {
          $('.js-section').not('.welcome').slideUp(350);
      } else if ($(this).hasClass('js-about')) {
          $('.about').slideDown(350);
          if ($('.experience:hidden')) {
              $('.js-section').not('.welcome, .about').slideUp(350);
          }
      } else if ($(this).hasClass('js-experience')) {
          $('.about, .experience').slideDown(350);
          if ($('.projects:hidden')) {
              $('.js-section').not('.welcome, .about, .experience').slideUp(350);
          }
      } else if ($(this).hasClass('js-projects')) {
          $('.about, .experience, .projects').slideDown(350);
          if ($('.projects:hidden')) {
              $('.js-section').not('.welcome, .about, .experience, .projects').slideUp(350);
          }
      } else if ($(this).hasClass('js-contact')) {
          $('.about, .experience, .projects, .contact').slideDown(350);
      }
    });
  }
}


// initialize page
page();

// re-run the main function if window size passes 1100px mark
$(window).bind('exitBreakpoint1100', function() {
  page();
});
$(window).bind('enterBreakpoint1100', function() {
  page();
});

$(window).setBreakpoints();
