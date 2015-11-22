//---- Actions --------------------------

function disturbingModal() {
	document.getElementById('disturbing-modal-trigger').addEventListener('mouseover', function() {
		$('#disturbing-modal').modal('show')
	});
};

//---- Steps ----------------------------
var step1 = new Step('Don\'t disturb the user', 
					'', 'step-1', disturbingModal);

var step2 = new Step('Keep transitions near the user\'s area of focus', 
					'More discoverable, and less "advertising" style', 'step-2', function(){});

var step3 = new Step('Symmetry of Interaction',
					'When a object is moved and collapsed to a new stop, the user should be able to open it with the reverse transition', 'step-3', function(){});

//---- Exercise -------------------------
var exercise = new Exercise('Transitions', [step1, step2, step3]);

//---- Controls -------------------------
var pageControls = new PageControls(pages, 'transitions', exercise);
pageControls.init();

//---- Init -----------------------------
exercise.init();