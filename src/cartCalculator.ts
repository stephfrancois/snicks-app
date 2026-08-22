// const priceArray:number[] = [86.99, 125.75, 109.99];
// const subTotalPrice: number = priceArray.reduce((acc, currentValue)=> acc + currentValue,0);
// console.log(subTotalPrice)

const nikeDunkLowPrice = 8699;
const AirJordanLowPrice = 60499;
const subTotalPrice = nikeDunkLowPrice + AirJordanLowPrice;
const txRate = 0.15;
const txAmount = subTotalPrice * txRate;
const formattedPrice = Math.round(subTotalPrice + txAmount);
const totalPrice = formattedPrice / 100 ;
console.log(totalPrice)