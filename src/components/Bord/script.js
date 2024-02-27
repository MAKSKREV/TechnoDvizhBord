// Устанавливаем время в секундах
var timeLeft = 120;

// Функция для обновления таймера
function updateTimer() {
    // Получаем элемент с id "timer"
    var timerElement = document.getElementById("timer");

    // Вычисляем минуты и секунды
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;

    // Добавляем ведущий ноль, если значение минут или секунд меньше 10
    var formattedMinutes = ("0" + minutes).slice(-2);
    var formattedSeconds = ("0" + seconds).slice(-2);

    // Обновляем текст в элементе таймера
    timerElement.textContent = formattedMinutes + ":" + formattedSeconds;

    // Уменьшаем время на 1 секунду
    timeLeft--;

    // Проверяем, если время закончилось, останавливаем таймер
    if (timeLeft < 0) {
        clearInterval(timerInterval);
        timerElement.textContent = "Время вышло!";
    }
}

// Запускаем таймер каждую секунду
var timerInterval = setInterval(updateTimer, 1000);