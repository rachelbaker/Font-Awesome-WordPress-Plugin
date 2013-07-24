(function() {
	var ICONS;

	var icon = function(id) {
		return '<i class="icon-' + id + '"></i>';
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

	ICONS = ["adjust", "align-center", "align-justify", "align-left", "align-right", "ambulance", "angle-down", "angle-left", "angle-right", "angle-up", "arrow-down", "arrow-left", "arrow-right", "arrow-up", "asterisk", "backward", "ban-circle", "bar-chart", "barcode", "beaker", "beer", "bell", "bell-alt", "bold", "bolt", "book", "bookmark", "bookmark-empty", "briefcase", "building", "bullhorn", "calendar", "calendar-empty", "camera", "camera-retro", "caret-down", "caret-left", "caret-right", "caret-up", "certificate", "check", "check-empty", "chevron-down", "chevron-left", "chevron-right", "chevron-up", "circle", "circle-arrow-down", "circle-arrow-left", "circle-arrow-right", "circle-arrow-up", "circle-blank", "cloud", "cloud-download", "cloud-upload", "code", "code-fork", "coffee", "cog", "cogs", "collapse-alt", "columns", "comment", "comment-alt", "comments", "comments-alt", "copy", "credit-card", "crop", "cut", "dashboard", "desktop", "double-angle-down", "double-angle-left", "double-angle-right", "double-angle-up", "download", "download-alt", "edit", "eject", "envelope", "envelope-alt", "eraser", "exchange", "exclamation", "exclamation-sign", "expand-alt", "external-link", "eye-close", "eye-open", "facebook", "facebook-sign", "facetime-video", "fast-backward", "fast-forward", "fighter-jet", "file", "file-alt", "film", "filter", "fire", "fire-extinguisher", "flag", "flag-alt", "flag-checkered", "folder-close", "folder-close-alt", "folder-open", "folder-open-alt", "font", "food", "forward", "frown", "fullscreen", "gamepad", "gift", "github", "github-alt", "github-sign", "glass", "globe", "google-plus", "google-plus-sign", "group", "h-sign", "hand-down", "hand-left", "hand-right", "hand-up", "hdd", "headphones", "heart", "heart-empty", "home", "hospital", "inbox", "indent-left", "indent-right", "info", "info-sign", "italic", "key", "keyboard", "laptop", "leaf", "legal", "lemon", "lightbulb", "link", "linkedin", "linkedin-sign", "list", "list-alt", "list-ol", "list-ul", "location-arrow", "lock", "magic", "magnet", "mail-reply-all", "map-marker", "maxcdn", "medkit", "meh", "microphone", "microphone-off", "minus", "minus-sign", "mobile-phone", "money", "move", "music", "off", "ok", "ok-circle", "ok-sign", "paper-clip", "paste", "pause", "pencil", "phone", "phone-sign", "picture", "pinterest", "pinterest-sign", "plane", "play", "play-circle", "plus", "plus-sign", "plus-sign-alt", "print", "pushpin", "puzzle-piece", "qrcode", "question", "question-sign", "quote-left", "quote-right", "random", "refresh", "remove", "remove-circle", "remove-sign", "reorder", "repeat", "reply", "reply-all", "resize-full", "resize-horizontal", "resize-small", "resize-vertical", "retweet", "road", "rocket", "rss", "save", "screenshot", "search", "share", "share-alt", "shield", "shopping-cart", "sign-blank", "signal", "signin", "signout", "sitemap", "smile", "sort", "sort-down", "sort-up", "spinner", "star", "star-empty", "star-half", "star-half-empty", "step-backward", "step-forward", "stethoscope", "stop", "strikethrough", "subscript", "suitcase", "superscript", "table", "tablet", "tag", "tags", "tasks", "terminal", "text-height", "text-width", "th", "th-large", "th-list", "thumbs-down", "thumbs-up", "time", "tint", "trash", "trophy", "truck", "twitter", "twitter-sign", "umbrella", "underline", "undo", "unlink", "unlock", "upload", "upload-alt", "user", "user-md", "volume-down", "volume-off", "volume-up", "warning-sign", "wrench", "zoom-in", "zoom-out"];
})();