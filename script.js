document.getElementById('buyForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const amount = document.getElementById('amount').value;
    alert(`Gracias por tu interés en RabbitCoin. Procesaremos tu compra de $${amount}.`);
    // Aquí puedes agregar integración con pasarelas de pago en el futuro.
});
