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
},

"keripik-tempe": {
    name: "Keripik Tempe",
    category: "INDONESIAN SNACK",
    image: "images/products/keripiktempe.jpeg",

    description:
        "Crispy tempe chips made from selected tempe and carefully chosen seasonings, delivering a savory, crunchy, and authentic Indonesian snack experience.",

    composition:
        "Tempe, tapioca flour, wheat flour, garlic, salt, selected spices, seasoning, and cooking oil.",

    weight:
        "Available in 500 g",

    shelfLife:
        "Approximately 6 months from the production date when stored properly.",

    origin:
        "Indonesia",

    packaging:
        "Available in retail packaging with sealed packaging designed to maintain the product's quality and freshness.",

    type:
        "Tempe Chips",

    pirt:
        "2053204280576-31",

    halal:
        "ID321100000360830622"
},

"usus-pedas": {
    name: "Usus Pedas",
    category: "SPICY SNACK",
    image: "images/products/ususpedas.jpeg",

    description:
        "A crispy Indonesian snack made from carefully selected chicken intestines, seasoned with a spicy and savory blend of spices for a bold and satisfying taste.",

    composition:
        "Chicken intestines, tapioca flour, garlic, salt, chili, selected spices, seasoning, and cooking oil.",

    weight:
        "Available in 500 g",

    shelfLife:
        "Approximately 6 months from the production date when stored properly.",

    origin:
        "Indonesia",

    packaging:
        "Available in retail packaging with sealed packaging designed to maintain the product's quality and freshness.",

    type:
        "Spicy Crispy Snack",

    pirt:
        "2053204012827-29",

    halal:
        "ID321100000360830622"
},


"endog-lewo-original": {
    name: "Endog Lewo Original",
    category: "INDONESIAN SNACK",
    image: "images/products/endoglewoori.jpeg",

    description:
        "A traditional Indonesian snack with a crispy texture and savory original flavor, made from carefully selected ingredients and prepared to deliver a satisfying taste in every bite.",

    composition:
        "Tapioca flour, selected spices, garlic, salt, seasoning, and cooking oil.",

    weight:
        "Available in 500 g",

    shelfLife:
        "Approximately 6 months from the production date when stored properly.",

    origin:
        "Indonesia",

    packaging:
        "Available in retail packaging with sealed packaging designed to maintain the product's quality and freshness.",

    type:
        "Traditional Crispy Snack",

    pirt:
        "2053204190576-31",

    halal:
        "ID321100000360830622"
},

"basreng-original": {
    name: "Basreng Original",
    category: "INDONESIAN SNACK",
    image: "images/products/basrengori.jpeg",

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

"coco-crunch-fruit": {
    name: "Coco Crunch Fruit",
    category: "SWEET SNACK",
    image: "images/products/cocobuah.jpeg",

    description:
        "A crispy and flavorful Indonesian snack made from selected ingredients, combined with a sweet and crunchy fruit-inspired flavor for a satisfying taste.",

    composition:
        "Coco crunch, selected cereal ingredients, fruit flavoring, sugar, milk ingredients, and other food-grade ingredients.",

    weight:
        "Available in 500 g · 900 g",

    shelfLife:
        "6 Months",

    origin:
        "Indonesia",

    packaging:
        "Available in retail packaging and suitable for convenient storage.",

    type:
        "Sweet Crunchy Snack",

    pirt:
        "2053204012827-29",

    halal:
        "ID321100000360830622"
},

"coco-crunch-chocolate": {
    name: "Coco Crunch Chocolate",
    category: "SWEET SNACK",
    image: "images/products/cocochocolate.jpeg",

    description:
        "A crispy and flavorful Indonesian snack made from selected ingredients, combined with a sweet and crunchy fruit-inspired flavor for a satisfying taste.",

    composition:
        "Coco crunch, selected cereal ingredients, fruit flavoring, sugar, milk ingredients, and other food-grade ingredients.",

    weight:
        "Available in 500 g · 900 g",

    shelfLife:
        "6 Months",

    origin:
        "Indonesia",

    packaging:
        "Available in retail packaging and suitable for convenient storage.",

    type:
        "Chocolate Crunchy Snack",

    pirt:
        "2053204012827-29",

    halal:
        "ID321100000360830622"
},

"cassava-chips": {
    name: "Cassava Chips",
    category: "INDONESIAN SNACK",
    image: "images/products/cassavachips.jpeg",

    description:
        "Crispy cassava chips made from carefully selected cassava, offering a light, crunchy texture and savory Indonesian snack experience.",

    composition:
        "Cassava, cooking oil, salt, and selected seasonings.",

    weight:
        "Available in 1 kg",

    shelfLife:
        "Approximately 6 months from the production date when stored properly.",

    origin:
        "Indonesia",

    packaging:
        "Available in retail packaging with sealed packaging designed to maintain the product's quality and freshness.",

    type:
        "Cassava Chips",

    pirt:
        "2053204012827-29",

    halal:
        "ID321100000360830622"
},



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