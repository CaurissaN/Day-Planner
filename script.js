var saveBtn = $(".saveBtn")
var timeBlock = $('.time-block');
var date = $("#currentDay")
var currentHour = dayjs().hour();

$(document).ready(function () {
    date.text(dayjs().format('MMMM DD YYYY'))
    saveBtn.on("click", function(event) {
        event.preventDefault()
        var text = $(this).siblings(".description").val().replace(hour)
        var hour = $(this).parent().attr("id")

        localStorage.setItem(hour, JSON.stringify(text))
    })
    for(let i = 9; i <= 17; i++) {
        $(`#${i} textarea`).val(JSON.parse(localStorage.getItem(`${i}`)))
    }
    timeBlock.each(function () {
        var id = $(this).attr("id")
        if (id < currentHour) {
            $(this).children(".description").attr("class", "col-8 col-md-10 description past")
        } else if (id > currentHour) {
            $(this).children(".description").attr("class", "col-8 col-md-10 description future")
        } else {
            $(this).children(".description").attr("class", "col-8 col-md-10 description present")
        }
    });
});