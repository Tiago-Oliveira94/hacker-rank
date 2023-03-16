/*
    Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
    Example

    s = '12:01:00PM'
    Return '12:01:00'.

    s = '12:01:00AM'
    Return '00:01:00'.

    s = '07:05:45PM'
    Return '19:05:45'
*/

const time = '01:05:45PM'
function timeConversion(time) {
    var { hour, minutes, seconds, period } = parseTime(time)

    if (hour == '12' && period == 'AM') {
        hour = '00'
    }
    else if (+hour == 12 && period == 'PM') {
        hour = '12'
    }
    else if (period == 'PM') {
        hour = (+hour + 12).toString()
    }

    console.log(`${hour}:${minutes}:${seconds}`)
}

function parseTime(time) {
    let hour = ''
    hour += time.charAt(0)
    hour += time.charAt(1)

    let minutes = ''
    minutes += time.charAt(3)
    minutes += time.charAt(4)

    let seconds = ''
    seconds += time.charAt(6)
    seconds += time.charAt(7)

    let period = ''
    period += time.charAt(time.length - 2)
    period += time.charAt(time.length - 1)

    return { hour, minutes, seconds, period }
}

timeConversion(time)