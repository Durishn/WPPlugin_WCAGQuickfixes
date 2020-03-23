<?php
/**
* Plugin Name: WCAG Quickfixes - Guelph Digital Service
* Description: General quickfixes for WCAG 2.0 (AA) errors that have been introduced to Guelph-based websites via commonly used plugins and themes. This plugin is the medicine that reduces the symptoms of problems affecting accessibility - it does not fix the ailments. Site-specific quickfixes are added through the Settings page.
* Author: Nic Durish
* Author URI: http://www.nicdurish.ca
* Version: 1.0.1
*
* Copyright 2020 Nic Durish (nic.durish@guelph.ca)
* @author Nic Durish
* @version 1.0.1
*/

global $wp_version;

// Prevent direct file access.
if ( ! defined( 'ABSPATH' ) ) {
	die();
}

define( 'WCAGQF_FILE', __FILE__ );
define( 'WCAGQF_OPTION', 'wcagqf_settings' );

/**
* If admin is not logged in load public.php, if admin load admin.php
*
* @since  1.0.0
*/
if ( ! is_admin() ) {
	require_once dirname( WCAGQF_FILE ) . '/includes/public.php';
} elseif ( ! defined( 'DOING_AJAX' ) ) {
	require_once dirname( WCAGQF_FILE ) . '/includes/admin.php';
}

/**
* Enqueue generalized WCAF CSS and JQuery fixes
*
* @since  1.0.0
* @action wp_enqueue_scripts
*/
function nd_adding_scripts_styles() {
  wp_register_script('JSfixes', plugins_url('includes/js/wcagqf.js', __FILE__), array('jquery'),'1.0', true);
  wp_enqueue_script('JSfixes');
  wp_enqueue_style( 'CSSfixes', plugins_url( 'includes/css/wcagqf.css', __FILE__ ), '', '1.0' );
}
add_action( 'wp_enqueue_scripts', 'nd_adding_scripts_styles', 98);
