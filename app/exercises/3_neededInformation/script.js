//---- Actions --------------------------
var hideOthers = function() {
	var currentStep = this;
	exercise.steps.forEach(function(step) {
		if (step.targetElement != currentStep.targetElement) {
			step.targetElement.classList.add('hidden');
		} else {
			step.targetElement.classList.remove('hidden');
		}
	})
};
//---- Steps ----------------------------
var step1 = new Step('Use conventions', 
					'We all learned to read a structured information', 'step-1', hideOthers);

var step2 = new Step('People don\'t read pages, people scan pages', 
					'They will only focus on certain elements', 'step-2', hideOthers);

var step3 = new Step('Delete unnecessary information', 
					'Reduces noise, makes useful content prominent, reduces redundancy', 
					'step-3', hideOthers);


//---- Exercise -------------------------
var exercise = new Exercise('Use only needed information', [step1, step2, step3]);

//---- Controls -------------------------
var pageControls = new PageControls(pages, 'neededInformation', exercise);
pageControls.init();


//---- Init -----------------------------
exercise.init();
