document.getElementById('buyNowButton').addEventListener('click', function() {
    document.getElementById('addToCart').classList.remove('hidden');
});

document.getElementById('proceedToBooking').addEventListener('click', function() {
    document.getElementById('addToCart').classList.add('hidden');
    document.getElementById('bookingPage').classList.remove('hidden');
});

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('bookingPage').classList.add('hidden');
    document.getElementById('orderConfirmation').classList.remove('hidden');
});
