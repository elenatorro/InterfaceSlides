function Exercise(title, steps) {
	var exercise      = this;
	this.title        = title;
	this.nextStep     = document.getElementById('next-step');
	this.previousStep = document.getElementById('previous-step');
	this.steps        = steps; 
	this.currentStep  = 0;
	this.stepsList    = document.getElementById('steps');

	this.getSteps = function() {
		return this.steps;
	};

	this.next = function() {
		if (exercise.currentStep < exercise.steps.length) {
			exercise.steps[exercise.currentStep++].show();
			return true;
		} else {
			return false;
		}
	};

	this.previous = function() {
		if (exercise.currentStep > 0) {
			exercise.steps[--exercise.currentStep].hide();
			return true;
		} else {
			return false;
		}
	};

	this.init = function() {
		exercise.steps.forEach(function(step) {
			this.steps.appendChild(step.createElement());
		});

		document.getElementById('exercise--title').innerHTML = exercise.title;
	};

	this.getCurrentStep = function() {
		return exercise.steps[exercise.currentStep];
	};

	this.addStep = function(step) {
		exercise.stepList.appendChild(step.getElement());
	};

	return exercise;
};

function Step(name, description, targetElement, doSomething) {
	var step         = this;
	this.name        = name;
	this.description = description;
	this.target      = '#' + targetElement;
	this.targetElement = document.getElementById(targetElement) || document.body;
	this.stepsList   = document.getElementById('steps');
	this.doSomething = doSomething; 
	this.template    = '<h3><span class="glyphicon glyphicon-ok" aria-hidden="true"></span>  ' + this.name + '<h3><h4> ' + this.description + '</h4>';

	this.getElement = function() {
		return step.element;
	};

	this.createElement = function() {
		step.element = document.createElement('li');
		step.element.innerHTML = step.template;
		step.element.classList.add('step--element');
		step.element.classList.add('hidden');
		return step.element;
	};

	this.show = function() {
		step.element.classList.add('visible');
		step.element.classList.remove('hidden');
		step.targetElement.classList.add('visible');
		step.targetElement.classList.remove('hidden');
		window.location.replace(window.location.pathname + step.target);
		if (step.doSomething) {
			step.doSomething();
		}
	};

	this.hide = function() {
		step.element.classList.add('hidden');
		step.element.classList.remove('visible');
		step.targetElement.classList.add('hidden');
		step.targetElement.classList.remove('visible');
	};

	return step;
};
/* npm text-stats -->  https://www.npmjs.com/package/text-stats */
var textStats = {
	stats: function(text) {
		var data;
		if (text.length) {
			data = {
				sentences: this.sentences(text),
				words: this.words(text),
				syllables: this.syllables(text),
				characters: this.characters(text),
				carpar: this.charactersWords(text),
				gulpease: this.gulpease(text),
				gunningFog: this.gunningFog(text)
			};
		}
		return data;
	},
	findSentences : function(text) {
		var sentence, sentences, result, _i, _len;
		sentences = text.split(".");
		result = [];
		for (_i = 0, _len = sentences.length; _i < _len; _i++) {
			sentence = sentences[_i];
			if (sentence.trim() !== "") {
				result.push(sentence);
			}
		}
		return result;
	},

	sentences : function(text) {
		return this.findSentences(text).length;
	},

	findWords : function(sentence) {
		return sentence.match(/[A-z\u00E0-\u00FC]+/g);
	},

	words : function(sentence) {
		return this.findWords(sentence).length;
	},

	findSyllables : function(word) {
		word = word.toLowerCase();
		if (word.length <= 3) {
			return 1;
		}
		word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
		word = word.replace(/^y/, '');
		return word.match(/[aeiouy]{1,2}/g);
	},

	syllables : function(word) {
		return this.findSyllables(word).length;
	},

	characters : function(sentence) {
		var word, tot, _i, _len;
		sentence = this.findWords(sentence);
		tot = 0;
		for (_i = 0, _len = sentence.length; _i < _len; _i++) {
			word = sentence[_i];
			if (word !== null) {
				tot += word.length;
			}
		}
		return tot;
	},

	charactersWords : function(sentence) {
		var result, tot;
		tot = this.characters(sentence);
		result = tot / this.words(sentence);
		return result.toFixed(1);
	},

	gulpease : function(text) {
		var _characters, _sentences, _words, _result;
		_sentences = this.sentences(text);
		_characters = this.characters(text);
		_words = this.words(text);
		_result = 89 + ((300 * _sentences) - 10 * _characters) / _words;
		return parseInt(_result, 10);
	},

	gunningFog : function(text) {
		var word, _sentences, _i, _len, _words, _wordsComplesse, _result;
		_sentences = this.sentences(text);
		_words = this.words(text);
		_wordsComplesse = 0;
		for (_i = 0, _len = _words.length; _i < _len; _i++) {
			word = _words[_i];
			if (this.syllables(word) > 2) {
				_wordsComplesse += 1;
			}
		}
		_result = 0.4 * ((_words / _sentences) + 100 * (_wordsComplesse / _words));
		return parseInt(_result, 10);
	}
};
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
			pageControls.nextPage.addEventListener('click', pageControls.keyUp['39']);
		}

		if (pageControls.previousPage) {
			pageControls.previousPage.addEventListener('click', pageControls.keyUp['37']);
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
	new Page('../0_principal/', 'principal'),
	new Page('../0_definition/', 'definition'),
	new Page('../0_history/', 'history'),
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
	new Page('../15_transitions/', 'transitions'),
	new Page('../_last/', 'end')
];
