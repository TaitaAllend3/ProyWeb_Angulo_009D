function toggleDeliveryFields() {
    var deliveryOption = document.querySelector('input[name="delivery-option"]:checked').value;
    var shippingInfo = document.getElementById('shipping-info');
    var deliveryHours = document.getElementById('delivery-hours');

    if (deliveryOption === 'despacho') {
        shippingInfo.style.display = 'none';
        deliveryHours.style.display = 'block';
    } else if (deliveryOption === 'domicilio') {
        shippingInfo.style.display = 'block';
        deliveryHours.style.display = 'none';
    }
}
