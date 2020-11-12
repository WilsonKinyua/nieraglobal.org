$(document).ready(function () {
    $('#addCategoryButton').click(function () {
        $('#addCategoryButton').hide();
        $('#AddCategoryForm').show();
    });

    $('#ShowAddGalleryButton').click(function () {
        $('#PostButtons').hide();
        $('#AddGalleryForm').show();
    });

    $('#hideGalleryForm').click(function () {
        $('#PostButtons').show();
        $('#AddGalleryForm').hide();
    });

    $('#ShowAddReportButton').click(function () {
        $('#PostButtons').hide();
        $('#AddReportForm').show();
    });

    $('#hideReportForm').click(function () {
        $('#PostButtons').show();
        $('#AddReportForm').hide();
    });




    $('#post_tags').tagsInput({
        'autocomplete': {
            source: []
        }
    });

});
