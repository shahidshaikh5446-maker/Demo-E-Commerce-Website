let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function toggleWishlist(id, name, price, image) {
    let index = wishlist.findIndex(p => p.id === id);

    if (index >= 0) {
        wishlist.splice(index, 1);
        showToast("Removed from wishlist");
    } else {
        wishlist.push({ id, name, price, image });
        showToast("Added to wishlist");
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}
