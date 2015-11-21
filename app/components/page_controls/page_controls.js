function Page(path, name) {
	var page = this;

	this.path  = path;
	this.name  = name;

	this.getURL = function() {
		return page.path + page.name;
	};

	return page;
};

function PageControls(pages, index) {
	var pageControls = this;

	this.pages        = pages;
	this.index        = index;
	this.nextPage     = document.getElementById('next-page');
	this.previousPage = document.getElementById('previous-page');

	this.next = function() {
		if (pageControls.index < pageControls.pages.length-1) {
			console.log(pageControls.pages[pageControls.index+1]);
			return pageControls.pages[pageControls.index+1];
		} else {
			return pageControls.pages[pageControls.index];
		}
	};

	this.setIndex = function(index) {
		this.index = index;
	};

	this.previous = function() {
		if (pageControls.index > 0) {
			return pageControls.pages[pageControls.index-1];
		} else {
			return pageControls.pages[pageControls.index];
		}
	};

	this.nextURL = function() {
		return pageControls.next().getURL();
	};

	this.previousURL = function() {
		return pageControls.previous().getURL();
	};

	this.init = function() {
		if (pageControls.nextPage) {
			pageControls.nextPage.setAttribute('href', pageControls.nextURL());
		}

		if (pageControls.previousPage) {
			pageControls.previousPage.setAttribute('href', pageControls.previousURL());
		}

		$(document).on("keyup", function (e) {
    		if (e.keyCode === 78) {
    			window.location.replace(pageControls.nextURL());
    		} else if (e.keyCode === 66) {
    			window.location.replace(pageControls.previousURL());
    		}
		});
	};
};

var pages = [
	new Page('../1_button/', 'button.html', 1),
	new Page('../2_invitation/', 'invitation.html', 2),
	new Page('../3_neededInformation/', 'neededinformation.html', 3)
];
