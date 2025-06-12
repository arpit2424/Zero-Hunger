function togglePaymentFields() {
    var paymentMethod = document.getElementById('paymentMethod').value;
    document.getElementById('cardFields').classList.add('hidden');
    document.getElementById('upiFields').classList.add('hidden');

    if (paymentMethod === 'card') {
        document.getElementById('cardFields').classList.remove('hidden');
    } else if (paymentMethod === 'upi') {
        document.getElementById('upiFields').classList.remove('hidden');
    }
}

document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var amount = document.getElementById('amount').value;
    var paymentMethod = document.getElementById('paymentMethod').value;

    if (name === '' || email === '' || amount === '' || amount <= 0 || paymentMethod === '') {
        alert('Please fill out all required fields correctly.');
        return;
    }

    if (paymentMethod === 'card') {
        var cardNumber = document.getElementById('cardNumber').value;
        var expiry = document.getElementById('expiry').value;
        var cvv = document.getElementById('cvv').value;
        if (cardNumber === '' || expiry === '' || cvv === '') {
            alert('Please enter valid card details.');
            return;
        }
    } else if (paymentMethod === 'upi') {
        var upiId = document.getElementById('upiId').value;
        if (upiId === '') {
            alert('Please enter a valid UPI ID.');
            return;
        }
    }

    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('donationForm').reset();
    document.getElementById('cardFields').classList.add('hidden');
    document.getElementById('upiFields').classList.add('hidden');
});