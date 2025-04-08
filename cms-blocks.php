<?php
/**
 * Plugin Name:       Event Block
 * Description:       Create events easily
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       cms-blocks
 *
 * @package Ae
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function ae_event_block_init() {
	// Registering blocks
	register_block_type( __DIR__ . '/build/blocks/cms-blocks' );
	register_block_type( __DIR__ . '/build/blocks/adoption-block' );
	register_block_type( __DIR__ . '/build/blocks/class-block' );
	register_block_type( __DIR__ . '/build/blocks/volunteer-form' );

	// Add API client for event block
	wp_enqueue_script( 'wp-api' );

}

add_action( 'init', 'ae_event_block_init' );

function acf_volunteer_form_shortcode() {
	ob_start();
	acf_form(array(
		'post_id' => 'new_post',
		'field_groups' => array('group_67f30a693bcf4'),
		'new_post' => array(
			'post_type' => 'volunteer-form',
			'post_status' => 'draft',
		),
		'submit_value' => 'Send'
	));
	return ob_get_clean();
}

add_shortcode('volunteer_form', 'acf_volunteer_form_shortcode');
