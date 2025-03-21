window.addEventListener("load", function () {
    setTimeout(() => {
        document.querySelector(".loader-container").style.display = "none";
    }, 700);
});



const quantityElement = document.querySelector(".quantity");
const minusButton = document.querySelector(".minus");
const plusButton = document.querySelector(".plus");
let quantity = 0;

plusButton.addEventListener("click", () => {
    quantity++;
    quantityElement.textContent = quantity;
});

minusButton.addEventListener("click", () => {
    if (quantity > 0) {
        quantity--;
        quantityElement.textContent = quantity;
    }
});





