function sort(){
    $( "#sortable" ).sortable({
      cursor: "crosshair",
      opacity: 0.7,
      helper: "clone"
    });
    $( "#sortable" ).disableSelection();
};

function drag() {
    $( "#draggable" ).sortable();
    $( "#draggable" ).disableSelection();
};

function drop() {
    $( ".draggableCourse" ).draggable({
      cursor: "pointer",
      opacity: 0.7,
      helper: "clone"
    });

    $( "#droppableCourse" ).droppable({
      accept: ".draggableCourse",
      activeClass: "ui-state-hover",
      hoverClass: "ui-state-active",
      drop: function( event, ui ) {
        $( "<li class='alert alert-info draggable draggableCourse'></li>" ).text( ui.draggable.text() ).appendTo( this );
        $(ui.draggable).remove();
      }
    });
};

//---- Steps ----------------------------
var step1 = new Step('Feedback and invitations', 
                    'Indicate draggability.', 'step-1', drag);

var step2 = new Step('Dragging', 
                    '', 'step-2', sort);

var step3 = new Step('Dropping', 
                    'Make it direct. Keep user informed.', 'step-3', drop);

var step4 = new Step('Alternative ways', 
                    'Provide alternative ways to interact with the site instead of using only drag and drop', 'step-3', function(){});
//---- Exercise -------------------------
var exercise = new Exercise('Drag And Drop', [step1, step2, step3, step4]);

//---- Controls -------------------------
var pageControls = new PageControls(pages, 'draganddrop', exercise);
pageControls.init();

//---- Init -----------------------------
exercise.init();