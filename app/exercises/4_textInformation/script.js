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

var paragraphReadability = function() {
	var paragraph = document.getElementById('paragraph');
	var stats = textStats.stats(paragraph.value);
	return 206.835 - 1.015*(stats.words/stats.sentences) - 84.6*(stats.syllables/stats.words)
};

document.getElementById('calculate-readability').addEventListener('click', function() {
	document.getElementById('paragraph-readability').innerHTML = 'Readability: ' + paragraphReadability();
});

//---- Steps ----------------------------
var step1 = new Step('Paragraph structure', 
					'People prefer to read short-width columns, although we read faster single-wide columns', 'step-1', hideOthers);

var step2 = new Step('Screens are not paper, contrast matters', 
					'Black text on white background is easier to read', 'step-2', hideOthers);

var step3 = new Step('Calculate readability', 
					'206.835 - 1.015*(words/sentences) - 84.6*(syllables/words)', 'step-3', hideOthers);


//---- Exercise -------------------------
var exercise = new Exercise('Text Information', [step1, step2, step3]);

//---- Controls -------------------------
var pageControls = new PageControls(pages, 'textinformation', exercise);
pageControls.init();


//---- Init -----------------------------
exercise.init();
