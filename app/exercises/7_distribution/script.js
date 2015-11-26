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
var step1 = new Step('Titles', 
					'Use title levels to distribute and classify information.', 
					'step-1', hideOthers);

var step2 = new Step('Hierarchy', 
					'People tend to classify things, and it helps to know where you are', 
					'step-2', hideOthers);

var step3 = new Step('You are here', 'Don\'t let your users get lost', 'step-3', hideOthers);


//---- Exercise -------------------------
var exercise = new Exercise('Distribution', [step1, step2, step3]);

//---- Controls -------------------------
var pageControls = new PageControls(pages, 'distribution', exercise);
pageControls.init();

//---- Init -----------------------------
exercise.init();