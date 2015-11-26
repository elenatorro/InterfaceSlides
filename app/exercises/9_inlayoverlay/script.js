//---- Actions --------------------------
$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
    	html: true,
		content: function() {
          return $('[data-popover="popover-content"').html();
        }
    }); 
});

document.getElementById('alert-button').addEventListener('click', function(){
	alert('This alert is the best thing you can do to disturb people using a website');
});

//---- Steps ----------------------------
var step1 = new Step('Inlay popover', 
					'Can be used to add additional information for a field', 
					'step-1');

var step2 = new Step('Don\'t user alerts','Alerts are evil', 'step-2');

var step3 = new Step('Overlay best practices', 
					'Use them to let the user stay on the page. Use it instead of pop ups. Use lightbox effect. Avoid idiot boxes.', 
					'step-3');



//---- Exercise -------------------------
var exercise = new Exercise('Inlay and Overlay', [step1, step2, step3]);

//---- Controls -------------------------
var pageControls = new PageControls(pages, 'inlayoverlay', exercise);
pageControls.init();

//---- Init -----------------------------
exercise.init();