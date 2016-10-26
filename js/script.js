$(document).ready(function () {
  var subNum = 0;
  var taxRate = .08845;
  var subtotal = $("#subtotal");
  var tax = $("#tax");
  var total = $("#total");

  $("div > #button").on("click", function (){
    var btn = $(this).parentsUntil("#card-main").children(".card-content");
    var food = $("> h5", btn).text();
    var price = $("> p", btn).text();
    var priceNum = price.slice(1);
    //appending items to table
    $(".table-body").append("<tr><td>" + food + "</td><td>" + price + "</td></tr>");
    //updating subtotal
    priceNum = parseFloat(priceNum);
    subNum += priceNum;
    subtotal.html("$" + subNum.toFixed(2));
    //updating tax
    tax.html("$" + (subNum*taxRate).toFixed(2));
    //updating total
    total.html("$" + (subNum + (subNum*taxRate)).toFixed(2));
  })
})
