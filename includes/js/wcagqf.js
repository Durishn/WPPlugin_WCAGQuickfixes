/**
 * AODAfixes.js
 * Licensed under the MIT license - http://opensource.org/licenses/MIT
 *
 *   WARNING: If links have scripts attached to their id, things may break!
 *
 * @summary Quickfixes for WCAG errors.
 * @author Nic Durish <nic.durish@guelph.com>
 * @author_uri nicdurish.ca
 * @date 2020-03-17
 *
 * Copyright (c) 2020 Nic Durish
 */

(function ($) {

  /* Classic unneccessary frameborders on iframes*/
  $('iframe').removeAttr("frameborder");


  /* A 1.1.1
  * Non-text content has text alternative
  */
  /*$('.header-content img').attr('alt', 'Guelph Cooperative Purchasing Group logo');*/

  /* A 1.3.1
  * Element ID is not Unique
  */
  /*Divi*/
  $('#et-top-navigation #top-menu li').removeAttr("id");

  /* A 1.3.1
  * No top-level heading on the page
  */
  if ($("h1").length == 0) {
    $("<h1 class='visually-hidden'> "+ $("h2").text() + " </h1>").insertAfter( "#main-header");
  }

  /* A 1.3.1
  * Non-distinguishing landmark
  */
  /*Divi*/
  $('.page article.et_pb_post').each(function(){
    $(this).attr('aria-label', $(this).attr('id'));
  });

  /* A 1.3.1
  * Content not included in landmarks
  */
  $('div#top-header').attr('role', 'navigation');
  $('div#top-header').attr('aria-label', 'Top Header');
  $('a.skip-link').attr('role', 'navigation');
  $('a.skip-link').attr('aria-label', 'Skip to Content');
  /*Divi*/
  $('.et_pb_side_nav').attr('role', 'navigation');
  $('.et_pb_side_nav').attr('aria-label', 'Quick Navigator');
  $('.et_pb_scroll_top').attr('role', 'complementary');
  $('.et_pb_scroll_top').attr('aria-label', 'Scroll Arrow');


  /* A 2.4.1
  * No option to skip repeated content
  */
  /* $("<a role='navigation' aria-label='Skip to content' class='screenreader' href='#et-main-area' style='scroll-behavior: smooth; color: white !important;'>Skip to main content</a>").insertBefore( "#main-header"); */

  /* A 2.4.4
  * Link text used for multiple different destinations
  */
  /* WP-AdminBar */
  $('#wpadminbar').attr('aria-label', 'Wordpress admin bar');


  /* A 3.2.2
  Missing Button in form
  */
  /* $("<input class='visually-hidden' type='submit' value='Submit'>").insertAfter( ".et-search-field"); */

})(jQuery);
