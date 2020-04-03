(function ($) {

  /* A 1.1.1 - Error
  * Image with no text alternative
  */
  /* CHANGE IN CONTENT IF POSSIBLE */
  $('img.mysite-logo').attr('alt', 'Our Food Future Logo');
  $('#swirly-banner img').attr('alt', 'Polkadot banner');

  /* A 1.1.1 - Error
  * Alternative text for image is identical to link text
  */
  /* CHANGE IN CONTENT IF POSSIBLE */
  $('svg.social-facebook').removeAttr('aria-labelledby');
  $('svg.social-facebook').attr('aria-label', 'facebook icon');
  $('svg.social-instagram').removeAttr('aria-labelledby');
  $('svg.social-instagram').attr('aria-label', 'instagram icon');
  $('svg.social-rss').removeAttr('aria-labelledby');
  $('svg.social-rss').attr('aria-label', 'rss icon');
  $('svg.social-twitter').removeAttr('aria-labelledby');
  $('svg.social-twitter').attr('aria-label', 'twitter icon');

  /* A 1.3.1
  * Content not included in landmarks - Warning
  */
  $('ul.genesis-skip-link').attr('role', 'navigation');
  $('ul.genesis-skip-link').attr('aria-label', 'Skip to content');
  $('.footer-widgets h2.genesis-sidebar-title').attr('role', 'contentinfo');
  $('.footer-widgets h2.genesis-sidebar-title').attr('aria-label', 'Final Foot Title');

	/* A 1.3.1
  * Non-distinguishing landmark - Warning
  */
	$('#sidebar .searchform').attr('aria-label', 'Sidebar Search');
	$('#at-expanded-menu-host .at-expanded-menu-search').attr('aria-label', 'Hidden Search');

	/* A 2.4.1
   * No option to skip repeated content
   */
	$('body').prepend("<div role='navigation' aria-label='Skip to content' ><a class='screenreader' href='#et-main-area' style='scroll-behavior: smooth; background: black !important; color: white !important;'>Skip to main content</a></div>");

  /* A 2.4.1
   * No option to skip repeated content
   */
  /* $("<a role='navigation' aria-label='Skip to content' class='screenreader' href='#et-main-area' style='scroll-behavior: smooth; color: white !important;'>Skip to main content</a>").insertBefore( "#main-header"); */

  /* A 2.4.4 - Error
   * Link is missing alternative text
  */
  /*CHANGE IN CONTENT IF POSSIBLE*/
  $('upl-post-thumbnail').attr('alt', 'bullet link');

  /* A 2.4.4 - Error
  * Link text is too generic in current context
  */
  /*CHANGE IN CONTENT IF POSSIBLE*/

	/* A 2.4.4
  * Link text used for multiple different destinations
  */
	$('.menu-item a:contains(Guelph Youth Council)').attr('aria-label', 'Council Page');
	$('.post-meta a:contains(Guelph Youth Council)').attr('aria-label', 'Council Category');

  /* A 2.4.4
  * Link text used for multiple different destinations
  */
  /*CHANGE IN CONTENT IF POSSIBLE*/
  /* WP-AdminBar */
  $('#wpadminbar').attr('aria-label', 'Wordpress admin bar');

  /* A 3.2.2
  * Missing Button in form
  */
  /* $("<input class='visually-hidden' type='submit' value='Submit'>").insertAfter( ".et-search-field"); */

  /* A 3.3.2 - Error
  * Input field has no description
  */

	/* A 4.1.2 Error
  * iFrame is missing a title
  */
	$('#ba_yt_0').attr('title', "Youtube Video 1");
	$('#ba_yt_1').attr('title', $('#ba_yt_1').name);

  /* A 4.1.2 - Error
  * Redundant WAI-ARIA attribute
  */

	/* TESTING FIELD
	$("body").attr('style','color:blue !important;')*/
})(jQuery);
