document.getElementById('buyNow').addEventListener('click', () => {
    const quantity = document.getElementById('quantity').value;
    const address = document.getElementById('address').value;

    if (!address) {
        alert("Please enter your shipping address.");
        return;
    }

    // Prepare email
    const subject = `Order for Cleanser - Luxe Organix`;
    const body = `Product: Cleanser\nQuantity: ${quantity}\nAddress: ${address}`;
    window.location.href = `mailto:gamboadavidgabriel@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});