//00:00:00 형태를 만들기 위한 함수
function paddedFormat(num) {
    return num < 10 ? "0" + num : num;
}

function startCountDown(duration, element) {
    //초로 바뀜
    let secondsRemaining = duration;
    let hour,
        min,
        sec = 0;

    let countInterval = setInterval(function () {
        hour = parseInt(secondsRemaining / 3600);
        min = parseInt(secondsRemaining / 60);
        sec = parseInt(secondsRemaining % 60);

        element.textContent = `${paddedFormat(hour)}:${paddedFormat(
            min
        )}:${paddedFormat(sec)}`;

        secondsRemaining -= 1;
        if (secondsRemaining < 0) {
            clearInterval(countInterval);
        }
    }, 1000);
}

//초깃값
window.onload = function () {
    let time_hours = 0; //value in hours
    let time_minutes = 1; // Value in minutes
    let time_seconds = 30; // Value in seconds

    //초 기준으로 계산
    let duration = time_hours * 3600 + time_minutes * 60 + time_seconds;

    let element = document.querySelector("#count-down-timer");
    element.textContent = `${paddedFormat(time_hours)}:${paddedFormat(
        time_minutes
    )}:${paddedFormat(time_seconds)}`;

    startCountDown(duration, element);
};
