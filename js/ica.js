document.addEventListener("DOMContentLoaded", function () {
  const cartButtonList = document.querySelectorAll(".cart");
  console.log(cartButtonList);
  const amounts = [];
  cartButtonList.forEach((cartButton, index) => {
    const number = document.createElement("div");
    const container = cartButton.parentNode;
    let amount = 0;
    amounts[index] = amount;
    cartButton.addEventListener("click", function () {
      amounts[index] += 1;
      number.textContent = amounts[index];
      container.appendChild(number);
    });
  });
});
