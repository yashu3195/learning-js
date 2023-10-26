/*const arr1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4

const initialValue = 0;


const sumWithInitial = arr1.reduce((accumulator, currentValue) => accumulator + currentValue,
initialValue);

console.log(sumWithInitial);
*/


const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function(acc, currVal) {
    console.log(`acc is: ${acc} and currval is: ${currVal}`);
    return acc + currVal}, 0 )
     console.log(myTotal);

  const totalNum = myNums.reduce((accumulation, currentValue) => accumulation + currentValue, 0)
  

console.log(totalNum);


const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 999
    },
    {
        itemName: "Machine Learning course",
        price: 7999
    },
    {
        itemName: "Data Analysis course",
        price: 9999
    }
]

const totalCart = shoppingCart.reduce((acc, item) => acc + item.price, 0 )

console.log(totalCart);