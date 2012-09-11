<?php
/*
Plugin Name: Font Awesome Icons
Plugin URI: http://www.rachelbaker.me
Description: Font Awesome (http://fortawesome.github.com/Font-Awesome) Icons for use in WordPress.
Version: 1.1
Author: Rachel Baker
Author URI: http://www.rachelbaker.me
Author Email: rachel@rachelbaker.me
Credits:
	The Font Awesome icon set was created by Dave Gandy (dave@davegandy.com)
	 http://fortawesome.github.com/Font-Awesome/

License:
  Copyright 2012 Plugged In Consulting, Inc. (rachel@rachelbaker.me)

  This program is free software; you can redistribute it and/or modify
  it under the terms of the GNU General Public License, version 2, as
  published by the Free Software Foundation.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program; if not, write to the Free Software
  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

*/

class FontAwesome {

	function __construct() {
		add_action( 'init', array( &$this, 'init' ) );
	}

	public function init() {
		add_action( 'wp_enqueue_scripts', array( &$this, 'register_plugin_styles' ) );
        add_shortcode('icon', array( &$this, 'setup_shortcode' ) );
        add_filter('widget_text', 'do_shortcode');
	}

	public function register_plugin_styles() {
		wp_enqueue_style( 'font-awesome-styles', plugins_url( '/css/font-awesome.css', __FILE__  ) );
	}

    public function setup_shortcode($params) {
     extract( shortcode_atts( array(
             'name'  => 'icon-wrench'
             ), $params));
     $icon = '<i class="'.$params['name'].'">&nbsp;</i>';
     return $icon;
    }

}

new FontAwesome();