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

  /*****************************
  **     Text Alternatives    **
  ******************************/
  /* A 1.1.1 - Error
  * Image with no text alternative
  */
  /* CHANGE IN CONTENT IF POSSIBLE */

  /*****************************
  **        Adaptable         **
  ******************************/
  /* A 1.3.1 - Error
  * Element ID is not Unique
  */
  /*Divi*/
  $('#et-top-navigation #top-menu li').removeAttr("id");

  /* A 1.3.1 - Error
  * Input field has no description
  */

  /* A 1.3.1 - Error
  * Label is not connected to a form control
  */

  /* A 1.3.1 - Error
  * HTML is used to format content
  */
  $('iframe').removeAttr("frameborder");
  $('iframe').removeAttr("align");
  $('iframe').removeAttr("scrolling");
  $('img').removeAttr("align");


  /* A 1.3.1 -Warning
  * i used to format text
  */
  $('i').each(function() {
    var outer = this.outerHTML;

    // Replace opening tag
    var regex = new RegExp('<' + this.tagName, 'i');
    var newTag = outer.replace(regex, '<' + 'span');

    // Replace closing tag
    regex = new RegExp('</' + this.tagName, 'i');
    newTag = newTag.replace(regex, '</' + 'span');

    $(this).replaceWith(newTag);
  });

  /* A 1.3.1
  * No top-level heading on the page - Warning
  */
  if ($("h1").length == 0) {
    $("<h1 class='visually-hidden' role='complementary' aria-label='hidden title'> "+ $("h2").text() + " </h1>").insertAfter( "header");
  }

  /* A 1.3.1
  * Non-distinguishing landmark - Warning
  */
  /*Divi*/
  $('article.page').attr('aria-label', 'Main Article');
  $('article.et_pb_post').each(function(){
    $(this).attr('aria-label', $(this).attr('id'));
  });
  $('#main-header .et-search-form').attr('aria-label', 'Main Search');
  $('#sidebar .et-search-form').attr('aria-label', 'Sidebar Search');


  /* A 1.3.1
  * Content not included in landmarks - Warning
  */
  $('div#top-header').attr('role', 'navigation');
  $('div#top-header').attr('aria-label', 'Top Header');
  /*Divi*/
  $('.et_pb_side_nav').attr('role', 'navigation');
  $('.et_pb_side_nav').attr('aria-label', 'Quick Navigator');
  $('.et_pb_scroll_top').attr('role', 'complementary');
  $('.et_pb_scroll_top').attr('aria-label', 'Scroll Arrow');

  /*****************************
  **      DISTINGUISHABLE     **
  ******************************/
  /* This section is mostly css*/

  /*****************************
  **         NAVIGABLE        **
  ******************************/
  /* A 2.4.1
   * No option to skip repeated content
   */
  /* $("<a role='navigation' aria-label='Skip to content' class='screenreader' href='#et-main-area' style='scroll-behavior: smooth; color: white !important;'>Skip to main content</a>").insertBefore( "#main-header"); */

  /* A 2.4.4 - Error
   * Link link is missing alternative text
  */
  /*CHANGE IN CONTENT IF POSSIBLE*/

  /* A 2.4.4 - Error
  * Link text is too generic in current context
  */
  /*CHANGE IN CONTENT IF POSSIBLE*/

  /* A 2.4.4
  * Link text used for multiple different destinations
  */
  /*CHANGE IN CONTENT IF POSSIBLE*/
  /* WP-AdminBar */
  $('#wpadminbar').attr('aria-label', 'Wordpress admin bar');

  /*****************************
  **      INPUT ASSISTANCE    **
  ******************************/
  /* A 3.2.2
  * Missing Button in form
  */
  /* $("<input class='visually-hidden' type='submit' value='Submit'>").insertAfter( ".et-search-field"); */

  /* A 3.3.2 - Error
  * Input field has no description
  */

  /*****************************
  **        COMPATIBALE       **
  ******************************/
  /* A 4.1.2 - Error
  * Input field has no description
  */

  /* A 4.1.2 Error
  * iFrame is missing a title
  */
	/* $('#ba_yt_0').attr('title', "Youtube Video 1"); */

  /* A 4.1.2 - Error
  * Redundant WAI-ARIA attribute
  */

})(jQuery);
