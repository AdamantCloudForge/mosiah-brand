document.getElementById('landing-image').addEventListener('click', function () {
    window.location.href = '#'; // Redirect to home page (replace with actual URL)
});

// Example function to fetch featured items
async function fetchFeaturedItems() {
    const response = await fetch('products.json');
    const products = await response.json();
    const featuredContainer = document.getElementById('featured-items');

    products.featured.forEach(item => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <button onclick="addToCart('${item.id}')">Add to Cart</button>
        `;
        featuredContainer.appendChild(productDiv);
    });
}

fetchFeaturedItems();

async function addToCart(itemId) {
    // Implement adding items to cart logic here
}

// Checkout function
async function checkout() {
    const items = []; // Populate with selected items
    const response = await fetch('http://localhost:5000/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
    });
    const session = await response.json();
    window.location = session.id; // Redirect to Stripe checkout
}
