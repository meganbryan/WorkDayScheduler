var date = dayjs().format()
var currentHour = parseInt (dayjs().format("HH"))
var currentDay = dayjs().format(`MMMM D, YYYY`)
$("#currentDay").text(currentDay)
