//---- Actions --------------------------

//---- Steps ----------------------------
var step1 = new Step('Virtual Scrolling',
					'Intuitive. It should look like a scrolling element. Use progressive loading when the content is large or unknown', 'step-1');

var step2 = new Step('Inside the scroll', 
					'Don\'t place relevant information at the end of the scroll.', 'step-2');

var step3 = new Step('Carousel', 
					'Display information. Number of elements. Big enough to be visible. Not only images.', 'step-3');


//---- Exercise -------------------------
var exercise = new Exercise('Scrolling', [step1, step2, step3]);

//---- Controls -------------------------
var pageControls = new PageControls(pages, 'scrolling', exercise);
pageControls.init();

//---- Init -----------------------------
exercise.init();