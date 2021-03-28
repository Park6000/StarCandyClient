let openDetailSetting = function(event, target) {
    event.target.checked ? $(target).removeClass('d-none') : $(target).addClass('d-none');
}