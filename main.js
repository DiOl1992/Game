// ..............Найди клад!!!

// Получитьслучайноечислоот 0 до size-1
var getRandomNumber = function (size) {
  return Math.floor(Math.random() * size);
};

// Вычислитьрасстояниеотклика (event) доклада (target)
var getDistance = function (event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
};
// Получить для расстояния строку подсказки
var getDistanceHint = function (distance) {
  if (distance < 30) {
    return "Обожжешься!";
  } else if (distance < 50) {
    return "Очень горячо!";
  } else if (distance < 70) {
    return "Горячо!";
  } else if (distance < 150) {
    return "Тепло!";
  } else if (distance < 200) {
    return "Холодно!";
  } else if (distance < 250) {
    return "Очень холодно!";
  } else if (distance < 300) {
    return "Очень очень холодно!";
  } else {
    return "Замерзнешь!";
  }
};
// Создаем переменные
var width = 800;
var height = 800;
var clicks = 0;
let maxClicks = 50;
// Случайная позиция клада
var target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height),
};
// Добавляем элементу img обработчик клик
$("#map").click(function (event) {
  // Получаем расстояние от места клика до клада
  var distance = getDistance(event, target);
  // Преобразуем расстояние в подсказку
  var distanceHint = getDistanceHint(distance);
  console.log(distance);

  if (distance > 25 && clicks < maxClicks) {
    clicks++;
    // Записываем в элемент #distance новую подсказку
    $("#main-heading").text(
      "Найди сокровище! У тебя есть кликов: " + (maxClicks - clicks) + " =)"
    );
    $("#distance").text(distanceHint);
  }

  // Если клик был достаточно близко, поздравляем с победой
  else if (distance < 25 && clicks < maxClicks) {
    alert("Клад найден! Сделано кликов: " + clicks);
    alert("Начать новую игру?");
    clicks = 0;
    $("#main-heading").text("Найди сокровище! У тебя есть 50 кликов =)");
    $("#distance").text("");
  } else if (clicks == maxClicks) {
    alert("Вы проиграли! КОНЕЦ ИГРЫ!");
    alert("Начать новую игру?");
    clicks = 0;
    $("#main-heading").text("Найди сокровище! У тебя есть 50 кликов =)");
    $("#distance").text("");
  }
});
