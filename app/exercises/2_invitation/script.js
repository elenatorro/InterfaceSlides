//---- Actions --------------------------
var rate = function() {
	document.getElementById('rate').classList.add('hidden');
	document.getElementById('rated').classList.remove('hidden');
}

document.getElementById('rate').addEventListener('click', rate);


function searchCourses() {
	var availableCourses = ["User Interfaces", "User Experience", "Java", "JavaScript",
							"Advanced Javascript", "Mobile Interfaces", "Interface design", 
							"Web Design", "Web Interfaces"];
							
	$("#searchCourses").autocomplete({
	    source: availableCourses
	});
};
//---- Steps ----------------------------
var step1 = new Step('Call to Action Invitation', 
					'The primary tasks you want the user to accomplish', 'step-1');

var step2 = new Step('Tour Invitation', 
					'New tasks or features you want the user to discover', 'step-2');

var step3 = new Step('Search Invitation',
					'Offer different options in search forms', 'step-3', searchCourses);



//---- Exercise -------------------------
var exercise = new Exercise('Provide Invitations', [step3, step1, step2]);

//---- Controls -------------------------
var pageControls = new PageControls(pages, 'invitation', exercise);
pageControls.init();

//---- Init -----------------------------
exercise.init();