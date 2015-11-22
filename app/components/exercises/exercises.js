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
		exercise.nextStep.addEventListener('click', exercise.next, true);
		exercise.previousStep.addEventListener('click', exercise.previous, true);

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
