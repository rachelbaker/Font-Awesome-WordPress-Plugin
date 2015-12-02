=== Font Awesome Icons ===
Contributors: rachelbaker, BFTrick, Taylor4484, tommarshall, rscarvalho

Tags: icons, font-awesome, font icon, UI, icon font, bootstrap
Requires at least: 3.0
Tested up to: 4.3
Stable tag: 4.2
License: GPLv3 or later
License URI: http://www.gnu.org/licenses/gpl-3.0.html


Enables easy use of the Font Awesome icon font set from within WordPress.  Icons can be inserted using either HTML, shortcode, or a built-in TinyMCE plugin.

== Description ==

Font Awesome is a pictographic font set of 361 icons. The icons are infinitely scalable and screen reader compatible.

A full list of the 361 Font Awesome icons is available: [FontAwesomeIconsCheatsheet.pdf](http://f.cl.ly/items/2e1b3q3g081M173m070I/FontAwesomeIconsCheatsheet.pdf)

To use any of the Font Awesome icons on your WordPress site you have three options:

__HTML__

All code examples on the Font Awesome site apply: [http://fontawesome.io/examples/](http://fontawesome.io/examples/)

**Examples**

Pencil icon

`<i class="icon-pencil"></i>`

Phone icon

`<i class="icon-phone"></i>`

Chevron left icon

`<i class="icon-chevron-left"></i>`

__Shortcode__

Don't want to worry about HTML tags?  You can use a shortcode in your posts, pages and even widgets to display a Font Awesome icon.

The shortcode to use is `[icon name=name-of-icon]`, where name=X is the class of the icon you would like to use.

**Examples**

Pencil icon

`[icon name=icon-pencil]`

Phone icon

`[icon name=icon-phone]`

Chevron left icon

`[icon name=icon-chevron-left]`

__TinyMCE Plugin__

Select the icon you would like to add to your post or page content from the Glyphs drop-down menu in the Visual Editor.

![image](http://f.cl.ly/items/212e2P0m3g39292p271y/Font-Awesome-TinyMCE-plugin.jpg) 

__Contributors Welcome__

*   Submit a [pull request on Github](https://github.com/rachelbaker/Font-Awesome-WordPress-Plugin)

__Author__

*   [Rachel Baker](http://rachelbaker.me)

== Installation ==

1. Upload Font Awesome Icons to the `/wp-content/plugins/` directory.

2. Activate the plugin through the 'Plugins' menu in WordPress.

3. Use one of the three usage methods (HTML, Shortcode, or TinyMCE plugin) within the content of your posts or pages.   

4. Use either the HTML or Shortcode methods inside your text widgets.



== Screenshots ==

1.  HTML code samples
2.  Shortcode samples
3.  TinyMCE plugin
4.  Full icon list




== Changelog ==

= 4.5 = 

*   Updated font and CSS files to Font Awesome 4.5.0 release. (Thanks to @jeezysevenrwd)


= 3.2.1 = 

*   Updated font and CSS files to Font Awesome 3.2.1 release. (Thanks to @tommarshall)
*   Updated build/icons.yml file for reference. (Thanks to @tommarshall)
*   Updated reference PDF file with Font Awesome 3.2.1 icons. (Thanks to @tommarshall)
*   Added TinyMCE editor plugin, making it possible for the user to select font awesome glyphs from a drop-down list within the content editor.  (Thanks @rscarvalho)
*   Added version number constant to cache bust assets for future plugin updates. (Thanks @rscarvalho)


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
