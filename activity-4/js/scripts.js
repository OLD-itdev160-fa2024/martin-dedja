var user = "John";
var salutation = "Hello";

var greeting = salutation + ", " + user + "! Welcome to our website.";

var greetingEl = document.getElementById("greeting");

greetingEl.textContent = greeting;

var productPrice = 100;
var studentDiscountPercentage = 20;

var studentPrice =
  productPrice - productPrice * (studentDiscountPercentage / 100);

var priceEl = document.getElementById("price");
var studentPriceEl = document.getElementById("student-price");

priceEl.textContent = "Price: $" + productPrice;
studentPriceEl.textContent = "Student Price: $" + studentPrice;
