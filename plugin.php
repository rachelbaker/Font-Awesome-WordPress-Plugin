<?php
/*
Plugin Name: Font Awesome Icons
Plugin URI: http://www.rachelbaker.me
Description: Use the Font Awesome icon set within WordPress. Icons can be inserted using either HTML or a shortcode.
Version: 4.6.3
Author: Rachel Baker
Author URI: http://rachelbaker.me/font-awesome-icons-wordpress-plugins/
Author Email: rachel@rachelbaker.me
Credits:
The Font Awesome icon set was created by Dave Gandy (dave@davegandy.com)
http://fontawesome.io

License:

Copyright (C) 2013 - 2016 Rachel Baker

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Constants
 */
define( 'FONTAWESOME_VERSION', '4.6.3' );

function fntawe_register_plugin_styles() {
	global $wp_styles;

	wp_enqueue_style( 'font-awesome-styles', plugins_url( 'assets/css/font-awesome.css', __FILE__ ), array(), FONTAWESOME_VERSION, 'all' );
}
add_action( 'wp_enqueue_scripts', 'fntawe_register_plugin_styles' );
add_action( 'admin_enqueue_scripts', 'fntawe_register_plugin_styles' );

function fntawe_setup_shortcode( $params ) {
	return '<i class="fa fa-' . esc_attr( $params ['name']) . '">&nbsp;</i>';
}
add_shortcode( 'icon', 'fntawe_setup_shortcode' );

add_filter( 'widget_text', 'do_shortcode' );

function fntawe_add_tinymce_hooks() {
	if ( ( current_user_can( 'edit_posts') || current_user_can( 'edit_pages' ) ) && get_user_option( 'rich_editing' ) ) {
		add_filter( 'mce_external_plugins', 'fntawe_register_tinymce_plugin' );
		add_filter( 'mce_buttons', 'fntawe_add_tinymce_buttons' );
		add_filter( 'teeny_mce_buttons', 'fntawe_add_tinymce_buttons' );
		add_filter( 'mce_css', 'fntawe_add_tinymce_editor_sytle' );
	}
}
add_action( 'admin_init', 'fntawe_add_tinymce_hooks' );



function fntawe_register_tinymce_plugin( $plugin_array = array() ) {
	$plugin_array['font_awesome_glyphs'] = plugins_url( 'assets/js/font-awesome.js', __FILE__);

	return $plugin_array;
}

function fntawe_add_tinymce_buttons( $buttons = array() ) {
	$buttons = (array) $buttons;
	array_push( $buttons, '|', 'font_awesome_glyphs' );

	return $buttons;
}

function fntawe_add_tinymce_editor_sytle( $mce_css ) {
	$mce_css .= ', ' . plugins_url( 'assets/css/font-awesome.min.css', __FILE__ );

	return $mce_css;
}
