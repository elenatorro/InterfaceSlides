//---- Actions --------------------------

//---- Steps ----------------------------
var step1 = new Step('Weak', 
					'I don\'t have a good conection', 'step-1');

var step2 = new Step('Better', 
					'There is a connection, but no contrast', 'step-2');

var step3 = new Step('Best', 
					'Conection and contrast, we know where it belongs', 'step-3');

//---- Exercise -------------------------
var exercise = new Exercise('Tabs', [step1, step2, step3]);

//---- Controls -------------------------
var pageControls = new PageControls(pages, 'usetabs', exercise);
pageControls.init();

//---- Init -----------------------------
exercise.init();