//---- Actions --------------------------
var rate = function() {
	document.getElementById('rate').classList.add('hidden');
	document.getElementById('rated').classList.remove('hidden');
}

document.getElementById('rate').addEventListener('click', rate);
//---- Steps ----------------------------
var step1 = new Step('Call to Action Invitation', 
					'The primary tasks you want the user to accomplish', 'invitations-1', function(){});

var step2 = new Step('Tour Invitation', 
					'New tasks or features you want the user to discover', 'invitations-2', function(){});



//---- Exercise -------------------------
var exercise = new Exercise('Provide Invitations', [step1, step2]);

//---- Init -----------------------------
exercise.init();

//---- Controls -------------------------
var pageControls = new PageControls(pages, 1);
pageControls.init();