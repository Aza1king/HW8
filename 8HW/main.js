
function appendToInput(value) {
    document.getElementById("input").value += value;
  }
  
  function calculate() {
    let input = document.getElementById("input").value;
    let result;
    
    try {
      result = eval(input);
      document.getElementById("result").innerText = `Кыйын болдубу санаш?Ответ: ${result}`;
    } catch (error) {
      document.getElementById("result").innerText = "Цифра жааз!";
    }
  }
  
  function clearInput() {
    document.getElementById("input").value = "";
    document.getElementById("result").innerText = "Резултат: ";
  }
  function calculateRoot() {
    let input = parseFloat(document.getElementById("input").value);
  
    if (input >= 0) {
      let result = Math.sqrt(input);
      document.getElementById("result").innerText = `Результат: ${result}`;
    } else {
      document.getElementById("result").innerText = "Невозможно извлечь корень из отрицательного числа";
    }
  }
  