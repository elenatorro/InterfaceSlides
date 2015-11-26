
//---- Steps ----------------------------
var step1 = new Step('User Interface Design', 
					'Codemotion 2015', 'step-1');

var step2 = new Step('Elena Torro', 
					'Multimedia Engineering Bachellor. UX Lover. Currently: Software Developer at Gemalto in Alicante. Master in Languages and Computer Systems.', 'step-2');

var step3 = new Step('Interactive Demo', 
					'No slides, I prefer interaction. Built with love for you :)', 'step-3');

//---- Exercise -------------------------
var exercise = new Exercise('Hello World!', [step1, step2, step3]);

//---- Controls -------------------------
var pageControls = new PageControls(pages, 'principal', exercise);
pageControls.init();

//---- Init -----------------------------
exercise.init();