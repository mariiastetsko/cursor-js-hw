let num1 = parseInt(prompt('Enter a number', ''));

while (isNaN(num1) || !Number.isInteger(num1)) {
    alert('Wrong number! Try again!');
    num1 = parseInt(prompt('Enter a number', ''));
}

let num2 = parseInt(prompt('Enter a second number, bigger than the first one', ''));

while (isNaN(num2) || (num2 < num1) || !Number.isInteger(num2)) {
    alert('Wrong number!');
    num2 = parseInt(prompt('Wrong number! Try again!', ''));
}



let isEven = confirm('Allow even numbers?')
let sum = 0;

if (isEven == true) {
  for (i=num1; i<=num2; i++) {
    if (i%2 !==0){
      sum += i;
    }
  }
}

if (isEven == true) {
  for (i=num1; i<=num2; i++) {
      sum += i;
  }
}

alert(`Your sum is: ${sum} !`);