//Prices for products
const pear = 15.678;
const pineapple = 123.965;
const mango = 90.2345;

//max price
const maxPrice = Math.max(pear, pineapple, mango);
//min price
const minPrice = Math.min(pear, pineapple, mango);

const fruitSum = pear + pineapple + mango;

//downwards rounded sum of the fruit without coins
const sumWithoutCoins = Math.trunc(
  Math.floor(pear) + Math.floor(pineapple) + Math.floor(mango)
);

//round sum to hundreds
const roundedSum = Math.round(fruitSum / 100) * 100;

//proof sum -> even or odd
const isEven = roundedSum
if (isEven % 2 == 0) {
  //console.log('Number is even!');
} else {
  //console.log('Number is odd!');
}

//remainder after paing 500 euro
const remainder = 500 - fruitSum;

//average price
const average = fruitSum / 3;
const roundedAverage = average.toFixed(2);

const discount = Math.floor(Math.random() * 99) + 1;

const toPay = (fruitSum - (fruitSum * discount) / 100).toFixed(2);

const primecost = sumWithoutCoins / 2;

const netProfit = primecost - toPay;

const output = document.getElementById("barvaToHtml");

output.innerHTML = `
<p>Price for pear: ${pear}</p>
<p>Price for pineapple: ${pineapple}</p>
<p>Price for mango: ${mango}</p>
<p>The highest price: ${maxPrice}</p>
<p>The lowest price: ${minPrice}</p>
<p>The sum of all prices: ${fruitSum}</p>
<p>Downwards rounded sum without coins: ${sumWithoutCoins}</p>
<p>Rounded sum to hundreds: ${roundedSum}</p>
<p>Is the sum even or odd: ${isEven(console)}</p>
<p>Remainder after paing 500$: ${remainder}</p>
<p>Average price: ${roundedAverage}</p>
<p>Discount for customer: ${discount}%</p>
<p>Сума до сплати: ${toPay}</p>
<p>Прибуток продавця: ${netProfit}</p>
`;

//document.body.innerHTML