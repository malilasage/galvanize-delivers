$(document).ready(function () {
    var subNum = 0;
  $("div > #button").on("click", function (){
    var btn = $(this).parentsUntil("#card-main").children(".card-content");
    var food = $("> h5", btn).text();
    var price = $("> p", btn).text();
    var subtotal = $("#subtotal").text();
    $(".table-body").append("<tr><td>" + food + "</td><td>" + price + "</td></tr>");
      var priceNum = price.slice(1);
      priceNum = parseFloat(priceNum);
      subNum += priceNum;
      // console.log(priceNum + 1);

    // $("#subtotal > p").text().replaceWith(price);
    // var sub = subtotal.text() + price;
    // subtotal.text().replaceWith(sub);
    // subtotal.replaceWith(subNum);

    // console.log(subNum);

  })
})
