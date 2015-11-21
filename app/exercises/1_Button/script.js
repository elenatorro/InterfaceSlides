//---- Actions --------------------------

//---- Steps ----------------------------
var step1 = new Step('A button should look like a button', 
					'Make people want to click', 'buttons-1', function(){});

var step2 = new Step('Content is important', 
					'Provide specific information', 'buttons-2', function(){});

var step3 = new Step('Take care with contrasts', 
					'Blue, red and also green color/backgrounds are hard to see', 'buttons-3', function(){});

//---- Exercise -------------------------
var exercise = new Exercise('Is it a button?', [step1, step2, step3]);

//---- Init -----------------------------
exercise.init();

//---- Controls -------------------------
var pageControls = new PageControls(pages, 0);
pageControls.init();