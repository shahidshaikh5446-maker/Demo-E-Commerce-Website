let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD TO CART (AUTH GUARD)
function addToCart(id, name, price, image) {

    // 🔒 AUTH CHECK
    if (!localStorage.getItem("loggedIn")) {
        showToast("Please login to add items to cart");
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1200);
        return;
    }

    let product = cart.find(p => p.id === id);

    if (product) {
        product.qty++;
    } else {
        cart.push({ id, name, price, image, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    showToast("Added to cart");
}

// CART COUNT
function updateCartCount() {
    let count = cart.reduce((sum, item) => sum + item.qty, 0);
    let el = document.getElementById("cart-count");

    if (el) {
        el.innerText = count;
        el.classList.add("cart-bounce");
        setTimeout(() => el.classList.remove("cart-bounce"), 400);
    }
}

updateCartCount();

// TOAST
function showToast(message) {
    let toast = document.getElementById("toast");
    if (!toast) return;

    toast.innerText = message;
    toast.classList.add("show");

    setTimeout(() => toast.classList.remove("show"), 2500);
}
