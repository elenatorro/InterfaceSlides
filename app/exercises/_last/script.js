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
var step1 = new Step('Wanna know more?', 
					'100 things every designer needs to know about people. Don\'t make me think. Designing Web Interfaces.', 'step-1', hideOthers);

var step2 = new Step('Questions?', 
					'Spanish || English', 'step-2', hideOthers);

var step3 = new Step('Thanks', 
					'Hope you enjoyed it :)', 'step-3', hideOthers);

//---- Exercise -------------------------
var exercise = new Exercise('The End', [step1, step2, step3]);

//---- Controls -------------------------
var pageControls = new PageControls(pages, 'end', exercise);
pageControls.init();

//---- Init -----------------------------
exercise.init();