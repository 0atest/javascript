function myalert1() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var sum = parseInt(num1) + parseInt(num2);

  alert(sum);
}
function myalert2() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var minus = parseInt(num1) - parseInt(num2);

  alert(minus);
}
function myalert3() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var multiply = parseInt(num1) * parseInt(num2);

  alert(multiply);
}
function myalert4() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var divide = parseInt(num1) / parseInt(num2);

  alert(divide);
}

function myalert5() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var total = ((num2 /100) **2);
  var bmi = parseInt(num1) / parseInt(total);

  alert(bmi.toFixed(2));
}

function myalert() {
    alert("Helloooooo");
}

const img = document.createElement("img");
img.src = "img/pic.jpg";
img.style.width = "200px";

document.getElementById("myDiv").appendChild(img);