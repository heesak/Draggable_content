//  const dragAndDropItems = document.getElementById('team-members');

//  new Sortable ( dragAndDropItems, {
//     animation:350,
//     chosenClass: 'team-member-chosen',
//     dragClass:'team-member-drag'
//  });


$(function() {
    $("#team-members").sortable({
        placeholder: "ui-state-highlight"
    });
    $(".team-member").draggable({
        connectToSortable: "#team-members",
        helper: "clone",
        revert: "invalid"
    });
});