fetch("https://fakestoreapi.com/products")
    .then(function (res) { return res.json(); })
    .then(function (products) {
    var tableHTML = "<thead><tr><th>ID</th><th>TITLE</th><th>PRICE</th><th>DESCRIPTION</th></thead><tbody>";
    products.forEach(function (p) {
        tableHTML += "<tr><td>".concat(p.id, "</td><td>").concat(p.title, "</td><td>").concat(p.price, "</td><td>").concat(p.description, "</td></tr>");
    });
    tableHTML += "</tbody>";
    document.querySelector("#tableElement").innerHTML = tableHTML;
    var spinnerElement = document.querySelector("#spinner-container");
    spinnerElement.style.display = "none";
});
