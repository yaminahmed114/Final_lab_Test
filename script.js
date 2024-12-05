function updatePrice() {
    const productSelect = document.getElementById("product");
    const selectedProduct = productSelect.options[productSelect.selectedIndex];
    const price = selectedProduct.getAttribute("data-price");
    document.getElementById("price").value = price;
    calculateTotal();
}
function calculateTotal() {
   const quantity = document.getElementById("quantity").value;
   const price = document.getElementById("price").value;
   const total = quantity * price;
   document.getElementById("totalAmount").textContent = total.toFixed(2);
}

