var saveBtn = $(".savebtn")

$(document).ready(function() {
    var date = $("#currentDay")
    date.text(dayjs().format('MMMM DD YYYY'))

    var currentHour = dayjs().hour();
    var timeBlock = $('.time-block');
    timeBlock.each(function() {
        var id = $(this).attr("id")
        if(id < currentHour) {
            $(this).children(".description").attr("class", "col-8 col-md-10 description past")
        }
    })


});