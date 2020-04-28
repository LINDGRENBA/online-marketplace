$(document).ready(function() {
  $("#order-shirt").submit(function(event) {

    event.preventDefault();

    let nameInput = $("#name").val();
    let addressInput = $("#address").val();
    let sizeInput = $("#size").val();
    let colorInput = $("#color").val();
    let styleInput = $("input:radio[name=style]:checked").val();

    $("span.name").text(nameInput);
    $("span.address").text(addressInput);
    $("span.size").text(sizeInput);
    $("span.color").text(colorInput);
    $("span.style").text(styleInput);

    
    $("#reciept").show();

  });
});

/* <li>Shipping Address: <span class="address"></span></li>
<li>Shirt Size: <span class="size"></span></li>
<li>Shirt Color: <span class="color"></span></li>
<li>Shirt Style: <span class="style"></span></li> */