<?php
/**
 * Vue Twenty Seventeen Child Theme Functions and Definitions.
 * Requires Twenty Seventeen and only works in WordPress 4.7 or later.
 *
 * @package WordPress
 */

 // includes for the callbacks.
include_once( get_stylesheet_directory() . '/includes/enqueue-scripts.php' );
include_once( get_stylesheet_directory() . '/includes/extend-api.php' );

/* hooks and filters */

// enqueue-scripts.php.
add_action( 'wp_enqueue_scripts', 'vuetwentyseventeen_enqueue_styles' );
add_action( 'wp_enqueue_scripts', 'vuetwentyseventeen_enqueue_spa_scripts' );

// extend-api.php.
add_action( 'rest_api_init', 'vuetwentyseventeen_extend_api_response' );
