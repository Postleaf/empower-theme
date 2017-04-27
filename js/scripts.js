$(function() {
  'use strict';

  // Hide the nav by default
  $('.nav').css('display', 'none');

  // Toggle nav with buttons
  $('.nav-toggle').on('click', function(event) {
    event.preventDefault();

    // Don't open if we're in the editor
    if(window.Postleaf) return;

    // Show it
    $('.nav').css('display', 'block');

    // Animate it on the next tick
    setTimeout(function() {
      $('html').toggleClass('nav-open');
    }, 0);
  });

  // Hide the nav when closed after the transition stops
  $('.nav').on('transitionend', function() {
    $('html:not(.nav-open) .nav').css('display', 'none');
  });

  // Close menu when clicking outside it
  $(document).on('click touchstart', function(event) {
    if(!$(event.target).parents().addBack().is('.nav-toggle, .nav')) {
      $('html').removeClass('nav-open');
    }
  });

  // Close menu when pressing ESC
  $(document).on('keydown', function(event) {
    if(event.keyCode === 27) {
      $('html').removeClass('nav-open');
    }
  });

  // Continue link
  $('.cover-continue').on('click', function(event) {
    event.preventDefault();

    // Scroll out of the cover
    $('body').animate({
      scrollTop: $(window).height()
    }, 1000);
  });

  // Sharing
  $('.share-button-twitter').on('click', function(event) {
    window.open(this.href, 'share-on-twitter', 'width=600,height=290');
    event.preventDefault();
  });

  $('.share-button-facebook').on('click', function(event) {
    window.open(this.href, 'share-on-facebook', 'width=600,height=300');
    event.preventDefault();
  });

  $('.share-button-gp').on('click', function(event) {
    window.open(this.href, 'share-on-gp', 'width=600,height=550');
    event.preventDefault();
  });
});
