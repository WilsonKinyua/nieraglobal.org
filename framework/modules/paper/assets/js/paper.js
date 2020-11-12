$('#addUserTypeButton').click(function () {
    $('#AddUserTypeForm').show();
    $('#addUserTypeButton').hide();
});
$('#HideAddUserType').click(function () {
    $('#AddUserTypeForm').hide();
    $('#addUserTypeButton').show();
});

//add reviewer

$('#addUserReviewerButton').click(function () {
    $('#AddReviewerForm').slideDown();
    $('#action_buttons').slideUp();
});
$('#HideAddReviewer').click(function () {
    $('#AddReviewerForm').slideUp();
    $('#action_buttons').slideDown();
});


//send back to author
$('#sendBackToAuthorButton').click(function () {
    $('#sendBackToAuthorForm').slideDown();
    $('#action_buttons').slideUp();
});
$('#HideSendBackToAuthor').click(function () {
    $('#sendBackToAuthorForm').slideUp();
    $('#action_buttons').slideDown();
});

//reject form

$('#rejectPaperButton').click(function () {
    $('#rejectForm').slideDown();
    $('#action_buttons').slideUp();
});
$('#HiderejectForm').click(function () {
    $('#rejectForm').slideUp();
    $('#action_buttons').slideDown();
});