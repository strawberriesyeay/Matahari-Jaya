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

"momo-stik": {
    name: "Momo Stik",
    category: "INDONESIAN SNACK",
    image: "images/products/momostikk.jpg",

    description:
        "Crispy and tasty Momo Stik available in three delicious variants: Pandan, Chocolate, and Durian. Made to deliver a crunchy and enjoyable snack experience for every occasion.",

    composition:
        "Starch-based snack ingredients, selected seasonings, cooking oil, and flavoring ingredients according to the selected variant.",

    weight:
        "Available in 500 g · 1 kg",

    shelfLife:
        "Approximately 12 months from the production date when stored properly.",

    origin:
        "Indonesia",

    packaging:
        "Available in retail packaging with three flavor variants: Pandan, Chocolate, and Durian.",

    type:
        "Sweet Snack",

    pirt:
        "2053204012827-29",

    halal:
        "ID321100000360830622"
},

"breakfast": {
    name: "Complete Indonesian Breakfast Package",
    category: "BREAKFAST PACKAGE",
    image: "images/products/breakfast.jpeg",

    description:
        "A convenient Indonesian breakfast package combining savory rice balls, Coco Crunch cereal, and full cream milk. Designed as a practical and satisfying breakfast option with a combination of savory and sweet flavors.",

    composition:
        "Rice balls, Coco Crunch cereal, and full cream milk with selected ingredients",

    weight:
        "Available in selected package sizes.",

    shelfLife:
        "Approximately 6 months from the production date when stored properly.",

    origin:
        "Indonesia",

    packaging:
        "Available in retail packaging with three variants: Coco Chocolate, Coco Fruit, and Fruit Frank.",

    type:
        "Breakfast Package",

    pirt:
        "2053204012827-29",

    halal:
        "ID321100000360830622"
},

"coco-ring": {
    name: "Coco Crunch · Fruit Ring",
    category: "SWEET SNACK",
    image: "images/products/2.jpg",

    description:
        "A crunchy and sweet cereal snack available in three delicious variants: Coco Chocolate, Coco Fruit, and Fruit Frank, made with selected ingredients and Dancow milk.",

    composition:
        "Cereal-based ingredients, milk powder, sugar, and chocolate or fruit flavoring.",

    weight:
        "Available in 500 g",

    shelfLife:
        "Approximately 6 months from the production date when stored properly.",

    origin:
        "Indonesia",

    packaging:
        "Available in retail packaging with three variants: Coco Chocolate, Coco Fruit, and Fruit Frank.",

    type:
        "Sweet Snack",

    pirt:
        "2053204012827-29",

    halal:
        "ID321100000360830622"
},

"snack-cup": {
    name: "Snack Cup",
    category: "BUSINESS PACKAGE",
    image: "images/products/snackcup.jpeg",

    description:
        "A practical and attractive snack package designed for business, resale, and everyday snacking. Each box contains 30 individual snack cups with a variety of tasty snack selections.",

    composition:
        "Assorted snack varieties selected according to the available package.",

    weight:
        "Available according to the selected snack cup contents.",

    shelfLife:
        "Approximately 6 months from the production date when stored properly.",

    origin:
        "Indonesia",

    packaging:
        "1 box contains 30 individual snack cups with practical and hygienic packaging.",

    type:
        "Business Snack Package",

    pirt:
        "2053204012827-29",

    halal:
        "ID321100000360830622"
},

"banana-fingers": {
    name: "Banana Fingers",
    category: "INDONESIAN SNACK",
    image: "images/products/salejari.jpg",

    description:
        "A crispy traditional Indonesian banana snack made from selected bananas, offering a naturally sweet flavor and satisfying crunchy texture.",

    composition:
        "Selected bananas, flour, sugar, and cooking oil.",

    weight:
        "Available in 500 g.",

    shelfLife:
        "Approximately 6 months from the production date when stored properly.",

    origin:
        "Indonesia",

    packaging:
        "Available in practical retail packaging suitable for everyday snacking and distribution.",

    type:
        "Traditional Banana Snack",

    pirt:
        "2053204012827-29",

    halal:
        "ID321100000360830622"
},

"crispy-chicken-skin": {
    name: "Crispy Chicken Skin",
    category: "INDONESIAN SNACK",
    image: "images/products/kulitayam.jpg",

    description:
        "A crispy and savory Indonesian snack made from selected chicken skin, seasoned with carefully selected spices for a delicious and satisfying crunch.",

    composition:
        "Chicken skin, tapioca flour, garlic, salt, chili, selected spices, seasoning, and cooking oil.",

    weight:
        "Available in 500 g.",

    shelfLife:
        "Approximately 6 months from the production date when stored properly.",

    origin:
        "Indonesia",

    packaging:
        "Available in practical retail packaging suitable for everyday snacking and distribution.",

    type:
        "Traditional Banana Snack",

    pirt:
        "2053204012827-29",

    halal:
        "ID321100000360830622"
},

"snack-cup-pack": {
    name: "Snack Cup",
    category: "SNACK PACKAGE",
    image: "images/products/pack.jpeg",

    description:
        "A practical assorted snack package featuring a variety of Indonesian snacks in individual portions, suitable for everyday snacking, retail, and business purposes.",

    composition:
        "Rice Ball, Coco Crunch Chocolate, Coco Crunch Fruit, Fruit Ring, Es Bul Chocolate Durian, Es Bul Pandan Mango, and Endog Lewo.",

    weight:
        "Available in 1.5 kg.",

    shelfLife:
        "Approximately 6 months from the production date when stored properly.",

    origin:
        "Indonesia",

    packaging:
        "Available in practical retail packaging suitable for everyday snacking and distribution.",

    type:
        "Package Snack",

    pirt:
        "2053204012827-29",

    halal:
        "ID321100000360830622"
},

"fruit-ring": {
    name: "Fruit Ring",
    category: "SWEET SNACK",
    image: "images/products/fruit.jpg",

    description:
        "A colorful and crunchy cereal snack with a sweet fruit-inspired flavor, offering a light and enjoyable taste for every occasion.",

    composition:
        "Cereal-based ingredients, sugar, milk powder, fruit flavoring, and other food-grade ingredients.",

    weight:
        "Available in 550 g · 900 g ",

    shelfLife:
        "Approximately 6 months from the production date when stored properly.",

    origin:
        "Indonesia",

    packaging:
        "Available in practical retail packaging designed to help maintain the product's quality, crunchiness, and freshness.",

    type:
        "Sweet Cereal Snack",

    pirt:
        "2053204012827-29",

    halal:
        "ID321100000360830622"
},

"rice-ball": {
    name: "Rice Ball",
    category: "INDONESIAN SNACK",
    image: "images/products/riceball.jpg",

    description:
        "A savory Indonesian snack made from rice-based ingredients, offering a soft and flavorful texture with a satisfying taste for everyday snacking.",

    composition:
        "Rice, selected seasonings, spices, salt, and other food-grade ingredients.",

    weight:
        "Available in 550 g · 900 g ",

    shelfLife:
        "Approximately 6 months from the production date when stored properly.",

    origin:
        "Indonesia",

    packaging:
        "Available in practical retail packaging designed to help maintain the product's quality, taste, and freshness.",

    type:
        "Rice-Based Snack",

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