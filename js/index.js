// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText;

  const quantity = product.getElementsByTagName('input')[0].value;

  const subTotalValue = price * quantity;

  document.querySelector('.subtotal span').innerHTML = subTotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it canx be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);

  const productList = document.querySelectorAll('tr.product');
  console.log(productList);
  for (let i = 0; i < productList.length; i++) {
    const price = productList[i].querySelector('.price span').innerText;
    console.log(price);
    const quantity = productList[i].getElementsByTagName('input')[0].value;

    const subTotalValue = price * quantity;

    productList[i].querySelector('.subtotal span').innerHTML = subTotalValue;
  }
  let sum = 0;
  for (let index = 0; index < productList.length; index++) {
    let subtotal = Number(
      productList[index].querySelector('.subtotal span').innerText
    );
    sum = subtotal + sum;
  }
  console.log(sum);
  document.querySelector('#total-value span').innerHTML = sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
