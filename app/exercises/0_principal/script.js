
//---- Steps ----------------------------
var step1 = new Step('Interface Design', 
					'Codemotion 2015', 'step-1');

var step2 = new Step('Elena Torro', 
					'Software Developer.', 'step-2');

var step3 = new Step('Interactive Demo', 
					'Built with love for you :)', 'step-3');

//---- Exercise -------------------------
var exercise = new Exercise('Hello World!', [step1, step2, step3]);

//---- Controls -------------------------
var pageControls = new PageControls(pages, 'principal', exercise);
pageControls.init();

//---- Init -----------------------------
exercise.init();