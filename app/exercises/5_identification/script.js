//---- Actions --------------------------
function calculateFitts(mouse, target, timeTarget) {
	shape = document.getElementById(target).getBoundingClientRect();
	var shapeWidth  = shape.width;
	var shapeHeight = shape.height;

	var centerX = shape.left + shapeWidth / 2;
	var centerY = shape.top + shapeHeight / 2;

	var startPoint = [centerX, centerY];
	var endPoint = [mouse.pageX, mouse.pageY];

    var rise=endPoint[1]-startPoint[1],
    run=endPoint[0]-startPoint[0],
    width=Math.sqrt((rise*rise)+(run*run));

	drawFitts(0.02, 1, width, shapeWidth, timeTarget);
};

function getShapes(mouse) {
	calculateFitts(mouse, 'target', 'time-to-target');
	calculateFitts(mouse, 'target2', 'time-to-target2');
};

function drawFitts(a, b, D, W, timeTarget) {
	document.getElementById(timeTarget).innerHTML = a + b*Math.log2(D/W + 1);
}
function seeShape() {
	document.body.addEventListener("mousemove", getShapes, true);
};

function hideFittsLaw() {
	document.getElementById('step-1').classList.add('hidden');
};

function stopLine() {
	document.body.removeEventListener("mousemove", function(event) {
		event.preventDefault();
	}, false);
	hideFittsLaw();
};

function hideTogether() {
	document.getElementById('step-2').classList.add('hidden');
};

//---- Steps ----------------------------
var step1 = new Step('Fitt\'s Law', 
					'\"The time to acquire a target is a function of the distance to and size of the target\": \n Time = a + b log2(Distance/TargetWidth)', 
					'step-1', seeShape);

var step2 = new Step('What is together belongs together', 
					'They will only focus on certain elements', 'step-2', stopLine);

var step3 = new Step('Metaphores', 
					'The use of metaphores is essential, but be careful', 
					'step-3', hideTogether);


//---- Exercise -------------------------
var exercise = new Exercise('Identification', [step1, step2, step3]);

//---- Controls -------------------------
var pageControls = new PageControls(pages, 'identification', exercise);
pageControls.init();

//---- Init -----------------------------
exercise.init();