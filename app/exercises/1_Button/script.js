//---- Actions --------------------------

//---- Steps ----------------------------
var step1 = new Step('A button should look like a button', 
					'Make people want to click', 'step-1', function(){});

var step2 = new Step('Content is important', 
					'Provide specific information', 'step-2', function(){});

var step3 = new Step('Take care with contrasts', 
					'Blue, red and also green color/backgrounds are hard to see', 'step-3', function(){});

//---- Exercise -------------------------
var exercise = new Exercise('Is it a button?', [step1, step2, step3]);

//---- Controls -------------------------
var pageControls = new PageControls(pages, 'button', exercise);
pageControls.init();

//---- Init -----------------------------
exercise.init();