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
			return exercise.steps[exercise.currentStep];
		} else {
			return false;
		}
	};

	this.previous = function() {
		if (exercise.currentStep > 0) {
			exercise.steps[--exercise.currentStep].hide();
			return exercise.steps[exercise.currentStep];
		} else {
			return false;
		}
	};

	this.init = function() {
		exercise.nextStep.addEventListener('click', exercise.next, true);
		exercise.previousStep.addEventListener('click', exercise.previous, true);

		$(document).on("keyup", function (e) {
    		if (e.keyCode === 39) {
    			exercise.next();
    		} else if (e.keyCode === 37) {
    			exercise.previous();
    		}
		});
	};

	this.getCurrentStep = function() {
		return exercise.steps[exercise.currentStep];
	};

	this.addStep = function(step) {
		exercise.stepList.appendChild(step.getElement());
	};

	return exercise;
};

function Step(name, description, element, doSomething) {
	var step         = this;
	this.name        = name;
	this.description = description;
	this.element     = document.getElementById(element);
	this.stepsList   = document.getElementById('steps');
	this.doSomething = doSomething; 
	this.template    = '<li><span class="glyphicon glyphicon-ok" aria-hidden="true"></span>  ' + this.element + '</li>';

	this.getElement = function() {
		return step.element;
	};

	this.doSomething = function(attributes) {
		step.doSomething(attributes);
	};

	this.show = function() {
		step.element.style.visibility = "visible";
	};

	this.hide = function() {
		step.element.style.visibility = "hidden";
	};

	return step;
};
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
			return pageControls.pages[pageControls.index+1];
		} else {
			return pageControls.pages[pageControls.index];
		}
	};

	this.previous = function() {
		if (pageControls.index > 0) {
			console.log('prev');
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
			console.log(e);
    		if (e.keyCode === 78) {
    			window.location.replace(pageControls.nextURL());
    		} else if (e.keyCode === 66) {
    			window.location.replace(pageControls.previousURL());
    		}
		});
	};
};

var pages = [
	new Page('../example/', 'index.html'),
	new Page('../1_Button/', 'index.html')
];
