$(document).ready(function () {
    $('#addCategoryButton').click(function () {
        $('#addCategoryButton').hide();
        $('#AddCategoryForm').show();
    });

    $('#HideCategoryButton').click(function () {
        $('#addCategoryButton').show();
        $('#AddCategoryForm').hide();
    });

    $('#post_tags').tagsInput({
        'autocomplete': {
            source: []
        }
    });

});
