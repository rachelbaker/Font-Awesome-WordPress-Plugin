=== Font Awesome Icons ===
Contributors: rachelbaker
Tags: icons, font-awesome, font icon, UI, icon font, bootstrap
Requires at least: 3.0
Tested up to: 3.6 beta2
Stable tag: 3.1
License: GPLv3 or later
License URI: http://www.gnu.org/licenses/gpl-3.0.html


Enables easy use of the Font Awesome icon font set from within WordPress.  Icons can be inserted using either HTML or a shortcode.

== Description ==

Font Awesome is a pictographic font set of 302 icons.  The icons are infinitely scalable and screen reader compatible.

A full list of the 302 Font Awesome icons is available: [http://f.cl.ly/items/413S2v2c2O2S3F3H3O0G/FontAwesomeIconsCheatsheet.pdf](FontAwesomeIconsCheatsheet.pdf)

To use any of the Font Awesome icons on your WordPress site you have two options:

__HTML Option__

All code examples on the Font Awesome site apply: [http://fontawesome.io/examples/](http://fontawesome.io/examples/)

**Examples**

Pencil icon

`<i class="icon-pencil"></i>`

Phone icon

`<i class="icon-phone"></i>`

Chevron left icon

`<i class="icon-chevron-left"></i>`

__Shortcode Option__

Don't want to worry about HTML tags?  You can use a shortcode in your posts, pages and even widgets to display a Font Awesome icon.

The shortcode to use is `[icon name=name-of-icon]`, where name=X is the class of the icon you would like to use.


Pencil icon

`[icon name=icon-pencil]`

Phone icon

`[icon name=icon-phone]`

Chevron left icon

`[icon name=icon-chevron-left]`


__Contributors Welcome__

*   Submit a [pull request on Github](https://github.com/rachelbaker/Font-Awesome-WordPress-Plugin)

__Author__

*   [Rachel Baker](http://rachelbaker.me)

== Installation ==

1. Upload Font Awesome Icons to the `/wp-content/plugins/` directory.

2. Activate the plugin through the 'Plugins' menu in WordPress.

3. Add shortcode to your posts, pages and even widgets to display a Font Awesome icon.

The shortcode to use is `[icon name=name-of-icon]`, where name=X is the class of the icon you would like to use.

**Example:**

`[icon name=icon-pencil]`


4. You can use HTML by adding the appropiate class to the `<i>` element.

All code examples on the Font Awesome site apply: [http://fortawesome.github.com/Font-Awesome/#code](http://fortawesome.github.com/Font-Awesome/#code)

**Example:**

`<i class="icon-pencil"></i>`


== Screenshots ==

1.  HTML code samples
2.  Shortcode samples
3.  Full icon list



== Changelog ==


= 3.1 =

*   Updated font and CSS files to Font Awesome 3.1 release. (Thanks to @Taylor4484)
*   Updated reference urls to new Font Awesome URL. (Thanks to @Taylor4484)
*   Added build/icons.yml file for reference. (Thanks to @BFTrick)
*   Updated reference PDF file with Font Awesome 3.1 icons.


= 3.0 =

* Updated font and CSS files to Font Awesome 3.0 release.


= 1.2 =

* Added IE7 CSS

= 1.1 =

* Created and enabled shortcode

= 1.0 =

* Initial release