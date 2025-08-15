const brandsCollection = document.querySelector('.brands-collection');

brandsCollection.addEventListener('change', (e) => {
  const input = e.target;
  if (input.type !== 'radio') return;

  const label =
    input.closest('label') ||
    brandsCollection.querySelector(`label[for="${input.id}"]`);

  const prev = brandsCollection.querySelector('label.active');
  if (prev && prev !== label) prev.classList.remove('active');

  if (label) {
    if (input.checked) label.classList.add('active');
    else label.classList.remove('active'); 
  }
});

const priceCollection = document.querySelector('.price-collection');

priceCollection.addEventListener('change', (e) => {
  const input = e.target;
  if (input.type !== 'radio') return;

  const label =
    input.closest('label') ||
    priceCollection.querySelector(`label[for="${input.id}"]`);

  const prev = priceCollection.querySelector('label.active');
  if (prev && prev !== label) prev.classList.remove('active');

  if (label) {
    if (input.checked) label.classList.add('active');
    else label.classList.remove('active'); 
  }
});

const sizeCollection = document.querySelector('.size-collection');

sizeCollection.addEventListener('change', (e) => {
  const input = e.target;
  if (input.type !== 'radio') return;

  const label =
    input.closest('label') ||
    sizeCollection.querySelector(`label[for="${input.id}"]`);

  const prev = sizeCollection.querySelector('label.active');
  if (prev && prev !== label) prev.classList.remove('active');

  if (label) {
    if (input.checked) label.classList.add('active');
    else label.classList.remove('active'); 
  }
});

const strCapacityCollection = document.querySelector('.strCapacity-collection');

strCapacityCollection.addEventListener('change', (e) => {
  const input = e.target;
  if (input.type !== 'radio') return;

  const label =
    input.closest('label') ||
    strCapacityCollection.querySelector(`label[for="${input.id}"]`);

  const prev = strCapacityCollection.querySelector('label.active');
  if (prev && prev !== label) prev.classList.remove('active');

  if (label) {
    if (input.checked) label.classList.add('active');
    else label.classList.remove('active'); 
  }
});

const cusRateCollection = document.querySelector('.cusRate-collection');

cusRateCollection.addEventListener('change', (e) => {
  const input = e.target;
  if (input.type !== 'radio') return;

  const label =
    input.closest('label') ||
    cusRateCollection.querySelector(`label[for="${input.id}"]`);

  const prev = cusRateCollection.querySelector('label.active');
  if (prev && prev !== label) prev.classList.remove('active');

  if (label) {
    if (input.checked) label.classList.add('active');
    else label.classList.remove('active'); 
  }
});




let allProducts = document.querySelectorAll(".products .card-2")

let buttonsFilter = document.querySelectorAll(".buttonsFilter button")

buttonsFilter.forEach(button => {
  button.addEventListener('click', function () {
    // Hide all products
    allProducts.forEach(product => product.classList.add('d-none'));

    // Show products with matching category
    let cat = document.querySelectorAll(`.products [data-cat="${this.id}"]`);
    cat.forEach(item => item.classList.remove('d-none'));
  });
});

