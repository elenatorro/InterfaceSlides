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
