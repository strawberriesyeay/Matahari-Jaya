document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);
    const product = params.get("product");

    const products = {

    "basreng": {
    name: "Basreng",
    category: "INDONESIAN SNACK",
    image: "images/products/basreng-1.jpeg",

    description:
        "A crispy Indonesian snack made from seasoned fish meatball, offering a savory, aromatic, and satisfying taste with a crunchy texture.",

    composition:
        "Fish meatball (fish, tapioca flour, seasoning), tapioca flour, garlic, salt, spices, flavoring, and cooking oil.",

    weight:
        "Available in 250 g · 500 g",

    shelfLife:
        "6 Months",

    origin:
        "Indonesia",

    packaging:
        "Available in retail packaging with sealed packaging designed to help maintain product quality and freshness.",

    type:
        "Crispy Savory Snack",

    pirt:
        "2053204080576-29",

    halal:
        "ID321100000360830622"
},

        "endog-lewo": {
    name: "Endog Lewo",
    category: "INDONESIAN SNACK",
    image: "images/products/endoglewoo.jpeg",

    description:
        "A traditional Indonesian savory snack with a crunchy texture and distinctive seasoning, inspired by the culinary tradition of Garut, West Java.",

    composition:
        "Tapioca flour, wheat flour, eggs, garlic, salt, seasoning, spices, and cooking oil.",

    weight:
        "Available in 250 g · 500 g",

    shelfLife:
        "Approximately 6 months from the production date when stored properly.",

    origin:
        "Indonesia",

    packaging:
        "Available in retail packaging with sealed packaging to help preserve the product's texture, taste, and freshness.",

    type:
        "Traditional Snack",

    pirt:
        "2053204190576-31",

    halal:
        "ID321100000360830622"
},

        "sale-pisang": {
    name: "Sale Pisang",
    category: "INDONESIAN SNACK",
    image: "images/products/salepisangg.jpeg",

    description:
        "A traditional Indonesian banana snack with a naturally sweet and distinctive flavor.",

    composition:
        "Selected ripe bananas, wheat flour or coating ingredients, sugar, salt, and cooking oil.",

    weight:
        "Available in 500 g",

    shelfLife:
        "Approximately 6 months from the production date when stored properly.",

    origin:
        "Indonesia",

    packaging:
        "Available in retail packaging with sealed packaging designed to maintain the product's quality and freshness.",

    type:
        "Traditional Snack",

    pirt:
        "2053204150576-31",

    halal:
        "ID321100000360830622"
}
    };


    const data = products[product];

    if (!data) {
        document.querySelector(".product-detail-info").innerHTML = `
            <h1>Product Not Found</h1>
            <p>The product you are looking for is not available.</p>
            <a href="products.html" class="back-products">
                ← Back to Products
            </a>
        `;

        return;
    }

document.getElementById("productComposition").textContent =
    data.composition;

document.getElementById("productWeight").textContent =
    data.weight;

document.getElementById("productShelfLife").textContent =
    data.shelfLife;

document.getElementById("productOrigin").textContent =
    data.origin;

document.getElementById("productPackaging").textContent =
    data.packaging;

document.getElementById("productType").textContent =
    data.type;

document.getElementById("productPirt").textContent =
    data.pirt;

document.getElementById("productHalal").textContent =
    data.halal;
document.getElementById("productImage").src = data.image;

document.getElementById("productImage").alt = data.name;
});