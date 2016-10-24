$(document).ready(function () {

  $("div > #button").on("click", function (){
    var btn = $(this).parentsUntil("#card-main").children(".card-content");
    var food = $("> h5", btn).text();
    var price = $("> p", btn).text();
    $(".table-body").append("<tr><td>" + food + "</td><td>" + price + "</td></tr>");
    $("#subtotal > p").text().replaceWith(price);
  })

})
