//---- Actions --------------------------
function waitButton() {
  $("#wait-button").click(function() {
      var $btn = $(this);
      $btn.button('loading');
      setTimeout(function () {
        document.getElementById('joined').classList.remove('hidden');
          $btn.button('reset');
      }, 2000);
  });
};


function modalButton() {
  $('.js-loading-bar').modal({
  backdrop: 'static',
  show: false
});

$('#enroll').click(function() {
  var $modal = $('.js-loading-bar'),
      $bar = $modal.find('.progress-bar');
  
  $modal.modal('show');
  $bar.addClass('animate');

  setTimeout(function() {
    $bar.removeClass('animate');
    $modal.modal('hide');
  }, 1500);
});
}

var preview, completedInputs;

$(document).ready(function () {
	preview = $(".form-preview");
    $(".progress-input").change(function () {
        completedInputs = 0;
        $(".progress-input").each(function (index) {
            if($(this).val()) {
                completedInputs++;
                preview[index].innerHTML = $(this).val();
            }
        });
        $("#progress-info-bar").css("width", (completedInputs*25)+"%");
    })
});

//---- Steps ----------------------------
var step1 = new Step('Inmediate feedback', 
					'People needs to know there\'s something to wait for', 'step-1', waitButton);

var step2 = new Step('Progress indicators',
					'You can use overlays with loading info to avoid moving from one page to another', 
					'step-2', modalButton);

var step3 = new Step('Live preview', 
					'See how it will look like', 
					'step-3');

//---- Exercise -------------------------
var exercise = new Exercise('Loading feedback', [step1, step2, step3]);

//---- Controls -------------------------
var pageControls = new PageControls(pages, 'loadingStatus', exercise);
pageControls.init();

//---- Init -----------------------------
exercise.init();