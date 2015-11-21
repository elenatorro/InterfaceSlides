//---- Actions --------------------------
function drawLine(mouse) {
	var circle = document.getElementById('target').getBoundingClientRect();
	var width  = circle.width;
	var height = circle.height;

	var centerX = circle.left + width / 2;
	var centerY = circle.top + height / 2;

	var startPoint = [centerX, centerY];
	var endPoint = [mouse.pageX, mouse.pageY];

    var rise=endPoint[1]-startPoint[1],
    run=endPoint[0]-startPoint[0],
    width=Math.sqrt((rise*rise)+(run*run));

	var line=document.getElementById('line');
	line.style.top=startPoint[0]+'px';
	line.style.left=startPoint[1]+'px';
	line.style.width=width+"px";
};

function seeCircle() {
	document.body.addEventListener("mousemove", drawLine, true);
};

function hideFittsLaw() {
	document.getElementById('identification-1').classList.add('hidden');
};

function stopLine() {
	document.body.removeEventListener("mousemove", function(event) {
		event.preventDefault();
	}, false);
	hideFittsLaw();
};

function hideTogether() {
	document.getElementById('identification-2').classList.add('hidden');
};

//---- Steps ----------------------------
var step1 = new Step('Fitt\'s Law', 
					'\"The time to acquire a target is a function of the distance to and size of the target\"', 
					'identification-1', seeCircle);

var step2 = new Step('What is together belongs together', 
					'They will only focus on certain elements', 'identification-2', stopLine);

var step3 = new Step('Metaphores', 
					'The use of metaphores is essential, but be careful', 
					'identification-3', hideTogether);


//---- Exercise -------------------------
var exercise = new Exercise('Identification', [step1, step2, step3]);

//---- Init -----------------------------
exercise.init();

//---- Controls -------------------------
var pageControls = new PageControls(pages, 2);
pageControls.init();