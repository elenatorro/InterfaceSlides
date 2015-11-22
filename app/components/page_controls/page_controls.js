function Page(path, name) {
	var page = this;

	this.path  = path;
	this.name  = name;
	this.file  = 'index.html';

	this.getURL = function() {
		return page.path + page.file;
	};

	return page;
};

function PageControls(pages, pageName, exercise) {
	var pageControls = this;
	this.pages        = pages;
	this.pageName     = pageName;
	this.exercise     = exercise;
	this.index        = 0;
	this.nextPage     = document.getElementById('next-page');
	this.previousPage = document.getElementById('previous-page');

	this.next = function() {
		if (pageControls.index < pageControls.pages.length-1) {
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

	this.getURL = function() {
		return pageControls.pages[pageControls.index].getURL();
	};

	this.previousURL = function() {
		return pageControls.previous().getURL();
	};

	this.keyUp = {
		'37' : function() {
			pageControls.exercise.previous() || window.location.replace(pageControls.previousURL());
		},
		'39' : function() {
			pageControls.exercise.next() || window.location.replace(pageControls.nextURL());
		}
	};

	this.init = function() {
		pageControls.pages.forEach(function(page, index) {
			if (pageControls.pageName == page.name) {
				pageControls.index = index;
			}
		});

		if (pageControls.nextPage) {
			pageControls.nextPage.setAttribute('href', pageControls.nextURL());
		}

		if (pageControls.previousPage) {
			pageControls.previousPage.setAttribute('href', pageControls.previousURL());
		}

		var next, prev;

		$(document).on("keyup", function (e) {
			if (pageControls.keyUp[e.keyCode]) {
				pageControls.keyUp[e.keyCode]();
			}
		});
	};
};

var pages = [
	new Page('../../../', 'principal'),
	new Page('../1_button/', 'button'),
	new Page('../2_invitation/', 'invitation'),
	new Page('../22_dragAndDrop/', 'draganddrop'),
	new Page('../3_neededInformation/', 'neededInformation'),
	new Page('../4_textInformation/', 'textinformation'),
	new Page('../5_identification/', 'identification'),
	new Page('../6_discoverability/', 'discoverability'),
	new Page('../7_distribution/', 'distribution'),
	new Page('../9_inlayoverlay/', 'inlayoverlay'),
	new Page('../10_loadingStatus/', 'loadingStatus'),
	new Page('../13_scrolling/', 'scrolling'),
	new Page('../14_useTabs/', 'usetabs'),
	new Page('../15_transitions/', 'transitions')
];
