

// STYLORA CATEGORY FILTER

const categoryCards = document.querySelectorAll(".category");
const navLinks = document.querySelectorAll("nav a[data-category]");
const products = document.querySelectorAll(".product");
const productHeading = document.getElementById("productHeading");
const allProductsButton = document.getElementById("allProducts");
const searchInput = document.getElementById("searchInput");

let selectedCategory = "all";

function showProducts(category) {

    selectedCategory = category;

    const names = {
        men: "Men's Collection",
        women: "Women's Collection",
        kids: "Kids' Collection",
        footwear: "Footwear Collection",
        all: "Trending Products"
    };

    productHeading.textContent = names[category] || "Trending Products";

    products.forEach(product => {

        const matchesCategory =
            category === "all" ||
            product.dataset.category === category;

        const matchesSearch =
            product.querySelector("h3").textContent.toLowerCase()
            .includes(searchInput.value.toLowerCase());

        product.style.display =
            matchesCategory && matchesSearch ? "" : "none";

    });

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}

// Click on category cards

categoryCards.forEach(card => {

    card.addEventListener("click", () => {
        showProducts(card.dataset.category);
    });

    card.style.cursor = "pointer";

});

// Click on navigation

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        showProducts(link.dataset.category);
    });

});

// Show all products

allProductsButton.addEventListener("click", () => {
    searchInput.value = "";
    showProducts("all");
});

// Search products

searchInput.addEventListener("input", () => {
    showProducts(selectedCategory);
});

// Logo returns to homepage

document.getElementById("homeLogo").addEventListener("click", () => {

    searchInput.value = "";
    showProducts("all");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Shop Now button

document.getElementById("shopNow").addEventListener("click", () => {
    showProducts("all");
});
