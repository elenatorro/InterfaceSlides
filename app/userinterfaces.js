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

		exercise.steps.forEach(function(step) {
			this.steps.appendChild(step.createElement());
		});

		document.getElementById('exercise--title').innerHTML = exercise.title;

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

function Step(name, description, targetElement, doSomething) {
	var step         = this;
	this.name        = name;
	this.description = description;
	this.targetElement = document.getElementById(targetElement);
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
