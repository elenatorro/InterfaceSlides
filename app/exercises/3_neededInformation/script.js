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
					'We all learned to read a structured information', 'information-1', hideOthers);

var step2 = new Step('People don\'t read pages, people scan pages', 
					'They will only focus on certain elements', 'information-2', hideOthers);

var step3 = new Step('Delete unnecessary information', 
					'Reduces noise, makes useful content prominent, reduces redundancy', 
					'information-3', hideOthers);


//---- Exercise -------------------------
var exercise = new Exercise('Use only needed information', [step1, step2, step3]);

//---- Init -----------------------------
exercise.init();

//---- Controls -------------------------
var pageControls = new PageControls(pages, 2);
pageControls.init();