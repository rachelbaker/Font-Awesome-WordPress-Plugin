/*global tinymce:true */

( function() {
	var ICONS;

	var icon = function( id ) {
		return '<i class="fa fa-' + id + '"></i>';
	};

	var iconShortcode = function( id ) {
		return '[icon name="' + id + '"]';
	}

	tinymce.PluginManager.add( 'font_awesome_glyphs', function( editor, url ) {
		editor.addButton( 'font_awesome_glyphs', function() {
			var values = [];

			for ( var i = 0; i < ICONS.length; i++ ) {
				var _id = ICONS[i];

				values.push( {
					text: _id,
					value: _id
				} );
			}

			return {
				type: 'listbox',
				text: 'FontAwesome Icons',
				label: 'Select :',
				fixedWidth: true,
				values: values,
				onselect: function( e ) {
					if (e) {
						editor.insertContent( iconShortcode( e.control.settings.value ) );
					}
					return false;
				},
			};

		});
	} );

	ICONS = ["adjust", "adn", "align-center", "align-justify", "align-left", "align-right", "ambulance", "anchor", "android", "angellist", "angle-double-down", "angle-double-left", "angle-double-right", "angle-double-up", "angle-down", "angle-left", "angle-right", "angle-up", "apple", "archive", "area-chart", "arrow-circle-down", "arrow-circle-left", "arrow-circle-o-down", "arrow-circle-o-left", "arrow-circle-o-right", "arrow-circle-o-up", "arrow-circle-right", "arrow-circle-up", "arrow-down", "arrow-left", "arrow-right", "arrow-up", "arrows", "arrows-alt", "arrows-h", "arrows-v", "asterisk", "at", "backward", "ban", "bar-chart", "barcode", "bars", "beer", "behance", "behance-square", "bell", "bell-o", "bell-slash", "bell-slash-o", "bicycle", "binoculars", "birthday-cake", "bitbucket", "bitbucket-square", "bold", "bolt", "bomb", "book", "bookmark", "bookmark-o", "briefcase", "btc", "bug", "building", "building-o", "bullhorn", "bullseye", "bus", "calculator", "calendar", "calendar-o", "camera", "camera-retro", "car", "caret-down", "caret-left", "caret-right", "caret-square-o-down", "caret-square-o-left", "caret-square-o-right", "caret-square-o-up", "caret-up", "cc", "cc-amex", "cc-discover", "cc-mastercard", "cc-paypal", "cc-stripe", "cc-visa", "certificate", "chain-broken", "check", "check-circle", "check-circle-o", "check-square", "check-square-o", "chevron-circle-down", "chevron-circle-left", "chevron-circle-right", "chevron-circle-up", "chevron-down", "chevron-left", "chevron-right", "chevron-up", "child", "circle", "circle-o", "circle-o-notch", "circle-thin", "clipboard", "clock-o", "cloud", "cloud-download", "cloud-upload", "code", "code-fork", "codepen", "coffee", "cog", "cogs", "columns", "comment", "comment-o", "comments", "comments-o", "compass", "compress", "copyright", "credit-card", "crop", "crosshairs", "css3", "cube", "cubes", "cutlery", "database", "delicious", "desktop", "deviantart", "digg", "dot-circle-o", "download", "dribbble", "dropbox", "drupal", "eject", "ellipsis-h", "ellipsis-v", "empire", "envelope", "envelope-o", "envelope-square", "eraser", "eur", "exchange", "exclamation", "exclamation-circle", "exclamation-triangle", "expand", "external-link", "external-link-square", "eye", "eye-slash", "eyedropper", "facebook", "facebook-square", "fast-backward", "fast-forward", "fax", "female", "fighter-jet", "file", "file-archive-o", "file-audio-o", "file-code-o", "file-excel-o", "file-image-o", "file-o", "file-pdf-o", "file-powerpoint-o", "file-text", "file-text-o", "file-video-o", "file-word-o", "files-o", "film", "filter", "fire", "fire-extinguisher", "flag", "flag-checkered", "flag-o", "flask", "flickr", "floppy-o", "folder", "folder-o", "folder-open", "folder-open-o", "font", "forward", "foursquare", "frown-o", "futbol-o", "gamepad", "gavel", "gbp", "gift", "git", "git-square", "github", "github-alt", "github-square", "gittip", "glass", "globe", "google", "google-plus", "google-plus-square", "google-wallet", "graduation-cap", "h-square", "hacker-news", "hand-o-down", "hand-o-left", "hand-o-right", "hand-o-up", "hdd-o", "header", "headphones", "heart", "heart-o", "history", "home", "hospital-o", "html5", "ils", "inbox", "indent", "info", "info-circle", "inr", "instagram", "ioxhost", "italic", "joomla", "jpy", "jsfiddle", "key", "keyboard-o", "krw", "language", "laptop", "lastfm", "lastfm-square", "leaf", "lemon-o", "level-down", "level-up", "life-ring", "lightbulb-o", "line-chart", "link", "linkedin", "linkedin-square", "linux", "list", "list-alt", "list-ol", "list-ul", "location-arrow", "lock", "long-arrow-down", "long-arrow-left", "long-arrow-right", "long-arrow-up", "magic", "magnet", "male", "map-marker", "maxcdn", "meanpath", "medkit", "meh-o", "microphone", "microphone-slash", "minus", "minus-circle", "minus-square", "minus-square-o", "mobile", "money", "moon-o", "music", "newspaper-o", "openid", "outdent", "pagelines", "paint-brush", "paper-plane", "paper-plane-o", "paperclip", "paragraph", "pause", "paw", "paypal", "pencil", "pencil-square", "pencil-square-o", "phone", "phone-square", "picture-o", "pie-chart", "pied-piper", "pied-piper-alt", "pinterest", "pinterest-square", "plane", "play", "play-circle", "play-circle-o", "plug", "plus", "plus-circle", "plus-square", "plus-square-o", "power-off", "print", "puzzle-piece", "qq", "qrcode", "question", "question-circle", "quote-left", "quote-right", "random", "rebel", "recycle", "reddit", "reddit-square", "refresh", "renren", "repeat", "reply", "reply-all", "retweet", "road", "rocket", "rss", "rss-square", "rub", "scissors", "search", "search-minus", "search-plus", "share", "share-alt", "share-alt-square", "share-square", "share-square-o", "shield", "shopping-cart", "sign-in", "sign-out", "signal", "sitemap", "skype", "slack", "sliders", "slideshare", "smile-o", "sort", "sort-alpha-asc", "sort-alpha-desc", "sort-amount-asc", "sort-amount-desc", "sort-asc", "sort-desc", "sort-numeric-asc", "sort-numeric-desc", "soundcloud", "space-shuttle", "spinner", "spoon", "spotify", "square", "square-o", "stack-exchange", "stack-overflow", "star", "star-half", "star-half-o", "star-o", "steam", "steam-square", "step-backward", "step-forward", "stethoscope", "stop", "strikethrough", "stumbleupon", "stumbleupon-circle", "subscript", "suitcase", "sun-o", "superscript", "table", "tablet", "tachometer", "tag", "tags", "tasks", "taxi", "tencent-weibo", "terminal", "text-height", "text-width", "th", "th-large", "th-list", "thumb-tack", "thumbs-down", "thumbs-o-down", "thumbs-o-up", "thumbs-up", "ticket", "times", "times-circle", "times-circle-o", "tint", "toggle-off", "toggle-on", "trash", "trash-o", "tree", "trello", "trophy", "truck", "try", "tty", "tumblr", "tumblr-square", "twitch", "twitter", "twitter-square", "umbrella", "underline", "undo", "university", "unlock", "unlock-alt", "upload", "usd", "user", "user-md", "users", "video-camera", "vimeo-square", "vine", "vk", "volume-down", "volume-off", "volume-up", "weibo", "weixin", "wheelchair", "wifi", "windows", "wordpress", "wrench", "xing", "xing-square", "yahoo", "yelp", "youtube", "youtube-play", "youtube-square"];
})();