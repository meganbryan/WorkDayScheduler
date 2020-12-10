var date = dayjs().format()
var currentHour = parseInt (dayjs().format("HH"))
var currentDay = dayjs().format(`MMMM D, YYYY`)
$("#currentDay").text(currentDay)
var textContent = $(".textArea")

for (var i=0; i < textContent.length; i++) {
    var j = 9
    var hourNumber = i + j 
    if (hourNumber < currentHour) {
        textContent[i].setAttribute("class", "col-10 textArea row past")
    }
    else if (hourNumber === currentHour) {
        textContent[i].setAttribute("class", "col-10 textArea row present")
    }
    else {
        textContent[i].setAttribute("class", "col-10 textArea row future")
    }
}

storeText ()