var m1 = 0.05;
var m2 = 15.0;
var m3 = 300;

$(".product-quantity input").change(function () {
  updateQuantity(this);
});

$(".product-removal button").click(function () {
  removeItem(this);
});

function recalculateCart() {
  var subtotal = 0;

  $(".product").each(function () {
    subtotal += parseFloat($(this).children(".product-line-price").text());
  });

  var tax = subtotal * m1;
  var shipping = subtotal > 0 ? m2 : 0;
  var total = subtotal + tax + shipping;

  $(".totals-value").fadeOut(m3, function () {
    $("#cart-subtotal").html(subtotal.toFixed(2));
    $("#cart-tax").html(tax.toFixed(2));
    $("#cart-shipping").html(shipping.toFixed(2));
    $("#cart-total").html(total.toFixed(2));
    if (total == 0) {
      $(".checkout").fadeOut(m3);
    } else {
      $(".checkout").fadeIn(m3);
    }
    $(".totals-value").fadeIn(m3);
  });
}

function updateQuantity(d) {
  var productRow = $(d).parent().parent();
  var price = parseFloat(productRow.children(".product-price").text());
  var quantity = $(d).val();
  var linePrice = price * quantity;

  productRow.children(".product-line-price").each(function () {
    $(this).fadeOut(m3, function () {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(m3);
    });
  });
}

function removeItem(c) {
  var productRow = $(c).parent().parent();
  productRow.slideUp(m3, function () {
    productRow.remove();
    recalculateCart();
  });
}
