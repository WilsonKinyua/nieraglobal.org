$(document).ready(function () {

    $('#radioBtn a').on('click', function () {
        var sel = $(this).data('title');
        var tog = $(this).data('toggle');
        $('#' + tog).prop('value', sel);

        $('a[data-toggle="' + tog + '"]').not('[data-title="' + sel + '"]').removeClass('active').addClass('notActive');
        $('a[data-toggle="' + tog + '"][data-title="' + sel + '"]').removeClass('notActive').addClass('active');
    })

    if ($("#rev_slider_1_2").length > 0) {
        if ($("#rev_slider_1_2").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_1_2");
        } else {
            revapi1 = $("#rev_slider_1_2").show().revolution({
                sliderType: "standard",
                sliderLayout: "fullscreen",
                dottedOverlay: "none",
                delay: 10000,
                navigation: {
                    keyboardNavigation: "off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    onHoverStop: "off",
                    touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    bullets: {
                        enable: true,
                        hide_onmobile: false,
                        style: "hesperiden",
                        hide_onleave: false,
                        direction: "horizontal",
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 0,
                        v_offset: 20,
                        space: 5,
                        tmp: ''
                    }
                },
                gridwidth: 1176,
                gridheight: 900,
                lazyType: "none",
                shadow: 0,
                spinner: "spinner3",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                fullScreenAlignForce: "on",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "",
                disableProgressBar: "on",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: "off",
                }
            });
        }
    }



    $("#pwd").keyup(function () {
        password_strength($("#progress-bar"), $(this).val());
        password_missmatch($("#pwd"), $("#password-mismatch"), $("#confirm-pwd").val());
    })
    $("#confirm-pwd").keyup(function () {
        password_missmatch($("#pwd"), $("#password-mismatch"), $(this).val());
    })

    $('#addUsergroupButton').click(function () {
        $('#AddUsergroupForm').show();
        $('#addUsergroupButton').hide();
    });
    $('#HideAddUsergroup').click(function () {
        $('#AddUsergroupForm').hide();
        $('#addUsergroupButton').show();
    });
    $('.editor').each(function () {
        var editor = new Jodit(this, {
            uploader: {
                url: 'uploadimageFile',
                isSuccess: function (resp) {
                    return resp;
                },
                process: function (resp) {
                    editor.selection.insertImage(resp, null, editor.options.imageDefaultWidth)
                    return {
                        message: resp.message
                    }
                }

            },
        });
    });
});

function password_missmatch(pwd, element, confirm_password) {
    if (pwd.val() != confirm_password) {
        element.show();
    } else {
        element.hide();
    }
}
function password_strength(element, password) {
    var desc = [{
        'width': '0px'
    }, {
        'width': '20%'
    }, {
        'width': '40%'
    }, {
        'width': '60%'
    }, {
        'width': '80%'
    }, {
        'width': '100%'
    }];
    var descClass = ['', 'bg-danger', 'bg-danger', 'bg-warning', 'bg-success', 'bg-success'];
    var score = 0;

    if (password.length > 6) {
        score++;
    }

    if ((password.match(/[a-z]/)) && (password.match(/[A-Z]/))) {
        score++;
    }

    if (password.match(/\d+/)) {
        score++;
    }

    if (password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) {
        score++;
    }

    if (password.length > 10) {
        console.log(score)
        score++;
    }

    element.removeClass(descClass[score - 1]).addClass(descClass[score]).css(desc[score]);
};