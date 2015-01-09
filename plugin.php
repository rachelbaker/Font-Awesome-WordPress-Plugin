<?php
/*
Plugin Name: Font Awesome Icons
Plugin URI: http://www.rachelbaker.me
Description: Use the Font Awesome icon set within WordPress. Icons can be inserted using either HTML or a shortcode.
Version: 4.2
Author: Rachel Baker
Author URI: http://rachelbaker.me/font-awesome-icons-wordpress-plugins/
Author Email: rachel@rachelbaker.me
Credits:
	The Font Awesome icon set was created by Dave Gandy (dave@davegandy.com)
	 http://fontawesome.io

License:

  Copyright (C) 2013  Rachel Baker

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

class FontAwesome {
	private static $instance;
	const VERSION = '4.2';

	private static function has_instance() {
		return isset( self::$instance ) && null != self::$instance;
	}

	public static function get_instance() {
		if ( ! self::has_instance() ) {
			self::$instance = new FontAwesome;
		}
		return self::$instance;
	}

	public static function setup() {
		self::get_instance();
	}

	protected function __construct() {
		if ( ! self::has_instance() ) {
			$this->init();
		}
	}

	public function init() {
		add_action( 'wp_enqueue_scripts', array( $this, 'register_plugin_styles' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'register_plugin_styles' ) );
		add_action( 'admin_init', array( $this, 'add_tinymce_hooks' ) );
		add_shortcode( 'icon', array( $this, 'setup_shortcode' ) );
		add_filter( 'widget_text', 'do_shortcode' );
	}

	public function add_tinymce_hooks() {
		if ( ( current_user_can( 'edit_posts' ) || current_user_can( 'edit_pages' ) ) &&
				get_user_option( 'rich_editing' ) ) {
			add_filter( 'mce_external_plugins', array( $this, 'register_tinymce_plugin' ) );
			add_filter( 'mce_buttons', array( $this, 'add_tinymce_buttons' ) );
			add_filter( 'teeny_mce_buttons', array( $this, 'add_tinymce_buttons' ) );
			add_filter( 'mce_css', array( $this, 'add_tinymce_editor_sytle' ) );
		}
	}

	public function register_plugin_styles() {
		global $wp_styles;
		wp_enqueue_style( 'font-awesome-styles', plugins_url( 'assets/css/font-awesome.min.css', __FILE__ ), array(), self::VERSION, 'all' );
	}

	public function setup_shortcode( $params ) {
		return '<i class="fa fa-' . esc_attr( $params['name'] ) . '">&nbsp;</i>';
	}

	public function register_tinymce_plugin( $plugin_array ) {
		$plugin_array['font_awesome_glyphs'] = plugins_url( 'assets/js/font-awesome.js', __FILE__ );

		return $plugin_array;
	}

	public function add_tinymce_buttons( $buttons ) {
		array_push( $buttons, '|', 'font_awesome_glyphs' );

		return $buttons;
	}

	public function add_tinymce_editor_sytle($mce_css) {
		$mce_css .= ', ' . plugins_url( 'assets/css/admin/editor_styles.css', __FILE__ );

		return $mce_css;
	}
}

FontAwesome::setup();
