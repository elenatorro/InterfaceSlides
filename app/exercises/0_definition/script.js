
//---- Steps ----------------------------
var step1 = new Step('"Space where interactions between humans and machines occur."', 
					'Wikipedia', 'step-1');

var step2 = new Step('"The manner in which users are presented with information on a computer screen or how they enter data into a software program."', 
					'Cambridge Dictionary', 'step-2');

var step3 = new Step('"Set of elements combined to display data in both a beautiful and useful way"', 
					'Me explaining to a friend', 'step-3');

var step4 = new Step('"All the buttons and stuff you use to make your computer or mobile phone work easier."', 
					'Me explaining to my grandma', 'step-4');

var step5 = new Step('"Sometimes it works, sometimes it make\'s it more complicated."',
					'My grandma answering to me', 'step-5');

//---- Exercise -------------------------
var exercise = new Exercise('Interface', [step1, step2, step3, step4, step5]);

//---- Controls -------------------------
var pageControls = new PageControls(pages, 'definition', exercise);
pageControls.init();

//---- Init -----------------------------
exercise.init();