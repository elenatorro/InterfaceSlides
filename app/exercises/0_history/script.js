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
var step1 = new Step('Command-line interface (CLI) ', 
					'Complicated. For experts. Fast. Flexible.', 'step-1', hideOthers);

var step2 = new Step('Menu-based interfaces', 
					'Structure. Keyboard and mouse. Menus: basic element nowadays.', 'step-2', hideOthers);

var step3 = new Step('Graphical User Interfaces - GUI. (1973)', 
					'Colors, shapes, tools. Interactions. WYSIWYG. Action-Reaction. Desktop OS.', 'step-3', hideOthers);

var step4 = new Step('Object-oriented interfaces', 
					'GUI evolution. Object-Action', 'step-4', hideOthers);

//---- Exercise -------------------------
var exercise = new Exercise('A bit of history', [step1, step2, step3, step4]);

//---- Controls -------------------------
var pageControls = new PageControls(pages, 'history', exercise);
pageControls.init();

//---- Init -----------------------------
exercise.init();