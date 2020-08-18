<?php
/**
* Public functionality - sending of backend data to readable code for frontend
*
* @author  Nic Durish
*/

// Prevent direct file access.
if ( ! defined( 'WCAGQF_FILE' ) ) {
	//die();
}

/**
 * Enqueue link to add CSS
 *
 *
 * @since  1.0.0
 * @action wp_enqueue_scripts
 */
function wcagqf_register_style() {
	$url = home_url();
	if ( is_ssl() ) {
		$url = home_url( '/', 'https' );
	}

	wp_register_style(
		'wcagqf_style',
		add_query_arg(
			array(
				'wcagqf' => 1,
			),
			$url
		)
	);
	wp_enqueue_style( 'wcagqf_style' );
}
add_action( 'wp_enqueue_scripts', 'wcagqf_register_style', 99 );

/**
 * If the query var is set, print the Custom CSS rules.
 *
 * @since  1.0.0
 * @action plugins_loaded
 */
function wcagqf_maybe_print_css() {

	// Only print CSS if this is a stylesheet request.
	if ( ! isset( $_GET['wcagqf'] ) || intval( $_GET['wcagqf'] ) !== 1 ) {
		return;
	}

	ob_start();
	header( 'Content-type: text/css' );

	wcagqf_the_css();

	die();
}
add_action( 'plugins_loaded', 'wcagqf_maybe_print_css' );

/**
 * Echo the CSS.
 *
 * @since 1.0.0
 */
function wcagqf_the_css() {
	$options     = get_option( 'custom_css_field' );
	$raw_content = isset( $options ) ? $options : '';
	$content     = wp_kses( $raw_content, array( '\'', '\"' ) );
	$content     = str_replace( '&gt;', '>', $content );
	echo $content; // phpcs:ignore WordPress.Security.EscapeOutput
}

/**
 * Enqueue link to add JS
 *
 *
 * @since  1.0.0
 * @action wp_enqueue_scripts, 99
 */
function wcagqf_register_script() {
	$url = home_url();

	if ( is_ssl() ) {
		$url = home_url( '/', 'https' );
	}

	wp_register_script(
		'wcagqf_script',
		add_query_arg(
			array(
				'wcagqfscr' => 1,
			),
			$url
		),
    array('jquery'),'1.0', true
	);
	wp_enqueue_script( 'wcagqf_script' );
}
add_action( 'wp_enqueue_scripts', 'wcagqf_register_script', 99 );

/**
 * If the query var is set, print the JS rules
 *
 * @since  1.0.0
 * @action plugins_loaded
 */
function wcagqf_maybe_print_js() {

	// Only print CSS if this is a stylesheet request.
	if ( ! isset( $_GET['wcagqfscr'] ) || intval( $_GET['wcagqfscr'] ) !== 1 ) {
		return;
	}

	ob_start();
	header( 'Content-type: text/js' );

	wcagqf_the_js();

	die();
}
add_action( 'plugins_loaded', 'wcagqf_maybe_print_js' );

/**
 * Echo the JSS.
 *
 * @since 1.0.0
 */
function wcagqf_the_js() {
	//$options     = get_option( 'custom_js_field' );
	//$raw_content = isset( $options ) ? $options : '';
	//$content     = wp_kses( $raw_content, array( '\'', '\"' ) );
	//$content     = str_replace( '&gt;', '>', $content );
	echo get_option( 'custom_js_field' );
}
