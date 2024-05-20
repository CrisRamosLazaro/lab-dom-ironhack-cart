// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').textContent)
  const quantity = Number(product.querySelector('.quantity input').value)
  const subtotal = price * quantity

  const subtotalField = product.querySelector('.subtotal span')
  subtotalField.innerHTML = subtotal

  return subtotal
}

function calculateAll() {

  // ITERATION 2
  const products = document.getElementsByClassName('product')

  let totalPrice = 0

  for (let i = 0; i < products.length; i++) {
    totalPrice += updateSubtotal(products[i])
  }

  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = totalPrice

  return totalPrice
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  // 👉 option 1 - simpler
  // 1.1. Get the <tr> that contains the clicked button
  // const productRow = target.parentNode.parentNode

  // 1.2. Remove the <tr> from the DOM
  // productRow.remove()

  //In this code, target.parentNode is the <td> that contains the button, and target.parentNode.parentNode is the <tr> that contains the <td>. The remove() method removes the <tr> from the DOM.

  // 👉 option 2 - using removeChild() as instructed
  // 2.1. Get the <tr> that contains the clicked button
  // const productRow = target.parentNode.parentNode

  // 2.2. Get the parent of the <tr> (which is the <tbody>)
  // const tbody = productRow.parentNode

  // 2.3. Remove the <tr> from the DOM
  // tbody.removeChild(productRow)

  // That's option 1 with extra steps

  // 👉 option 3 - removeChild() as instructed using the MDN reference provided

  // 3.1. Get the <tr> that contains the clicked button
  const productRow = target.parentNode.parentNode

  // 3.2. Access its parent directly without creating a new variable
  productRow.parentNode.removeChild(productRow)

  // That's also option 1 with extra steps

  calculateAll()
}

// ITERATION 5

function createProduct() {

  let newProductRow = document.createElement('tr')
  newProductRow.setAttribute('class', 'product')

  let parentTable = document.getElementsByTagName('tbody')[0]
  parentTable.appendChild(newProductRow)

  // function createTable(cols) {

  //   let numOfCols = cols

  //   for (let i = 0; i < numOfCols; i++) {
  //     let newCol = document.createElement('td')
  //     newProductRow.appendChild(newCol)

  //     if (i === 2) {
  //       let newColsField = document.createElement('input')
  //       newCol.appendChild(newColsField)
  //       newColsField.setAttribute('type', 'number')
  //       newColsField.setAttribute('value', '0')
  //       newColsField.setAttribute('min', '0')
  //       newColsField.setAttribute('placeholder', 'Quantity')
  //     } else if (i === numOfCols - 1) {
  //       let newColsField = document.createElement('button')
  //       newCol.appendChild(newColsField)
  //       newColsField.setAttribute('class', 'btn btn-remove')
  //       newColsField.innerHTML = 'Remove'

  //     } else {
  //       let newColsField = document.createElement('span')
  //       newCol.appendChild(newColsField)

  //       if (i === 0) {
  //         newColsField.setAttribute('class', 'name')
  //         newColsField.innerHTML = 'product name' //implement

  //       } else if (i === 1) {
  //         newColsField.setAttribute('class', 'price')
  //         newColsField.innerHTML = '0'//implement

  //       } else if (i === 3) {
  //         newColsField.setAttribute('class', 'subtotal')
  //         newColsField.innerHTML = '0' //implement
  //       }
  //     }
  //   }
  // }

  // createTable(5)

  const nameInput = document.querySelectorAll('.create-product input')[0]
  const name = nameInput.value
  const priceInput = document.querySelectorAll('.create-product input')[1]
  const price = priceInput.value

  newProductRow.innerHTML = `
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `
  const newRowSubtotal = newProductRow.querySelector('.quantity input')
  newRowSubtotal.addEventListener('change', updateSubtotal)

  const newRowRemoveBtn = newProductRow.querySelector('.btn-remove')
  newRowRemoveBtn.addEventListener('click', removeProduct)

  nameInput.value = ''
  priceInput.value = ''
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeItem = document.getElementsByClassName('btn-remove')

  for (let i = 0; i < removeItem.length; i++) {
    removeItem[i].addEventListener('click', removeProduct)
  }

  const createItem = document.getElementById('create')
  createItem.addEventListener('click', createProduct)

})
