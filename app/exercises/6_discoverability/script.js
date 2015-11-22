//---- Actions --------------------------
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


//---- Steps ----------------------------
var step1 = new Step('Anti-Pattern', 
					'Important information must be accessible', 
					'step-1');

var step2 = new Step('Anti-Pattern', 
					'Information structure can break', 'step-2');

var step3 = new Step('Don\'t use only icons', 
					'Provide more information', 
					'step-3');


//---- Exercise -------------------------
var exercise = new Exercise('Discoverability: Hovers', [step1, step2, step3]);

//---- Controls -------------------------
var pageControls = new PageControls(pages, 'discoverability', exercise);
pageControls.init();

//---- Init -----------------------------
exercise.init();