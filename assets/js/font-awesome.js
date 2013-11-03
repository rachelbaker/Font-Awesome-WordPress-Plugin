(function() {
	var ICONS;

	var icon = function(id) {
		return '<i class="fa fa-' + id + '"><!-- ' + id + ' --></i>';
	}

	var createControl = function(name, controlManager) {
		if (name != 'fontAwesomeGlyphSelect') return null;
		var listBox = controlManager.createListBox('fontAwesomeGlyphSelect', {
			title: 'Glyphs',
			onselect: function(v) {
				var editor = this.control_manager.editor;
				if (v) {
					editor.selection.setContent(icon(v));
				}		
				return false;
			}
		});

		for (var i = 0; i < ICONS.length; i++) {
			var _id = ICONS[i];
			listBox.add(icon(_id) + ' ' + _id, _id);
		}

		return listBox;
	};

	tinymce.create('tinymce.plugins.FontAwesomeGlyphPlugin', {
		createControl: createControl
	});

	tinymce.PluginManager.add('font_awesome_glyphs', tinymce.plugins.FontAwesomeGlyphPlugin);

	ICONS = ["adjust", "adn", "align-center", "align-justify", "align-left", "align-right", "ambulance", "anchor", "android", "angle-double-down", "angle-double-left", "angle-double-right", "angle-double-up", "angle-down", "angle-left", "angle-right", "angle-up", "apple", "archive", "arrow-circle-down", "arrow-circle-left", "arrow-circle-o-down", "arrow-circle-o-left", "arrow-circle-o-right", "arrow-circle-o-up", "arrow-circle-right", "arrow-circle-up", "arrow-down", "arrow-left", "arrow-right", "arrow-up", "asterisk", "backward", "ban", "bar-chart-o", "barcode", "beer", "bell", "bell-o", "bitbucket", "bitbucket-square", "bold", "bolt", "book", "bookmark", "bookmark-o", "briefcase", "btc", "bug", "building", "bullhorn", "bullseye", "calendar", "calendar-o", "camera", "camera-retro", "caret-down", "caret-left", "caret-right", "caret-square-o-down", "caret-square-o-left", "caret-square-o-right", "caret-square-o-up", "caret-up", "certificate", "chain-broken", "check", "check-circle", "check-circle-o", "check-square", "check-square-o", "chevron-circle-down", "chevron-circle-left", "chevron-circle-right", "chevron-circle-up", "chevron-down", "chevron-left", "chevron-right", "chevron-up", "circle", "circle-o", "clipboard", "clock-o", "cloud", "cloud-download", "cloud-upload", "code", "code-fork", "coffee", "cog", "cogs", "collapse-o", "columns", "comment", "comment-o", "comments", "comments-o", "compass", "credit-card", "crop", "crosshairs", "css3", "cutlery", "desktop", "dot-circle-o", "download", "dribbble", "dropbox", "eject", "ellipsis-horizontal", "ellipsis-vertical", "envelope", "envelope-o", "eraser", "eur", "exchange", "exclamation", "exclamation-circle", "exclamation-triangle", "expand-o", "external-link", "external-link-square", "eye", "eye-slash", "facebook", "facebook-square", "fast-backward", "fast-forward", "female", "fighter-jet", "file", "file-o", "file-text", "file-text-o", "files-o", "film", "filter", "fire", "fire-extinguisher", "flag", "flag-checkered", "flag-o", "flask", "flickr", "floppy-o", "folder", "folder-o", "folder-open", "folder-open-o", "font", "forward", "foursquare", "frown-o", "fullscreen", "gamepad", "gavel", "gbp", "gift", "github", "github-alt", "github-square", "gittip", "glass", "globe", "google-plus", "google-plus-square", "group", "h-square", "hand-o-down", "hand-o-left", "hand-o-right", "hand-o-up", "hdd-o", "headphones", "heart", "heart-o", "home", "hospital", "html5", "inbox", "indent", "info", "info-circle", "inr", "instagram", "italic", "jpy", "key", "keyboard-o", "krw", "laptop", "leaf", "lemon-o", "level-down", "level-up", "lightbulb-o", "link", "linkedin", "linkedin-square", "linux", "list", "list-alt", "list-ol", "list-ul", "location-arrow", "lock", "long-arrow-down", "long-arrow-left", "long-arrow-right", "long-arrow-up", "magic", "magnet", "mail-reply-all", "male", "map-marker", "maxcdn", "medkit", "meh-o", "microphone", "microphone-slash", "minus", "minus-circle", "minus-square", "minus-square-o", "mobile", "money", "moon-o", "move", "music", "outdent", "pagelines", "paperclip", "pause", "pencil", "pencil-square", "pencil-square-o", "phone", "phone-square", "picture-o", "pinterest", "pinterest-square", "plane", "play", "play-circle", "play-circle-o", "plus", "plus-circle", "plus-square", "power-off", "print", "puzzle-piece", "qrcode", "question", "question-circle", "quote-left", "quote-right", "random", "refresh", "renren", "reorder", "repeat", "reply", "reply-all", "resize-full", "resize-horizontal", "resize-small", "resize-vertical", "retweet", "road", "rocket", "rss", "rss-square", "rub", "scissors", "search", "search-minus", "search-plus", "share", "share-square", "share-square-o", "shield", "shopping-cart", "sign-in", "sign-out", "signal", "sitemap", "skype", "smile-o", "sort", "sort-alpha-asc", "sort-alpha-desc", "sort-amount-asc", "sort-amount-desc", "sort-asc", "sort-desc", "sort-numeric-asc", "sort-numeric-desc", "spinner", "square", "square-o", "stack-exchange", "stack-overflow", "star", "star-half", "star-half-o", "star-o", "step-backward", "step-forward", "stethoscope", "stop", "strikethrough", "subscript", "suitcase", "sun-o", "superscript", "table", "tablet", "tachometer", "tag", "tags", "tasks", "terminal", "text-height", "text-width", "th", "th-large", "th-list", "thumb-tack", "thumbs-down", "thumbs-o-down", "thumbs-o-up", "thumbs-up", "ticket", "times", "times-circle", "times-circle-o", "tint", "trash-o", "trello", "trophy", "truck", "try", "tumblr", "tumblr-square", "twitter", "twitter-square", "umbrella", "underline", "undo", "unlock", "unlock-o", "upload", "usd", "user", "user-md", "video-camera", "vimeo-square", "vk", "volume-down", "volume-off", "volume-up", "weibo", "wheelchair", "windows", "wrench", "xing", "xing-square", "youtube", "youtube-play", "youtube-square"];

})();