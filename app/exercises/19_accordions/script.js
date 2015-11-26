//---- Actions --------------------------
//---- Steps ----------------------------
var step1 = new Step('Where is the content?', 
					'Make clear you can expand/collapse a container', 'step-1');

var step2 = new Step('Use animations',
					'Don\' make the content appear or disappear instantly.', 'step-2');

var step3 = new Step('Again: don\'t hide important actions', 
					'Avoid hiding relevant information or interactive elements', 'step-3');

//---- Exercise -------------------------
var exercise = new Exercise('Expand And Collapse', [step1, step2, step3]);

//---- Controls -------------------------
var pageControls = new PageControls(pages, 'accordions', exercise);
pageControls.init();

//---- Init -----------------------------
exercise.init();