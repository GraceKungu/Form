function billingFunction() {
    var billName =
    document.getElementById("billingName");
    var billZip=
    document.getElementById("billingZip");

    if (document.getElementById("same").checked) {
        var shipName =
        document.getElementById("shippingName");
        var shipZip=
        document.getElementById("shippingZip");

        billName.value=shipName.value;
        billZip.value=shipZip.value;

    }
    else{
        billName.value="";
        billZip.value="";
    }
    return;
    
}