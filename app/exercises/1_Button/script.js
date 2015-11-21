//---- Actions --------------------------
var stepAction = function() {
	console.log('holi');
};

//---- Steps ----------------------------
var step1 = new Step('Holi', 'This is a step', 'example', stepAction);
var step2 = new Step('Holi 2', 'This is another step', 'example2', stepAction);

step1.getElement().addEventListener('click', stepAction, false);

//---- Exercise -------------------------
var exercise = new Exercise('Title', [step1, step2]);

//---- Init -----------------------------
exercise.init();
//---- Controls -------------------------
var pageControls = new PageControls(pages, 1);
pageControls.init();