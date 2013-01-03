<?php
/*
Plugin Name: Font Awesome Icons
Plugin URI: http://www.rachelbaker.me
Description: Use the Font Awesome icon set within WordPress. Icons can be inserted using either HTML or a shortcode.
Version: 3.0
Author: Rachel Baker
Author URI: http://rachelbaker.me/font-awesome-icons-wordpress-plugins/
Author Email: rachel@rachelbaker.me
Credits:
    The Font Awesome icon set was created by Dave Gandy (dave@davegandy.com)
     http://fortawesome.github.com/Font-Awesome/

License:

  Copyright (C) 2012  Rachel Baker, Plugged In Consulting, Inc.

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
    public function __construct() {
        add_action( 'init', array( &$this, 'init' ) );
    }

    public function init() {
        add_action( 'wp_enqueue_scripts', array( $this, 'register_plugin_styles' ) );
        add_shortcode( 'icon', array( $this, 'setup_shortcode' ) );
        add_filter( 'widget_text', 'do_shortcode' );
    }

    public function register_plugin_styles() {
        global $wp_styles;
        wp_enqueue_style( 'font-awesome-styles', plugins_url( 'assets/css/font-awesome.min.css', __FILE__  ) );
        wp_enqueue_style( 'font-awesome-ie7', plugins_url( 'assets/css/font-awesome-ie7.min.css', __FILE__ ), array(), '1.0', 'all'  );
        $wp_styles->add_data( 'font-awesome-ie7', 'conditional', 'lte IE 7' );
    }

    public function setup_shortcode( $params ) {
        extract( shortcode_atts( array(
                    'name'  => 'icon-wrench'
                ), $params ) );
        $icon = '<i class="'.$params['name'].'">&nbsp;</i>';

        return $icon;
    }

}

new FontAwesome();
